import React from 'react';
import { ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font';
import Navigation from './navigation';
import FlashMessage from 'react-native-flash-message';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
	let [ fontsLoaded ] = useFonts({
		'Manrope-Regular': require('./assets/fonts/Manrope-Regular.ttf'),
		'Manrope-Light': require('./assets/fonts/Manrope-Light.ttf'),
		'Manrope-Bold': require('./assets/fonts/Manrope-Bold.ttf'),
		'Chango-Regular': require('./assets/fonts/Chango-Regular.ttf'),
		'Exo2': require('./assets/fonts//Exo2.ttf')
	});

	if (!fontsLoaded) {
		return <ActivityIndicator />;
	} else
		return (
			<SafeAreaProvider>
				<Navigation />
				<FlashMessage />
			</SafeAreaProvider>
		);
}
