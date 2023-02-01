import { useState, useEffect } from 'react'
import { ScrollView, View, Text, StyleSheet } from 'react-native'
import { format, add, sub } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import axios from 'axios'

import { Row } from '../components/Row'
import { IconButton } from '../components/IconButton'
import { Calendar } from '../components/Calendar'
import { DatesContainer } from '../components/DatesContainer'
import { Header } from '../components/Header'

import { API_URL } from '@env'
import { COLORS, FONT_SIZE, FONT_FAMILY } from '../theme'
import { SpecialDate } from '../interfaces/SpecialDate'

type ChangeDateOperations = 'DY' | 'DM' | 'IY' | 'IM'

export function Home() {
	const [date, setDate] = useState(new Date())
	const [calendar, setCalendar] = useState<SpecialDate[]>([])

	useEffect(() => { getCalendar(year, true) }, [])

	const [year, month] = [date.getFullYear(), date.getMonth()]
	const specialDates = calendar.filter(d => d.month === month).sort((x, y) => x.day - y.day)

	/**
	 * busca as datas especiais por ano
	 * @param y ano
	 */
	async function getCalendar(y: number, firstTry: boolean = false) {
		if (y !== year || firstTry) {
			const res = await axios.get(`${API_URL}/calendar/${y}`)
			const calendar = res.data as SpecialDate[]
			setCalendar(calendar)
		}
	}

	/** trata a mudança de mês/ano */
	async function handleChangeDate(operation: ChangeDateOperations) {
		let newDate: Date

		switch (operation) {
			case 'DY': newDate = sub(date, { years: 1 }); break;
			case 'DM': newDate = sub(date, { months: 1 }); break;
			case 'IY': newDate = add(date, { years: 1 }); break;
			case 'IM': newDate = add(date, { months: 1 }); break;
		}

		await getCalendar(newDate.getFullYear())
		setDate(newDate)
	}

	const decrementYear = () => handleChangeDate('DY')
	const incrementYear = () => handleChangeDate('IY')
	const decrementMonth = () => handleChangeDate('DM')
	const incrementMonth = () => handleChangeDate('IM')

	return (
		<>
			<Header />

			<ScrollView style={styles.container}>
				<View style={styles.header}>
					<Row>
						<IconButton icon="chevrons-left" color="BLUE" onPress={decrementYear} />
						<IconButton icon="chevron-left" color="PURPLE" onPress={decrementMonth} />
					</Row>

					<Text style={styles.title}>
						{format(date, 'MMMM yyyy', { locale: ptBR })}
					</Text>

					<Row>
						<IconButton icon="chevron-right" color="PURPLE" onPress={incrementMonth} />
						<IconButton icon="chevrons-right" color="BLUE" onPress={incrementYear} />
					</Row>
				</View>

				<Calendar date={date} specialDates={specialDates} />

				<DatesContainer dates={specialDates} />
			</ScrollView>
		</>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		flex: 1,
		backgroundColor: '#09090A',
	},

	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingVertical: 16,
		paddingHorizontal: 12
	},

	title: {
		color: COLORS.GRAY_100,
		fontSize: FONT_SIZE.LG,
		fontFamily: FONT_FAMILY.REGULAR,
		textTransform: 'capitalize'
	},
})
