import { sub, add } from 'date-fns'

import { SpecialDate, VariableSpecialDate } from '../interfaces/SpecialDate'
import { calculateEaster } from './calculate-easter'

/**
 * função que retorna as datas especiais variáveis no ano
 * @param year ano utilizado como referência
 */
export function getVariableDates(year: number) {
	/** array de datas especiais */
	const variableSpecialDates: SpecialDate[] = []

	/** páscoa */
	const easter = calculateEaster(year)

	/** vetor com todas as datas especiais que dependem da data da páscoa */
	const aux: VariableSpecialDate[] = [
		{ date: sub(easter, { days: 47 }), name: 'Carnaval', type: 'PF' },
		{ date: sub(easter, { days: 46 }), name: 'Cinzas', type: 'DC' },
		{ date: sub(easter, { days: 7 }), name: 'Domingo de Ramos', type: 'DC' },
		{ date: sub(easter, { days: 3 }), name: 'Quinta-feira Santa', type: 'DC' },
		{ date: sub(easter, { days: 2 }), name: 'Sexta-feira Santa', type: 'FN' },
		{ date: sub(easter, { days: 1 }), name: 'Sábado de Aleluia', type: 'DC' },
		{ date: easter, name: 'Páscoa', type: 'DC' },
		{ date: add(easter, { days: 60 }), name: 'Corpus Christi', type: 'PF' }
	]

	aux.forEach(d => {
		const { date, type, name } = d
		const day = date.getDate()
		const month = date.getMonth()

		variableSpecialDates.push({ day, month, name, type })
	})

	// Dia das mães
	let date = new Date(year, 4, 1) // 1º de Maio
	let sundayCount = date.getDay() === 0 ? 1 : 0

	while (sundayCount < 2) {
		date = add(date, { days: 1 })

		if (date.getDay() === 0)
			sundayCount++
	}

	variableSpecialDates.push({
		day: date.getDate(),
		month: date.getMonth(),
		name: 'Dia das Mães',
		type: 'DC'
	})

	// Dia dos pais
	date = new Date(year, 7, 1) // 1º de Agosto
	sundayCount = date.getDay() === 0 ? 1 : 0

	while (sundayCount < 2) {
		date = add(date, { days: 1 })

		if (date.getDay() === 0)
			sundayCount++
	}

	variableSpecialDates.push({
		day: date.getDate(),
		month: date.getMonth(),
		name: 'Dia dos Pais',
		type: 'DC'
	})

	return variableSpecialDates
}
