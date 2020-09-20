import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Activity from '../organisms/Activity';

const Stack = createStackNavigator();

const ActivityNav = () => {
	return (
		<Stack.Navigator initialRouteName="Activity">
			<Stack.Screen
				name="Activity"
				component={Activity}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	);
};

export default ActivityNav;
