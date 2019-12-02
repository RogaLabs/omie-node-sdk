import { Cabecalho } from './cabecalho'
import { Departamentos } from './departamento'
import { Parcelas } from './parcelas'
import { Email } from './email'
import { InformacoesAdicionais } from './informacoes-adicionais'
import { Observacoes } from './observacoes'
import { ServicosPrestados } from './servicos-prestados'

/**
 * Omie's advanced type.
 *
 * @export
 * @interface OSCadastro
 */
export interface OSCadastro {
  Cabecalho: Cabecalho;
  InformacoesAdicionais: InformacoesAdicionais;
  Email: Email;
  Departamentos: Departamentos[];
  ServicosPrestados: ServicosPrestados[];
  Parcelas?: Parcelas[];
  Observacoes?: Observacoes;
}
