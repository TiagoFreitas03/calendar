/** tipos de datas "especiais" */
export type SpecialDateTypes =
	'FN' | // feriado nacional
	'DC' | // data comemorativa
	'PF'   // ponto facultativo

/** propriedades da data especial com dia e mês fixo */
export interface SpecialDate {
	/** dia da data especial */
	day: number
	/** mês da data especial */
	month: number
	/** nome da data especial */
	name: string
	/** tipo de data especial */
	type: SpecialDateTypes
}
