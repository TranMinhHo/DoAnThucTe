import React from "react";
import { View,Text,FlatList,Dimensions } from "react-native";
import cars from "./cars";
import CarItem from "../CarItem";
import styles from "./styles";
import StyledButton from "../StyledButtons";
import navigationString from "../../scr/constrant/navigationString";
import { useNavigation } from "@react-navigation/native";
const CarList = (props) =>{
    const extrnalnav = useNavigation()
    const goToScreen=()=>
    {
      extrnalnav.navigate(navigationString.Detail)
    }
    const order=()=>
    {
      extrnalnav.navigate(navigationString.Customer)
    }
    return(
        <View style={styles.container}> 
            <FlatList
                data={cars}
                renderItem={({item}) =><CarItem car={item}/>}
                showsVerticalScrollIndicator={false}
                snapToAlignment="start"
                decelerationRate={'normal'}
                snapToInterval={Dimensions.get('window').height}
            />
        <View style={styles.buttonContainer}>
            <StyledButton
                type="primary" 
                content={"Đến trang xem chi tiết"} 
                onPress={goToScreen}
                
         />
            <StyledButton
                type="secondary" 
                content={"Đặt hàng"} 
                onPress={order}
         >
          </StyledButton>
        </View>
        </View>
        
    );
};
export default CarList;