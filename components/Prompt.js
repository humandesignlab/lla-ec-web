import React, { useEffect }  from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from './Button';
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
			<View style={styles.headerStyle}>
				<Text style={styles.textHeaderStyle}>LLA Hello World!</Text>
			</View>
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
    alignItems: 'center',
	},
	prompt: {
		fontSize: 24,
		color: 'black',
		textAlign: 'center',
		padding: 12
	},
	headerStyle: {
    width: '100%',
    height: 50,
		backgroundColor: 'red',
		marginTop: 28
	},
	textHeaderStyle: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
    padding: 12
  }
});

export default Prompt;
