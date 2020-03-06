import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import AppNavigator from './navigation/AppNavigator';
import Constants from "expo-constants";

const { manifest } = Constants;

const uri = `http://${manifest.debuggerHost.split(':').shift()}:3000/graphql`;

const BASE_URL = 'https://floating-thicket-10292.herokuapp.com/';
const AWS_URL = 'http://ae53fd20f5db011ea84000a0713cad7a-131043054.us-east-1.elb.amazonaws.com/graphql';
const AWS_URL_GQL = 'http://ec2-3-234-244-10.compute-1.amazonaws.com/graphql'
const LOCALHOST_URL = 'http://192.168.1.181:3000/graphql'

const httpLink = new HttpLink({
  uri: AWS_URL_GQL
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <AppNavigator />
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});



export default App;
