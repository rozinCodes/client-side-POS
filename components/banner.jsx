import React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';
import { colors, spacing } from '../presets';

const Banner = () => {
	return (
		<View style={[styles.Container, {borderBottomWidth: 0.5, borderBottomColor: colors.white}]}>
			<Image source={require('../assets/images/audiophile.png')} />
            {/* <Text style = {{fontFamily: 'Chango-Regular', color: colors.white, fontSize: spacing[7]}}>audiophile</Text> */}
		</View>
	);
};

export default Banner;

const styles = StyleSheet.create({
	Container: {
		height: 60,
		backgroundColor: colors.black,
        elevation: 10,
		justifyContent: 'center',
		alignItems: 'center'
	}
});
