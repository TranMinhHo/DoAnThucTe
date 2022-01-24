import React , {Component} from "react";
import {View ,Text, StyleSheet,Image,Pressable} from 'react-native';
import { ImageBackground } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import navigationString from "../../constrant/navigationString";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-web";

const Detaill = () => {
    const extrnalnav = useNavigation()
    const moredetail=()=>{
        extrnalnav.navigate(navigationString.MoreDetail)
    }
    const img = require('../../../assets/image/a20.png');
    return (
        <View style={styles.container}>
            <Text style={styles.text}>LUX A2.0</Text>
            <Image source={img}
            
             style={styles.image}/>
            <Text style={styles.text1}>Price: $60.000</Text>
            <View style={{flexDirection:'row',padding:10}}>
                <Text style={{fontWeight:'bold'}}>Color</Text>

            <Pressable style={{
                backgroundColor:'#171A20CC', 
                height:20,
                width:20,
                borderRadius:5,
                justifyContent:'center',
                alignItems:'center',   
                marginLeft:5,
                marginRight:5,
                }}
               
                >
            </Pressable>
            <Pressable style={{
                backgroundColor:'red', 
                height:20,
                width:20,
                borderRadius:5,
                justifyContent:'center',
                alignItems:'center',   
                marginLeft:5,
                marginRight:5,
                }}
          
                >
            </Pressable>
            <Pressable style={{
                backgroundColor:'white', 
                height:20,
                width:20,
                borderRadius:5,
                justifyContent:'center',
                alignItems:'center',   
                marginLeft:5,
                marginRight:5,
                borderColor:'black',
                borderWidth:1
                }}
                >
            </Pressable>

            </View>
          

            <Pressable style={{
                backgroundColor:'#171A20CC', 
                height:50,
                borderRadius:20,
                justifyContent:'center',
                alignItems:'center',
                width:'80%',
                marginTop:60
                }}
                onPress={moredetail}
                >
                <Text style={styles.text2}>Xem thông số kỹ thuật</Text>
            </Pressable>
        </View>
        
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        backgroundColor:'white',
    },
    image:{
        width:'100%',
        height:'40%',
        marginTop:'10%',
        
      
      },
      text:{
        fontSize:30,
        fontWeight:'500',
        textTransform:'uppercase',
        marginTop:30,
       },
       text1:{
        fontSize:20,
        fontWeight:'500',
        textTransform:'uppercase',
        marginTop:20,
       },
       text2:{
        fontSize:15,
        fontWeight:'700',
        textTransform:'uppercase',
        color:'white',
        textDecorationLine:'underline'
       },
    
});

export default Detaill;