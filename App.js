import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeNav from './components/navigation/HomeNav';
import SearchNav from './components/navigation/SearchNav';
import NewPostNav from './components/navigation/NewPostNav';
import ActivityNav from './components/navigation/ActivityNav';
import ProfileNav from './components/navigation/ProfileNav';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Tab.Navigator
				screenOptions={({ route }) => ({
					tabBarIcon: ({ focused, color }) => {
						let iconName;
						switch (route.name) {
							case 'Home':
								iconName = 'md-home';
								break;
							case 'Search':
								iconName = 'md-search';
								break;
							case 'NewPost':
								iconName = 'ios-camera';
								break;
							case 'Activity':
								iconName = focused ? 'md-heart' : 'md-heart-empty';
								break;
							default:
								iconName = 'md-person';
								break;
						}
						return <Ionicons name={iconName} size={24} color={color} />;
					},
				})}
				tabBarOptions={{
					activeTintColor: '#525456',
					inactiveTintColor: '#c8c8c8',
				}}
			>
				<Tab.Screen name="Home" component={HomeNav} />
				<Tab.Screen name="Search" component={SearchNav} />
				<Tab.Screen name="NewPost" component={NewPostNav} />
				<Tab.Screen name="Activity" component={ActivityNav} />
				<Tab.Screen name="Profile" component={ProfileNav} />
			</Tab.Navigator>
		</NavigationContainer>
	);
}
