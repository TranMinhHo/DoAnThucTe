import React from 'react';
import { SafeAreaView } from 'react-native';
import { Title } from 'react-native-paper';
import { homeStyle } from './home.style';


const HomeScreen = () =>{
    return (
        <SafeAreaView style={homeStyle.content}>
            <Title>Home Screen</Title>
        </SafeAreaView>
    );
}
export default HomeScreen;