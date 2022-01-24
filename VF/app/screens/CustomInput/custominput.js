import React from "react";
import {View,Text,TextInput} from 'react-native-paper';


const CustomInput = ({value,setValue,placeholder}) => {
    return (
    
            <TextInput 
                value={value}
                onChangeText={setValue}
                placeholder={placeholder}
              
            />
    );
};


export default CustomInput;