import React from 'react';
import { NavigationContainer, NavigatorScreenParams } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainTabNavigator, { MainTabParamList } from './MainTabNavigator';
import SplashScreen from '../screens/Splash/SplashScreen';

export type MainStackParamList = {
    MainTabNavigator: NavigatorScreenParams<MainTabParamList>;
    //Add AuthStackParamList here
    SplashScreen: NavigatorScreenParams<any>
};

export default function MainStackNavigator() {
    const Stack = createNativeStackNavigator<MainStackParamList>();

    return (

            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='SplashScreen'>
                <Stack.Screen name="MainTabNavigator" component={MainTabNavigator} />
                <Stack.Screen name="SplashScreen" component={SplashScreen} />
            </Stack.Navigator>

    );
}