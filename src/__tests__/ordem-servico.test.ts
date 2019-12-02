import { OrdemServico } from '../ordem-servico'
import { AxiosResponse } from 'axios'
import { OSCadastro } from '../interfaces/os-cadastro'
import { StringBool } from '../enums'

jest.mock('../ordem-servico')
const MockedOrdemServicos = OrdemServico as jest.Mock<OrdemServico>
MockedOrdemServicos.prototype.incluirOS.mockImplementation((osCadastro: OSCadastro) => {
  return new Promise((resolve, reject) => {
    if (osCadastro.Departamentos.length > 0) {
      const res: AxiosResponse = {
        data: osCadastro,
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

const osCadastro: OSCadastro = {
  Email: {
    cEnvRecibo: 'N',
    cEnvLink: 'N',
    cEnvBoleto: 'N',
    cEnviarPara: 'sider@rogalabs.com'
  },
  Cabecalho: {
    cEtapa: '50',
    cCodIntCli: '73173376000171',
    cCodIntOS: 'RMBR000002',
    nQtdeParc: 1,
    dDtPrevisao: '10/12/2019'
  },
  Departamentos: [{
    cCodDepto: '1575731226',
    nParc: 15.453,
    nValor: 1694.03,
    nValorFixo: 'S'
  }],
  InformacoesAdicionais: {
    cCodCateg: '1.01.02',
    cNumPedido: '1',
    nCodCC: 1575699435
  },
  ServicosPrestados: [{
    cCodIntServico: 'SERVREMAX',
    cDescServ: 'Descrição que será impressa no corpo da NF de Serviço',
    nQtde: 1,
    nValUnit: 10962.45,
    cNaoGerarFinanceiro: StringBool.S
  }]
}

beforeEach(() => {
  MockedOrdemServicos.mockClear()
})

describe('OrdemServico', () => {
  it('Creates an instance of OrdemServico', () => {
    const ordemServico = new OrdemServico()
    expect(ordemServico).toBeInstanceOf(OrdemServico)
  })

  it('resolves a promise on successful incluirOS', () => {
    const ordemServicos = new MockedOrdemServicos()
    expect.assertions(1)
    return ordemServicos.incluirOS(osCadastro)
      .then((res: AxiosResponse) => expect(res.data).toBe(osCadastro))
  })

  it('rejects a promise on failed upsert', () => {
    const ordemServicos = new MockedOrdemServicos()
    osCadastro.Departamentos = []
    expect.assertions(1)
    return expect(ordemServicos.incluirOS(osCadastro)).rejects.toEqual({
      data: { faltstring: 'cnpj_cpf é obrigatório', faltcode: 'SOAP-ENV:Client-101' },
      status: 500,
      statusText: 'SERVER ERROR',
      headers: {},
      config: {}
    })
  })
})
