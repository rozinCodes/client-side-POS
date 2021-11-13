import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import Cart from '../screens/cart'
import Home from '../screens/home'

const Tab = createBottomTabNavigator();

const Navigation = () => {
    return (
          <NavigationContainer>
			<Tab.Navigator
				screenOptions={({ route }) => ({
					tabBarIcon: ({ focused, color, size }) => {
						let iconName;

						if (route.name === 'Home') {
							iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
						} else if (route.name === 'Cart') {
							iconName = focused ? 'ios-cart' : 'ios-cart-outline';
						}

						return <Ionicons name={iconName} size={size} color={color} />;
					},
					tabBarActiveTintColor: 'purple',
					tabBarInactiveTintColor: 'gray',
				})}
			>
				<Tab.Screen name="Home" component={Home} />
				<Tab.Screen name="Cart" component={Cart} />
			</Tab.Navigator>
      </NavigationContainer>
    )
}

export default Navigation
