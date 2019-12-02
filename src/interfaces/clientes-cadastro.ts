import { Tag } from './tags'
import { Info } from './info'
import { EnderecoEntrega } from './endereco-entrega'

/**
 *
 *
 * @export
 * @interface ClientesCadastro
 */
/* eslint-disable camelcase */
export interface ClientesCadastro {
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
  tags?: Tag[];
  info?: Info;
  pessoa_fisica?: string;
  exterior?: string;
  logradouro?: string;
  importado_api?: string;
  bloqueado?: string;
  cidade_ibge?: string;
  valor_limite_credito?: number;
  bloquear_faturamento?: string;
  recomendacoes?: string;
  enderecoEntrega?: EnderecoEntrega;
  nif?: string;
  inativo?: string;
}
/* eslint-enable camelcase */
