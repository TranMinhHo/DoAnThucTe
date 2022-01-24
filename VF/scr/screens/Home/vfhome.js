import React , {Component} from "react";
import {View ,Text, StyleSheet,Button} from 'react-native';
import navigationString from "../../constrant/navigationString";
import StyledButton from "../../../components/StyledButtons";
import CarList from "../../../components/CarList";
import Header from "../../../components/Header";
const Home = ({navigation}) => {
    console.log("propss available",navigation)
    return (
       <View>
           <View>
               <Header/>
               <CarList/>
           </View>
       </View> 
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
    },
});

export default Home;