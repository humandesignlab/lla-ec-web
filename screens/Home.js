import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../components/Button';

const Home = props => {
  const { navigation } = props;
	
	return (
		<View style={styles.container}>
      <Button
				text="Login With FlowID"
				textColor="#161616"
				backgroundColor="#d3d3d3"
        onPress={() => {
          navigation.navigate('Login');
				}}
				/>
      <Button
				text="Get Party Account Info from ESB"
				textColor="#161616"
				backgroundColor="#d3d3d3"
        onPress={() => {
          navigation.navigate('UserInfo');
				}}
				/>
			<Button
				text="Get Data from BFF Data Base"
				textColor="#161616"
				backgroundColor="#d3d3d3"
        onPress={() => {
          navigation.navigate('Prompts');
				}}
				/>
				<Button
				text="Get Data from Drupal CMS"
				textColor="#161616"
				backgroundColor="#d3d3d3"
        onPress={() => {
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
	}
});

export default Home;
