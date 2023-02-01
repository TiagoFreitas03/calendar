import clsx from 'clsx'

import { SpecialDateTypes } from '../interfaces/SpecialDate'

/** propriedades da legenda */
interface SubtitleProps {
	/** texto */
	text: string
	/** tipo da legenda */
	type: SpecialDateTypes
}

/** legenda para as datas especiais */
export function Subtitle({ text, type }: SubtitleProps) {
	return (
		<p className='my-2'>
			<span className={clsx("px-2 mr-2", {
				'bg-blue-600': type === 'FN',
				'bg-purple-600': type === 'DC',
				'bg-pink-600': type === 'PF',
			})} />
			{ text }
		</p>
	)
}
