import { StyleSheet,Dimensions } from "react-native";

const styles=StyleSheet.create({
    carContainer:{
        width :Dimensions.get('window').width,
        height:Dimensions.get('window').height,
      },
      titles:{
        width :'100%',
        marginTop:'20%',
        alignItems:'center',
      },
      title:{
        fontSize:40,
        fontWeight:'600',
      
      },
      subtitle:{
        fontSize:16,
        color:'gray',
     
      },
      image:{
        width:'100%',
        height:'50%',
        marginTop:'60%',
        position:'absolute'
      },
      buttonContainer:{
        position:'absolute',
        bottom:80,
        width:'100%',
      },
   
});

export default styles;