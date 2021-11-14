import React from 'react';
import { ScrollView, View, Image, Text, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Banner from '../components/banner';
import { colors } from '../presets/colors';
import LottieView from 'lottie-react-native';
import { spacing } from '../presets';
import {AntDesign} from '@expo/vector-icons'

const CategoryBox = ({title, image, onPress}) => {
	return (
		<View style = {{paddingTop: spacing[10]}}>
					<Pressable
					onPress= {onPress}
					 style = {{
						 marginVertical: spacing[8],
						 marginHorizontal: spacing[5],
						 borderRadius: spacing[4],
						 backgroundColor: colors.darkgrey,
						 alignItems: 'center',
						 padding: spacing[5]
					 }}
					 >
						<Image
						 style = {{top: -60}}
						source = {image}
						/>
						<View style = {{top: -40, alignItems: 'center'}}>
					 		<Text style = {{color: colors.white, fontWeight: 'bold'}}>{title}</Text>
						<View style = {{flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'center', paddingTop: 15}}>
					 		<Text style = {{color: colors.primary, paddingRight: 15}}>Shop</Text>
							 <AntDesign name = 'right' size = {12} color= {colors.primary}/>
							 </View>
						</View>
					</Pressable>
				</View>
	)
	
}


const Home = ({navigation}) => {
	return (
		<SafeAreaView>
			<ScrollView>
				<Banner />
				<View style={{ backgroundColor: colors.black, alignItems: 'center'}}>
					<Image width={'100%'} resizeMode="contain" source={require('../assets/images/home-banner.png')} />
					<View style={{ position: 'absolute', top: 200, alignItems: 'center' }}>
						<Text style={{ color: colors.white, marginBottom: 10 }}>Welcome</Text>
						<Text style={{ color: colors.white, width: 250, textAlign: 'center' }}>
							Experience natural, lifelike audio and exceptional build quality made for the passionate
							music enthusiast.
						</Text>
					</View>
					<LottieView style = {{marginTop: 35}} source={require('../assets/arrow-down.json')} autoPlay loop />
				</View>
				<CategoryBox
				title='Headphones'
				image ={require('../assets/images/headphone.png')}
				onPress = {() => navigation.navigate('Headphone')}
				/>
				<CategoryBox
				title='Earphones'
				image ={require('../assets/images/earphone.png')}
				onPress = {() => navigation.navigate('Earphone')}
				/>
				<CategoryBox
				title='Soundbox'
				image ={require('../assets/images/soundbox.png')}
				onPress = {() => navigation.navigate('Soundbox')}
				/>
			</ScrollView>
		</SafeAreaView>
	);
};

export default Home;
