import { useMemo } from 'react'
import clsx from 'clsx'

import { toNumber } from '../utils/to-number'
import { SpecialDate } from '../interfaces/SpecialDate'

const WEEK_DAYS = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB']

/** propriedades do calendário */
interface CalendarProps {
	/** data para exibir os dias do mês */
	date: Date
	/** datas especiais */
	specialDates: SpecialDate[]
}

/** calendário */
export function Calendar({ date, specialDates }: CalendarProps) {
	const [year, month] = [date.getFullYear(), date.getMonth()]

	const summary = {
		holidays: specialDates.filter(d => d.type === 'FN').map(d => d.day),
		celebrations: specialDates.filter(d => d.type === 'DC').map(d => d.day),
		others: specialDates.filter(d => d.type === 'PF').map(d => d.day)
	}

	const { holidays, celebrations, others } = summary

	/** dias do mês */
	const monthDays = useMemo(() => {
		const days: string[][] = [[]]

		const firstDay = new Date(year, month, 1)
		const lastDay = new Date(year, month + 1, 0).getDate()

		while (days[0].length < firstDay.getDay())
			days[0].push('')

		for (let i = 1; i <= lastDay; i++) {
			if (days[days.length - 1].length === 7)
				days.push([])

			days[days.length - 1].push(i.toString())
		}

		while (days[days.length - 1].length < 7)
			days[days.length - 1 ].push('')

		return days
	}, [date])

	return (
		<table className='w-full mt-8 border-collapse text-lg text-center'>
			<thead>
				<tr>
					{ WEEK_DAYS.map(day =>
						<th className='bg-gray-700 border-2 border-gray-600 p-3' key={day}>{day}</th>
					)}
				</tr>
			</thead>

			<tbody>
				{monthDays.map((week, i) => {
					return (
						<tr key={i}>
							{week.map((day, j) => {
								const num = toNumber(day, 0)

								return (
									<td
										className={
											clsx('border-2 border-gray-700 py-6 text-lg', {
												'bg-blue-600': holidays.includes(num),
												'bg-purple-600': celebrations.includes(num) && !holidays.includes(num),
												'bg-pink-600': others.includes(num) && !holidays.includes(num) &&
													!celebrations.includes(num),
											})
										}
										key={j}
									>{day}</td>
								)
							})}
						</tr>
					)
				})}
			</tbody>
		</table>
	)
}
