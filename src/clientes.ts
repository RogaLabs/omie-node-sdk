import { ApiClient } from './api-client'
import { AxiosResponse } from 'axios'
import { ClientesCadastro } from './interfaces/clientes-cadastro'

/**
 * Clientes API resource.
 *
 * @export
 * @class Clientes
 * @extends {ApiClient}
 */
export class Clientes extends ApiClient {
  /**
   *
   *
   * @param {ClientesCadastro} data
   * @returns {Promise<AxiosResponse>}
   * @memberof Clientes
   */
  public upsert (data: ClientesCadastro): Promise<AxiosResponse> {
    return this.apiCall('post', {
      url: 'geral/clientes/',
      action: 'UpsertClient',
      data
    })
  }
}
