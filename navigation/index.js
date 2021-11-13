import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Ionicons,MaterialCommunityIcons, Fontisto } from '@expo/vector-icons';
import Cart from '../screens/cart';
import Home from '../screens/home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SoundBox from '../screens/soundbox';
import Earphone from '../screens/earphone';
import Headphone from '../screens/headphone';
import ProductDetails from '../screens/product-details';
import Checkout from '../screens/checkout';

const Tab = createBottomTabNavigator();
const stack = createNativeStackNavigator();

const THEME = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		background: 'white'
	}
};

const Navigation = () => {
	return (
		<NavigationContainer theme={THEME}>
			<RootNavigator />
		</NavigationContainer>
	);
};

function RootNavigator() {
	return (
		<stack.Navigator screenOptions={{ headerShown: false }}>
			<stack.Screen name='Root' component={BottomTabNavigator} />
		</stack.Navigator>
	);
}

const bottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
    
	return (
		<bottomTab.Navigator initialRouteName='HomeScreen' screenOptions={{ tabBarActiveTintColor: 'red' }}>
			<bottomTab.Screen 
            name='Home' 
            component={HomeStackScreen} 
            options={{
                tabBarIcon: ({ color, focused }) => <TabBarIcons fontFamily='Ionicons' name={ focused ? 'home' : 'home-outline'} color={color}/>
            }}
            />
			<bottomTab.Screen 
            name='Headphone' 
            component={HeadphoneScreen}
            options={{
                tabBarIcon: ({ color }) => <TabBarIcons fontFamily='Fontiso' name='headphone' color={color}/>
            }}
            />
			<bottomTab.Screen 
            name='Soundbox' 
            component={SoundboxScreen} 
            options={{
                tabBarIcon: ({ color }) => <TabBarIcons fontFamily='MaterialCommunityIcons' name='boombox' color={color}/>
            }}
            />
            <bottomTab.Screen 
            name='Earphone' 
            component={EarphoneScreen}
            options={{
                tabBarIcon: ({ color }) => <TabBarIcons fontFamily='MaterialCommunityIcons' name='headphones' color={color}/>
            }}
            />
			<bottomTab.Screen 
            name='Cart' 
            component={CartScreen} 
            options={{
                tabBarIcon: ({ color }) => <TabBarIcons fontFamily='MaterialCommunityIcons' name='cart' color={color}/>
            }}
            />
		</bottomTab.Navigator>
	);
}

function TabBarIcons({fontFamily, color, name}) {
    if(fontFamily === 'Ionicons') {
        return <Ionicons name={name} color={color} size={18}/>
    }
    else if(fontFamily === 'MaterialCommunityIcons') {
        return <MaterialCommunityIcons name={name} size={18} color={color} />
    }
    else if (fontFamily === 'Fontiso') {
        return <Fontisto name={name} size={18} color={color} />
    }
}

function HomeStackScreen() {
	return (
		<stack.Navigator screenOptions={{ headerShown: false }}>
			<stack.Screen name='Home ' component={Home} />
		</stack.Navigator>
	);
}
function HeadphoneScreen() {
	return (
		<stack.Navigator screenOptions={{ headerShown: false }}>
			<stack.Screen name='Headphone ' component={Headphone} />
			<stack.Screen name='ProductDetails' component={ProductDetails} />
		</stack.Navigator>
	);
}
function SoundboxScreen() {
	return (
		<stack.Navigator screenOptions={{ headerShown: false }}>
			<stack.Screen name='Earphone ' component={Earphone} />
			<stack.Screen name='ProductDetails' component={ProductDetails} />
		</stack.Navigator>
	);
}
function EarphoneScreen() {
	return (
		<stack.Navigator screenOptions={{ headerShown: false }}>
			<stack.Screen name='Soundbox ' component={SoundBox} />
			<stack.Screen name='ProductDetails' component={ProductDetails} />
		</stack.Navigator>
	);
}
function CartScreen() {
	return (
		<stack.Navigator screenOptions={{ headerShown: false }}>
			<stack.Screen name='Home ' component={Cart} />
			<stack.Screen name='Checkout' component={Checkout} />
		</stack.Navigator>
	);
}

export default Navigation;
