import { ApiClient } from './api-client'
import { AxiosResponse } from 'axios'
import { OSCadastro } from './interfaces/os-cadastro'

export class OrdemServico extends ApiClient {
  public incluirOS (osCadastro: OSCadastro): Promise<AxiosResponse<OSCadastro>> {
    return this.apiCall('post', {
      url: 'servico/os',
      action: 'IncluirOS',
      data: osCadastro
    })
  }
}
