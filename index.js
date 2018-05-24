// import { AppRegistry } from 'react-native';
// import App from './App';

// AppRegistry.registerComponent('album', () => App);


//import
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

//component
const App = () => (
        <Header />
    );


//render
AppRegistry.registerComponent('album',
() => App);
