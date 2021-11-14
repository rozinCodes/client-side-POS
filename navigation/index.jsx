import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Ionicons, MaterialCommunityIcons, Fontisto } from '@expo/vector-icons';
import Cart from '../screens/cart';
import Home from '../screens/home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SoundBox from '../screens/soundbox';
import Earphone from '../screens/earphone';
import Headphone from '../screens/headphone';
import ProductDetails from '../screens/product-details';
import Checkout from '../screens/checkout';
import { colors } from '../presets/colors';

const Tab = createBottomTabNavigator();
const stack = createNativeStackNavigator();

const THEME = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		background: colors.white
	}
};

const Navigation = () => {
	return (
		<NavigationContainer theme={THEME}>
			<BottomTabNavigator />
		</NavigationContainer>
	);
};

function BottomTabNavigator() {
	return (
		<Tab.Navigator initialRouteName="Home" screenOptions={{ tabBarActiveTintColor: colors.primary }}>
			<Tab.Screen
				name="Home"
				component={HomeStackScreen}
				options={{
					headerShown: false,
					tabBarIcon: ({ color, focused }) => (
						<TabBarIcons fontFamily="Ionicons" name={focused ? 'home' : 'home-outline'} color={color} />
					)
				}}
			/>
			<Tab.Screen
				name="Headphone"
				component={HeadphoneScreen}
				options={{
					headerShown: false,
					tabBarIcon: ({ color }) => <TabBarIcons fontFamily="Fontiso" name="headphone" color={color} />
				}}
			/>
			<Tab.Screen
				name="Soundbox"
				component={SoundboxScreen}
				options={{
					headerShown: false,
					tabBarIcon: ({ color }) => (
						<TabBarIcons fontFamily="MaterialCommunityIcons" name="boombox" color={color} />
					)
				}}
			/>
			<Tab.Screen
				name="Earphone"
				component={EarphoneScreen}
				options={{
					headerShown: false,
					tabBarIcon: ({ color }) => (
						<TabBarIcons fontFamily="MaterialCommunityIcons" name="headphones" color={color} />
					)
				}}
			/>
			<Tab.Screen
				name="Cart"
				component={CartScreen}
				options={{
					headerShown: false,
					tabBarIcon: ({ color }) => (
						<TabBarIcons fontFamily="MaterialCommunityIcons" name="cart" color={color} />
					)
				}}
			/>
		</Tab.Navigator>
	);
}

function TabBarIcons({ fontFamily, color, name }) {
	if (fontFamily === 'Ionicons') {
		return <Ionicons name={name} color={color} size={18} />;
	} else if (fontFamily === 'MaterialCommunityIcons') {
		return <MaterialCommunityIcons name={name} size={18} color={color} />;
	} else if (fontFamily === 'Fontiso') {
		return <Fontisto name={name} size={18} color={color} />;
	}
}

function HomeStackScreen() {
	return (
		<stack.Navigator screenOptions={{ headerShown: false }}>
			<stack.Screen name="Home " component={Home} />
		</stack.Navigator>
	);
}
function HeadphoneScreen() {
	return (
		<stack.Navigator screenOptions={{ headerShown: false }}>
			<stack.Screen name="Headphone " component={Headphone} />
			<stack.Screen name="ProductDetails" component={ProductDetails} />
		</stack.Navigator>
	);
}
function SoundboxScreen() {
	return (
		<stack.Navigator screenOptions={{ headerShown: false }}>
			<stack.Screen name="Earphone " component={SoundBox} />
			<stack.Screen name="ProductDetails" component={ProductDetails} />
		</stack.Navigator>
	);
}
function EarphoneScreen() {
	return (
		<stack.Navigator screenOptions={{ headerShown: false }}>
			<stack.Screen name="Soundbox " component={Earphone} />
			<stack.Screen name="ProductDetails" component={ProductDetails} />
		</stack.Navigator>
	);
}
function CartScreen() {
	return (
		<stack.Navigator screenOptions={{ headerShown: false }}>
			<stack.Screen name="Cart " component={Cart} />
			<stack.Screen name="Checkout" component={Checkout} />
		</stack.Navigator>
	);
}

export default Navigation;
