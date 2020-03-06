import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WebView from 'react-native-webview';
import Constants from "expo-constants";
const { manifest } = Constants;

const uri = `http://192.168.1.181:3000/login`;
const AWS_URI = `http://ae53fd20f5db011ea84000a0713cad7a-131043054.us-east-1.elb.amazonaws.com/login`;
const AWS_URI_LOGIN = 'http://ec2-3-234-244-10.compute-1.amazonaws.com/login';

console.log(uri)


const Login = props => {
	return (
    <WebView
      source={{uri: AWS_URI_LOGIN}}
      style={{marginTop: 20}}
    />
); 
}

const styles = StyleSheet.create({
  container: {
		flex: 1,
		flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
	},
	login: {
		fontSize: 24,
		color: 'black',
		textAlign: 'center',
		padding: 12
	}
});

export default Login;
