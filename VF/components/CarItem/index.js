import React from "react";
import { View,Text,ImageBackground } from "react-native";
import styles from "./styles";
import StyledButton from "../StyledButtons";
import navigationString from "../../scr/constrant/navigationString";
import { useNavigation } from "@react-navigation/native";

const CarItem=(props)=> {
    const extrnalnav = useNavigation()
    const goToScreen=()=>
    {
      extrnalnav.navigate(navigationString.Detail)
    }
    const {name,tagLine,image} = props.car;

    return (
        <View style={styles.carContainer}>
            
        <View style={styles.titles}>
          <Text style={styles.title}>{name}</Text> 
          <Text style={styles.subtitle}>{tagLine}</Text>
          
        </View>
        <ImageBackground source={image}
        style={styles.image}
        />
      </View>

    );
        

};
export default CarItem;