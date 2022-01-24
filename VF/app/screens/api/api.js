
import React, { useEffect,useState } from "react";
import {View ,Text, StyleSheet, TouchableOpacity,SafeAreaView,ActivityIndicator} from 'react-native';
import { FlatList } from "react-native";

const URL="https://jsonplaceholder.typicode.com/photos?_limit=10";

const ApiScrenn = () => {

    const [isLoading,setLoading] = useState(true);
    const [data,setData] = useState([]);

    useEffect(()=>{
        fetch(URL)
            .then((res)=>res.json())
            .then((json)=>setData(json.id))
            .catch((error) => alert(error))
            .finally(setLoading(false));
    })


    return(
        <SafeAreaView style={styles.container}>
            {isLoading ? <ActivityIndicator/> : 
            <FlatList
                data={data}
                keyExtractor={({id},index)=>id}
                renderItem={({item})=>{
                    return(
                        <Text>{item.title}</Text>
                    )
                }}
            />}
            
        </SafeAreaView>

    );
};



const styles = StyleSheet.create({
    container:{
        flex:1,
        display:"flex",
        justifyContent:'center',
        alignItems:'center',
     
    },
    button:{
        height:42,
        width:200,
        justifyContent:"center",
        alignItems:"center",
        alignSelf:"center",
        borderRadius:42,
        backgroundColor:"green",
    },
    list:{
        flex:1,
        padding:8
    },
});

export default ApiScrenn;