// In App.js in a new project

import  React, {Component} from 'react';
import { View, Text ,Image} from 'react-native';
import Routes from './scr/Navigation/Routes';
import { Provider as PaperProvider,TextInput } from 'react-native-paper';
import { LoginScreen } from './app/screens/login/login.screens';
import { theme } from './App.style';
import { RegisterScreen } from './app/screens/register/register.screens';
import HomeScreen from './app/screens/home/home.screens';


const App = () => {
  return (
    <PaperProvider theme={theme}>
      <Routes/>
    </PaperProvider>
  );
};

export default App;