import { useState, useEffect } from 'react'
import { sub, add, format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import axios from 'axios'

import { Header } from './components/Header'
import { IconButton } from './components/IconButton'
import { Calendar } from './components/Calendar'
import { DatesContainer } from './components/DatesContainer'
import { SpecialDate } from './interfaces/SpecialDate'

type ChangeDateOperations = 'DY' | 'DM' | 'IY' | 'IM'

export function App() {
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
			const res = await axios.get(`${import.meta.env.VITE_API_URL}/calendar/${y}`)
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

			<div className='mx-auto max-w-5xl px-4 mb-4'>
				<div className='flex justify-between items-center mt-4'>
					<div>
						<IconButton icon="angles-left" onClick={decrementYear} />
						<IconButton icon="angle-left" onClick={decrementMonth} />
					</div>

					<h2 className="capitalize">{format(date, 'MMMM yyyy', { locale: ptBR })}</h2>

					<div>
						<IconButton icon="angle-right" onClick={incrementMonth} />
						<IconButton icon="angles-right" onClick={incrementYear} />
					</div>
				</div>

				<Calendar date={date} specialDates={specialDates} />

				<DatesContainer dates={specialDates} />
			</div>
		</>
	)
}
