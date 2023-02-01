import { ButtonHTMLAttributes } from 'react'
import clsx from 'clsx'

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	icon: string
}

export function IconButton({ icon, ...rest }: IconButtonProps) {
	return (
		<button
			className={clsx('w-12 h-12 rounded mx-1 transition-colors', {
				'bg-blue-600 hover:bg-blue-700': ['angles-left', 'angles-right'].includes(icon),
				'bg-purple-600 hover:bg-purple-700': ['angle-left', 'angle-right'].includes(icon),
			})}
			{...rest}
		>
			<i className={`fa-solid fa-${icon}`} />
		</button>
	)
}
