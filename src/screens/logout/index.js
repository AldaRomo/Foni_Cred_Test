import React, {useContext, useEffect} from 'react';
import {ActivityIndicator} from 'react-native';
import logoutUser from '../../context/actions/auth';
import {AuthContext} from '../../context';

const Logout = () => {
	const {authDispatch} = useContext(AuthContext);

	useEffect(
		() => {
			console.log(":<<< SE MONTA Logout Screen");
			logoutUser()(authDispatch);

			return () => {
				console.log("SE DESMONTA Logout Screen >>>:");
			}
		}, []
	)

	return <ActivityIndicator />
}

export default Logout;
