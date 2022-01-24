
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
    Homee,
    Detaill,
    Exploree,
} from '../screens'
import { LoginScreen } from '../../app/screens/login/login.screens';
import { RegisterScreen } from '../../app/screens/register/register.screens';
import navigationString from '../constrant/navigationString';
import  IntroScreenn  from '../../app/screens/intro/intro';
import ApiScreenn from '../../app/screens/api/api';
import MapScreenn from '../../components/Map/MapScreen';
import Moredetail from '../screens/MoreDetail/moredetail';
import CustomerForm from '../../app/screens/customer/customer.screens';



const Stack = createNativeStackNavigator();


function Routes  () {
    return(
        <NavigationContainer>
            <Stack.Navigator  initialRouteName={navigationString.Login}>
                <Stack.Screen name={navigationString.HOME} component={Homee} />
                <Stack.Screen name={navigationString.Detail} component={Detaill} />
                <Stack.Screen name={navigationString.Explore} component={Exploree} />
                <Stack.Screen name= {navigationString.Login} component={LoginScreen}/>
                <Stack.Screen name= {navigationString.Register} component={RegisterScreen}/>
                <Stack.Screen name= {navigationString.Api} component={ApiScreenn}/>
                <Stack.Screen name= {navigationString.Map} component={MapScreenn}/>
                <Stack.Screen name= {navigationString.MoreDetail} component={Moredetail}/>
                <Stack.Screen name= {navigationString.Customer} component={CustomerForm}/>
            </Stack.Navigator>
        </NavigationContainer>
    )    
}

export default Routes;