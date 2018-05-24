// import { AppRegistry } from 'react-native';
// import App from './App';

// AppRegistry.registerComponent('album', () => App);


//import
import React from 'react';
import ReactNative from 'react-native';

//component
const App = () => {
    return (
        <Text>Some Text</Text>
    );
};

//render
ReactNative.AppRegistry.registerComponent('album',
() => App);
