import React, { useEffect }  from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../components/Button';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

// queries
const PROMPT_QUERY = gql`
	query {
		prompt {
			title
			id
		}
	}
`;

const Prompt = () => {
	const { loading, data, refetch } = useQuery(PROMPT_QUERY);
	
	useEffect(() => {
    refetch();
	}, []);
	
	return (
		<View style={styles.container}>
			<Text style={styles.header}>Connected successfully to Internal Database!</Text>
			{!loading && data && data.prompt && ( 
			<Text style={styles.prompt}>{data.prompt.title}</Text>
			)}
			<Button
				text="Next"
				textColor="#161616"
				backgroundColor="#d3d3d3"
        onPress={() => {
					refetch();
				}}
				/>
    </View>
	);
  
}

const styles = StyleSheet.create({
  container: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: '#fff',
		justifyContent: 'center',
    alignItems: 'center',
	},
	header: {
		textAlign: 'center',
		fontSize: 36
	},
	prompt: {
		fontSize: 24,
		color: 'black',
		textAlign: 'center',
		padding: 12
	}
});

export default Prompt;
