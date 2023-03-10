/** tipos de datas "especiais" */
type SpecialDateTypes =
	'FN' | // feriado nacional
	'DC' | // data comemorativa
	'PF'   // ponto facultativo

/** propriedades comunns de datas especiais */
interface IDate {
	/** nome da data especial */
	name: string

	/** tipo de data especial */
	type: SpecialDateTypes
}

/** propriedades da data especial com dia e mês fixo */
export interface SpecialDate extends IDate {
	/** número do dia */
	day: number

	/** mês da data especial */
	month: number
}

/** propriedades da data especial com dia e/ou mês variável */
export interface VariableSpecialDate extends IDate {
	/** dia, mês e ano da data especial */
	date: Date
}
