import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../organisms/Home';

const Stack = createStackNavigator();

const HomeNav = () => {
	return (
		<Stack.Navigator initialRouteName="Home">
			<Stack.Screen
				name="Home"
				component={Home}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	);
};

export default HomeNav;
