import React, {useState} from 'react';
import  {SafeAreaView,ScrollView,View,Text} from 'react-native';
import { Appbar,TextInput,Button, Checkbox } from 'react-native-paper';
import { customStyle } from './customer.style';
import { useNavigation } from '@react-navigation/native';
import navigationString from '../../../scr/constrant/navigationString';
import Icon from 'react-native-vector-icons/FontAwesome';

export const CustomerForm = () => {

    const [checked, setChecked] = React.useState(false);
    const extrnalnav = useNavigation()
    const gotoLogin=()=>
    {
        extrnalnav.navigate(navigationString.HOME)
    }

    return (
        <SafeAreaView>
            <ScrollView>
                <Appbar>
                    <Appbar.Content title="Thông tin khác hàng" subtitle="Fast and Easy" subtitleStyle={{fontStyle:'italic',textDecorationLine:'underline'}}/>
                </Appbar>
                <View style={customStyle.content}>
                    <TextInput
                        label={'Tên người dùng'}
                        
                        
                    />
                    <TextInput 
                        label={'Địa chỉ'} 
                        />
               
                    <TextInput 
                        label={'Số điện thoại'} 
                        keyboardType='phone-pad'/>
                    <Text style={{padding:10,fontWeight:'bold',fontSize:15}}>Hình thức thanh toán</Text>
                    <View style={{flexDirection:'column'}}>
                        <View style={{flexDirection:'row',marginLeft:20}}>
                        <Checkbox
                            status={checked ? 'checked' : 'unchecked'}
                            onPress={() => {
                            setChecked(!checked);
                            }}
                        />
                        <Text style={{marginTop:7}}>Thanh toán trực tiếp</Text>
                        </View>
                        <View style={{flexDirection:'row',marginLeft:20}}>
                        <Checkbox
                            status={checked ? 'checked' : 'unchecked'}
                            onPress={() => {
                            setChecked(!checked);
                            }}
                        />
                        <Text style={{marginTop:7}}>Thanh toán trực tuyến</Text>
                        </View>
                    </View>
                   
                    
                        
                    <Button mode='contained' style={customStyle.button} onPress={gotoLogin}><Icon name='arrow-left'/> Đặt hàng</Button>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
export default CustomerForm;