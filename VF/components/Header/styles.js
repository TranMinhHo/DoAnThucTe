import { StyleSheet } from "react-native";
import { Button } from "react-native-web";
const styles =StyleSheet.create({
    container:{
        position:'absolute',
        top:30,
        zIndex:100,
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',
        paddingHorizontal:20,
    },
    button:{
        height:30,
        width:70,
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center', 
        
       },
});

export default styles;