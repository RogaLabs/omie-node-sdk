import { Impostos } from './impostos'
import { StringBool, DiscountType } from '../enums'

/**
 * Omie's advanced type.
 *
 * @export
 * @interface ServicosPrestados
 * @uses StringBool
 * @uses DiscountType
 * @uses Impostos
 */
export interface ServicosPrestados {
  nCodServico?: number;
  cCodIntServico?: string;
  cTribServ?: string;
  cCodServMun?: string;
  cCodServLC116?: string;
  nQtde: number;
  nValUnit: number;
  cTpDesconto?: DiscountType;
  nValorDesconto?: number;
  nAliqDesconto?: number;
  nValorOutrasRetencoes?: number;
  nValorAcrescimos?: number;
  cDescServ: string;
  cRetemISS?: string;
  cDadosAdicItem?: string;
  cNbs?: string;
  impostos?: Impostos;
  cNaoGerarFinanceiro?: StringBool;
  cCodCategItem?: string;
}
