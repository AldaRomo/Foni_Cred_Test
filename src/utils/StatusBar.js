import React from 'react';
import {View, StatusBar} from 'react-native';
import { colors } from './colors';
import {osName} from 'expo-device';

export default function () {
	const height = (osName === 'iOS' || osName === 'iPadOS') ? 20 : 0;
	const barStyle = osName === 'iOS' || osName === 'iPadOS' ? 'dark-content' : 'light-content';

	return (
		<View style={{height, backgroundColor: colors.white , width: '100%'}}>
			<StatusBar barStyle={barStyle} />
		</View>
	);
}
