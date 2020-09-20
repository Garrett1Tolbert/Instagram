import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

function Home() {
	const [data, setData] = useState({});

	const fetchData = async () => {
		const { data } = await axios.get(
			'https://api.github.com/users/Garrett1Tolbert'
		);
		console.log(data);
		setData(data);
	};
	useEffect(() => {
		fetchData();
	}, []);
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text>{data.login}</Text>
		</View>
	);
}

export default Home;
