import React from 'react';
import { ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font';
import Navigation from './navigation';

export default function App() {
	let [ fontsLoaded ] = useFonts({
		'Manrope-Regular': require('./assets/fonts/Manrope-Regular.ttf'),
		'Manrope-Light': require('./assets/fonts/Manrope-Light.ttf'),
		'Manrope-Bold': require('./assets/fonts/Manrope-Bold.ttf')
	});

	if (!fontsLoaded) {
		return <ActivityIndicator />;
	} 
  else 
    return <Navigation />;
}
