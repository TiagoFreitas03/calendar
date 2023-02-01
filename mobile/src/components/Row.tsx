import { ReactNode } from 'react'
import { View } from "react-native"

/** propriedades da linha */
interface RowProps {
	children: ReactNode
}

/** linha */
export function Row({ children }: RowProps) {
	return (
		<View style={{ flexDirection: 'row', alignItems: 'center' }}>
			{children}
		</View>
	)
}
