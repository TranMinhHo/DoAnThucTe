import React , {Component} from "react";
import {View ,Text, StyleSheet} from 'react-native';

const Exploree = () => {
    return (
        <View style={styles.container}>
            <Text>exploreeee</Text>
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

export default Exploree;