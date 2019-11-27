import { ApiClient } from './api-client'
import { AxiosResponse } from 'axios'

/**
 *
 *
 * @export
 * @class Customers
 * @extends {ApiClient}
 */
export class Customers extends ApiClient {
  /**
   *
   *
   * @param {OmieCustomer} data
   * @returns {Promise<AxiosResponse>}
   * @memberof Customers
   */
  public upsert (data: OmieCustomer): Promise<AxiosResponse> {
    return this.apiCall('post', {
      url: 'clientes/',
      action: 'UpsertClient',
      data
    })
  }
}

/**
 *
 *
 * @export
 * @interface OmieCustomer
 */
/* eslint-disable camelcase */
export interface OmieCustomer {
  codigo_cliente_omie?: number;
  codigo_cliente_integracao?: string;
  razao_social: string;
  cnpj_cpf: string;
  nome_fantasia: string;
  telefone1_ddd?: string;
  telefone1_numero?: string;
  contato?: string;
  endereco?: string;
  endereco_numero?: string;
  bairro?: string;
  complemento?: string;
  estado?: string;
  cidade?: string;
  cep?: string;
  codigo_pais?: string;
  telefone2_ddd?: string;
  telefone2_numero?: string;
  fax_ddd?: string;
  fax_numero?: string;
  email?: string;
  homepage?: string;
  inscricao_estadual?: string;
  inscricao_municipal?: string;
  inscricao_suframa?: string;
  optante_simples_nacional?: string;
  tipo_atividade?: string;
  cnae?: string;
  produtor_rural?: string;
  contribuinte?: string;
  observacao?: string;
  recomendacao_atraso?: string;
  tags?: OmieTag[];
  info?: OmieInfo;
  pessoa_fisica?: string;
  exterior?: string;
  logradouro?: string;
  importado_api?: string;
  bloqueado?: string;
  cidade_ibge?: string;
  valor_limite_credito?: number;
  bloquear_faturamento?: string;
  recomendacoes?: string;
  enderecoEntrega?: OmieShippingAddress;
  nif?: string;
  inativo?: string;
}
/* eslint-enable camelcase */

/**
 *
 *
 * @export
 * @interface OmieTag
 */
export interface OmieTag {
    tag: string;
}

/**
 *
 *
 * @export
 * @interface OmieInfo
 */
export interface OmieInfo {
  dInc: string;
  hInc: string;
  uInc: string;
  dAlt: string;
  hAlt: string;
  uAlt: string;
  cImpAPI: string;
}

/**
 *
 *
 * @export
 * @interface OmieShippingAddress
 */
export interface OmieShippingAddress {
  entCnpjCpf: string;
  entEndereco: string;
  entNumero: string;
  entComplemento: string;
  entBairro: string;
  entCEP: string;
  entEstado: string;
  entCidade: string;
}

/**
 *
 *
 * @export
 * @interface OmieRecomendations
 */
/* eslint-disable camelcase */
export interface OmieRecomendations {
  numero_parcelas: string;
  codigo_vendedor: number;
  email_fatura: string;
  gerar_boletos: string;
}
/* eslint-enable camelcase */
