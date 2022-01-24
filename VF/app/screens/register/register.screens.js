import React, {useState} from 'react';
import  {SafeAreaView,ScrollView,View} from 'react-native';
import { Appbar,TextInput,Button } from 'react-native-paper';
import { registerStyle } from './register.style';
import { useNavigation } from '@react-navigation/native';
import navigationString from '../../../scr/constrant/navigationString';
import Icon from 'react-native-vector-icons/FontAwesome';

export const RegisterScreen = () => {


    const extrnalnav = useNavigation()
    const gotoLogin=()=>
    {
        extrnalnav.navigate(navigationString.Login)
    }

    return (
        <SafeAreaView>
            <ScrollView>
                <Appbar>
                    <Appbar.Content title="Register" subtitle="Fast and Easy" subtitleStyle={{fontStyle:'italic',textDecorationLine:'underline'}}/>
                </Appbar>
                <View style={registerStyle.content}>
                    <TextInput
                        label={'Tên người dùng'}
                        
                        
                    />
                    <TextInput 
                        label={'Email'} 
                        keyboardType='email-address'/>
                    <TextInput 
                        label={'Mật khẩu'} 
                        secureTextEntry={true}/>
                    <TextInput 
                        label={'Xác nhận mật khẩu'} 
                        secureTextEntry={true}/>
                    <TextInput 
                        label={'Số điện thoại'} 
                        keyboardType='phone-pad'/>
                        
                    <Button mode='contained' style={registerStyle.button} onPress={gotoLogin}><Icon name='arrow-left'/>   Đăng nhập</Button>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
export default RegisterScreen;