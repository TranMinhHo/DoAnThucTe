import React , {Component} from "react";
import {View ,Text, StyleSheet,Image,Pressable,ScrollView,Dimensions} from 'react-native';
import { ImageBackground } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import navigationString from "../../constrant/navigationString";
import { useNavigation } from "@react-navigation/native";

const moredetail = () => {
    return (
        <ScrollView style={{
            flex:1,
            backgroundColor:'white'}} >
            <Text style={styles.text}>Thông số kỹ thuật</Text>
            <Image source={require('../../../assets/image/moredetail.png')}
            
             style={styles.image}/>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        backgroundColor:'white',
    },
    image:{
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
      },
      text:{
        fontSize:20,
        fontWeight:'500',
        textTransform:'uppercase',
        marginTop:10,
        marginBottom:10,
        marginLeft:80
       },
});

export default moredetail;