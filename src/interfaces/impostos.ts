import { StringBool } from '../enums/string-bool'

/**
 * Omie's advanced type.
 *
 * @export
 * @interface Impostos
 */
export interface Impostos {
  cFixarISS: StringBool;
  nAliqISS: number;
  nBaseISS: number;
  nTotDeducao: number;
  nValorISS?: number;
  cFixarIRRF: StringBool;
  nAliqIRRF: number;
  nValorIRRF?: number;
  cRetemIRRF: StringBool;
  cFixarPIS: StringBool;
  nAliqPIS: number;
  nValorPIS?: number;
  cRetemPIS: StringBool;
  cFixarCOFINS: StringBool;
  nAliqCOFINS: number;
  nValorCOFINS?: number;
  cRetemCOFINS: StringBool;
  cFixarCSLL: StringBool;
  nAliqCSLL: number;
  nValorCSLL?: number;
  cRetemCSLL: StringBool;
  cFixarINSS: StringBool;
  nAliqINSS: number;
  nValorINSS?: number;
  cRetemINSS: StringBool;
  nAliqRedBaseINSS: number;
}
