import React , {Component} from "react";
import {View ,Text, StyleSheet, Dimensions} from 'react-native';
const MapScreenn = () => {
    return (
        <View style={styles.container}>
            <Text>
                MAPPP SCRENNN
            </Text>
        </View>
    );
};


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#FFF",
        alignItems:"center",
        justifyContent:'center',

    },
    map:{
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
    },
})

export default MapScreenn;