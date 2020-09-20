import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NewPost from '../organisms/NewPost';

const Stack = createStackNavigator();

const NewPostNav = () => {
	return (
		<Stack.Navigator initialRouteName="NewPost">
			<Stack.Screen
				name="NewPost"
				component={NewPost}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	);
};

export default NewPostNav;
