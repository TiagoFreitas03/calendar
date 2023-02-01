import { useMemo } from 'react'
import { View, StyleSheet, Text } from 'react-native'

import { Row } from './Row'
import { COLORS, FONT_SIZE, FONT_FAMILY } from '../theme'
import { toNumber } from '../utils/to-number'
import { SpecialDate } from '../interfaces/SpecialDate'

/** dias da semana */
const WEEK_DAYS = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB']

/** propriedades do calendário */
interface CalendarProps {
	/** data para exibir os dias do mês */
	date: Date
	/** datas especiais */
	specialDates: SpecialDate[]
}

/** componente calendário */
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

	/**
	 * define a cor de fundo do dia dependendo das datas especiais
	 * @param day dia
	 * @returns cor de fundo do dia
	 */
	 const getBackgroundColor = (day: number) => {
		if (holidays.includes(day))
			return COLORS.BLUE
		if (celebrations.includes(day))
			return COLORS.PURPLE
		if (others.includes(day))
			return COLORS.PINK

		return COLORS.GRAY_900
	}

	return (
		<View style={{ alignItems: 'center', marginTop: 12 }}>
			<Row>
				{ WEEK_DAYS.map(day => (
					<View style={[styles.th, styles.cell]} key={day}>
						<Text style={styles.text}>{day}</Text>
					</View>
				))}
			</Row>

			{ monthDays.map((week, i) => (
				<Row key={i}>
					{ week.map((day, j) => {
						const num = toNumber(day, 0)

						return (
							<View
								style={[ styles.td, styles.cell, { backgroundColor: getBackgroundColor(num) } ]}
								key={j}
							>
								<Text style={styles.text}>{ day }</Text>
							</View>
						)
					}) }
				</Row>
			)) }
		</View>
	)
}

const styles = StyleSheet.create({
	cell: {
		borderWidth: 1,
		width: '13.5%',
	},

	th: {
		backgroundColor: COLORS.GRAY_700,
		borderColor: COLORS.GRAY_600,
		paddingVertical: 12
	},

	td: {
		borderColor: COLORS.GRAY_700,
		paddingVertical: 16,
	},

	text: {
		color: COLORS.GRAY_100,
		fontSize: FONT_SIZE.SM,
		fontFamily: FONT_FAMILY.REGULAR,
		textAlign: 'center'
	}
})
