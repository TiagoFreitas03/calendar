import { Router } from 'express'

import { toNumber } from './utils/to-number'
import { specialDates } from './utils/special-dates'
import { getVariableDates } from './utils/get-variable-dates'
import { SpecialDate } from './interfaces/SpecialDate'

/** rotas da aplicação */
const routes = Router()

routes.get('/calendar/:year', (req, res) => {
	const year = toNumber(req.params.year, new Date().getFullYear())

	/** datas especiais que serão retornadas */
	const dates: SpecialDate[] = []

	// inclui datas fixas
	dates.push(...specialDates)

	/** datas especiais com dia/mês variável */
	const variableDates = getVariableDates(year)

	dates.push(...variableDates)
	dates.sort((x, y) => x.month - y.month)

	return res.json(dates)
})

export { routes }
