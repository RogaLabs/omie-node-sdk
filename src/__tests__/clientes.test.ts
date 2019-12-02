import { Clientes } from '../clientes'
import { ClientesCadastro } from '../interfaces/clientes-cadastro'
import { AxiosResponse } from 'axios'

jest.mock('../clientes')
const MockedClientes = Clientes as jest.Mock<Clientes>
MockedClientes.prototype.upsert.mockImplementation((user: ClientesCadastro) => {
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
  MockedClientes.mockClear()
})

describe('Clientes', () => {
  it('Creates an instance of Clientes', () => {
    const clientes = new Clientes()
    expect(clientes).toBeInstanceOf(Clientes)
  })

  it('resolves a promise on successful upsert', () => {
    const Clientes = new MockedClientes()
    /* eslint-disable camelcase, @typescript-eslint/camelcase */
    const user: ClientesCadastro = {
      codigo_cliente_integracao: '12345678909',
      nome_fantasia: 'Test',
      razao_social: 'Test LTDA',
      cnpj_cpf: '12345678909'
    }
    /* eslint-enable camelcase, @typescript-eslint/camelcase */
    expect.assertions(1)
    return Clientes.upsert(user)
      .then((res: AxiosResponse) => expect(res.data).toBe(user))
  })

  it('rejects a promise on failed upsert', () => {
    const Clientes = new MockedClientes()
    /* eslint-disable camelcase, @typescript-eslint/camelcase */
    const user: ClientesCadastro = {
      codigo_cliente_integracao: '12345678909',
      nome_fantasia: 'Test',
      razao_social: 'Test LTDA',
      cnpj_cpf: ''
    }
    /* eslint-enable camelcase, @typescript-eslint/camelcase */
    expect.assertions(1)
    return expect(Clientes.upsert(user)).rejects.toEqual({
      data: { faltstring: 'cnpj_cpf é obrigatório', faltcode: 'SOAP-ENV:Client-101' },
      status: 500,
      statusText: 'SERVER ERROR',
      headers: {},
      config: {}
    })
  })
})
