import { Customers, OmieCustomer } from '../customers'
import { AxiosResponse } from 'axios'

jest.mock('../customers')
const MockedCustomers = Customers as jest.Mock<Customers>
MockedCustomers.prototype.upsert.mockImplementation((user: OmieCustomer) => {
  return new Promise((resolve, reject) => {
    if (user.cnpj_cpf) {
      const res: AxiosResponse = {
        data: user,
        status: 200,
        statusText: 'OK',
        headers: {},
        config: {}
      }
      resolve(res)
    } else {
      const res: AxiosResponse = {
        data: { faltstring: 'cnpj_cpf é obrigatório', faltcode: 'SOAP-ENV:Client-101' },
        status: 500,
        statusText: 'SERVER ERROR',
        headers: {},
        config: {}
      }
      reject(res)
    }
  })
})

beforeEach(() => {
  MockedCustomers.mockClear()
})

describe('Customers', () => {
  it('Creates an instance of Customers', () => {
    const customers = new Customers()
    expect(customers).toBeInstanceOf(Customers)
  })

  it('resolves a promise on successful upsert', () => {
    const customers = new MockedCustomers()
    /* eslint-disable camelcase, @typescript-eslint/camelcase */
    const user: OmieCustomer = {
      codigo_cliente_integracao: '12345678909',
      nome_fantasia: 'Test',
      razao_social: 'Test LTDA',
      cnpj_cpf: '12345678909'
    }
    /* eslint-enable camelcase, @typescript-eslint/camelcase */
    expect.assertions(1)
    return customers.upsert(user)
      .then((res: AxiosResponse) => expect(res.data).toBe(user))
  })

  it('rejects a promise on failed upsert', () => {
    const customers = new MockedCustomers()
    /* eslint-disable camelcase, @typescript-eslint/camelcase */
    const user: OmieCustomer = {
      codigo_cliente_integracao: '12345678909',
      nome_fantasia: 'Test',
      razao_social: 'Test LTDA',
      cnpj_cpf: ''
    }
    /* eslint-enable camelcase, @typescript-eslint/camelcase */
    expect.assertions(1)
    return expect(customers.upsert(user)).rejects.toEqual({
      data: { faltstring: 'cnpj_cpf é obrigatório', faltcode: 'SOAP-ENV:Client-101' },
      status: 500,
      statusText: 'SERVER ERROR',
      headers: {},
      config: {}
    })
  })
})
