import { logo } from '../assets'

export function Header() {
	return (
		<header
			className="bg-gray-700 w-full h-24 flex items-center px-8 py-4 border-gray-600 border-b-2"
		>
			<img src={logo} alt="MyCalendar" className='w-52' />

			<p className='text-sm ml-6 py-1 pl-6 border-l border-gray-300 md:block hidden'>
				Feriados Nacionais, Pontos Facultativos e Datas Comemorativas do Brasil.
			</p>
		</header>
	)
}
