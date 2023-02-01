import { StatusBar } from 'react-native'
import { useFonts as useNunito, Nunito_700Bold } from '@expo-google-fonts/nunito'
import { useFonts as useRoboto, Roboto_400Regular } from '@expo-google-fonts/roboto'

import { Loading } from './src/screens/Loading'
import { Home } from './src/screens/Home'

export default function App() {
	const [nunitoLoaded] = useNunito({ Nunito_700Bold })
	const [robotoLoaded] = useRoboto({ Roboto_400Regular })

	if (!nunitoLoaded || !robotoLoaded) {
		return <Loading />
	}

	return (
		<>
			<StatusBar />

			<Home />
		</>
	)
}
