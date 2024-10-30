import React from 'react';
import LoginScreen from './../screens/login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function StackAuth() {

	const Stack = createNativeStackNavigator();

	return (
		<Stack.Navigator>
			<Stack.Screen name="login" component={LoginScreen}
				options={{
					headerShown: false
				}}
				screenOptions={{
					headerShown: false
				}}
			/>
		</Stack.Navigator>
	);
}
