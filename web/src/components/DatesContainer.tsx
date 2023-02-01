import clsx from 'clsx'

import { Subtitle } from './Subtitle'
import { SpecialDate } from '../interfaces/SpecialDate'

/** propriedades do container de datas especiais */
interface DatesContainerProps {
	/** datas especiais */
	dates: SpecialDate[]
}

/** container de datas especiais do mês/ano */
export function DatesContainer({ dates }: DatesContainerProps) {
	return (
		<div className='mt-6'>
			<div className='md:max-w-[50vw]'>
				<Subtitle type='FN' text='Feriado' />
				<Subtitle type='DC' text='Data Comemorativa' />
				<Subtitle type='PF' text='Ponto Facultativo' />
			</div>

			<div className='bg-gray-700 rounded-lg p-5 mt-4'>
				<h4>Feriados e Datas Comemorativas:</h4>

				{dates.length > 0 ?
					dates.map((date, index) => {
						return (
							<p key={index} className="flex my-3 items-center">
								<span
									className={clsx('w-8 py-1 text-center rounded-md mr-2', {
										'bg-blue-600': date.type === 'FN',
										'bg-purple-600': date.type === 'DC',
										'bg-pink-600': date.type === 'PF',
									})}
								>
									{date.day}
								</span>
								{date.name}
							</p>
						)
					}) :
					<p className='mt-2'>Nenhum feriado ou data comemorativa este mês.</p>
				}
			</div>
		</div>
	)
}
