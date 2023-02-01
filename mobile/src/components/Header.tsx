import { View, StyleSheet, Image, Text } from 'react-native'

import { logo } from '../assets'
import { COLORS, FONT_FAMILY, FONT_SIZE } from '../theme'

/** cabeçalho do app */
export function Header() {
	return (
		<View style={styles.container}>
			<View style={{ flexDirection: 'row', alignItems: 'center' }}>
				<Image source={logo} style={styles.image} />

				<Text style={{
					color: COLORS.GRAY_100,
					fontFamily: FONT_FAMILY.BOLD,
					fontSize: FONT_SIZE.LG
				}}>
					Calendar
				</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: COLORS.GRAY_700,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: 20,
		borderBottomWidth: 2,
		borderColor: COLORS.GRAY_600
	},

	image: {
		width: 40,
		height: 31.5,
		marginRight: 12
	}
})
