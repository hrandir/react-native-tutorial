// import { AppRegistry } from 'react-native';
// import App from './App';

// AppRegistry.registerComponent('album', () => App);


//import
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

//component
const App = () => (
    <View>
        <Header headerText={'Albums'} />
        <AlbumList />
    </View>
    );


//render
AppRegistry.registerComponent('album',
() => App);
