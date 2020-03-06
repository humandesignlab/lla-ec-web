import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../components/Button';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

// queries
const PARTYACCOUNT_QUERY = gql`
	query {
		partyAccount {
			id
      name
      contact {
        contactName
			}
			accountBalance {
				amount {
					value
				}
			}
		}
	}
`;

const UserInfo = props => {
	const { loading, data, refetch } = useQuery(PARTYACCOUNT_QUERY);
	
	useEffect(() => {
    refetch();
	}, []);
	return (
	
		<View style={styles.container}>
			<Text style={styles.textHeaderStyle}>Party Account Info</Text>
			{!loading && data && data.partyAccount && ( 
      <View>
        <Text style={styles.partyAccount}>ID: {data.partyAccount.id}</Text>
        <Text style={styles.partyAccount}>Type: {data.partyAccount.name}</Text>
				<Text style={styles.partyAccount}>Name: {data.partyAccount.contact[0].contactName}</Text>
				<Text style={styles.partyAccount}>Account Balance: {data.partyAccount.accountBalance[0].amount.value}</Text>
      </View>
			)}
			<Button
				text="Refresh Party Account Info"
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
    alignItems: 'center'
	},
	partyAccount: {
		fontSize: 24,
		color: 'black',
		textAlign: 'center',
		padding: 12
	},

	textHeaderStyle: {
    textAlign: 'center',
    color: 'black',
		fontSize: 36,
		fontWeight: '900'
  }
});

export default UserInfo;
