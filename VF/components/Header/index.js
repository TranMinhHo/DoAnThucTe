import React from "react";
import { View,Image, Pressable ,Text} from "react-native";
import styles from "./styles";
import navigationString from "../../scr/constrant/navigationString";
import { useNavigation } from "@react-navigation/native";





const Header = (props) => {
    const extrnalnav = useNavigation()
    const goToMap=()=>{
        extrnalnav.navigate(navigationString.Map)
    }
    return(
        <View style={styles.container}>
            
            <Image source={require('../../assets/image/logo1.png')}/>

            <Pressable
                style={[styles.button,{backgroundColor:'#171A20CC'}]}
                onPress={() =>goToMap()}
            >
                <Text style={{color:'white',fontSize:10}}>MAP</Text>
            </Pressable>
            
           
        </View>

    );
};

function Side(){
    return(
        console.warn("Side was pressed")
        
    )
}

export default Header;