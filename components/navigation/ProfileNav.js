import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from '../organisms/Profile';

const Stack = createStackNavigator();

const ProfileNav = () => {
	return (
		<Stack.Navigator initialRouteName="Profile">
			<Stack.Screen
				name="Profile"
				component={Profile}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	);
};

export default ProfileNav;
