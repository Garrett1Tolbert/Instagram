import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Search from '../organisms/Search';

const Stack = createStackNavigator();

const SearchNav = () => {
	return (
		<Stack.Navigator initialRouteName="Search">
			<Stack.Screen
				name="Search"
				component={Search}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	);
};

export default SearchNav;
