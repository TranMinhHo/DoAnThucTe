import React from 'react';
import { Card,TextInput,Button,Text, useTheme} from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View ,Image} from 'react-native';
import { loginStyle } from './login.style';
import { useNavigation } from '@react-navigation/native';
import navigationString from '../../../scr/constrant/navigationString';
import FontAwesome from 'react-native-vector-icons/FontAwesome';




export const LoginScreen =  () => {
    const extrnalnav = useNavigation()
    const goToVFHome = () =>
    {
        extrnalnav.navigate(navigationString.HOME)
    }
    const goRegister = () =>
    {
        extrnalnav.navigate(navigationString.Register)
    }

    return(
        <SafeAreaView style={loginStyle.content}>
            <View>
            <Image 
                source={require('../../../assets/image/logo2.png')}
                style={{marginBottom:50,position:'relative'}}/>

            </View>
            <View style={loginStyle.view}>
               
                <Card style={{opacity:0.9,backgroundColor:'white'}}>
                    <Card.Title title="VinFast App" titleStyle={{color:'#A90A0E'}}></Card.Title>
                    <Card.Content>
                        <FontAwesome
                            name='user-o'
                            color='black'
                            size={15}
                            style={{marginTop:5}}
                        >
                            {"  "}
                            <Text style={{fontSize:15,fontStyle:'italic'}}>Tài khoản</Text>
                        </FontAwesome> 
                        <TextInput placeholder='Nhập tên đăng nhập'/>

                        <FontAwesome
                            name='lock'
                            color='black'
                            size={15}
                            style={{marginTop:10,marginBottom:5}}
                        >
                            {"  "}
                        <Text style={{fontSize:15,fontStyle:'italic'}}>Mật khẩu</Text>
                        </FontAwesome>

                        <TextInput placeholder='Nhập mật khẩu' secureTextEntry={true}
                        
                        
                        />

                        <Button uppercase={false} style={loginStyle.cardButton2}>Quên Email / Mật khẩu?</Button>
                        <Button mode="contained" style={loginStyle.cardButton} 
                                onPress={goToVFHome}>Đăng nhập
                            </Button>
                        <Text style={{textAlign:'center',fontWeight:'bold',color:'#A90A0E'}}>hoặc</Text>
                        <Button style={loginStyle.cardButton} onPress={goRegister}>Đăng ký tài khoản</Button>
                    </Card.Content>
                </Card>
            </View>
        </SafeAreaView>
    );
}
export default LoginScreen;