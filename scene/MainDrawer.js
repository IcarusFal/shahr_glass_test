import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { DrawerContent } from './DrawerContent';
import { I18nManager } from 'react-native';
I18nManager.forceRTL(true);

//Screens
import LoginScreen from './LoginScreen';
import ProductsScreen from './ProductsScreen';
import ProfileScreen from './ProfileScreen';
import AuthScreen from './AuthScreen';
import EditProfile from './EditProfile';


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

//Home Stack
function creatHomeStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          headerShown: false,
          swipeEnabled: false
        }}></Stack.Screen>
      <Stack.Screen
        name="AuthScreen"
        component={AuthScreen}
        options={{
          headerShown: false,
        }}></Stack.Screen>
      <Stack.Screen
        name="ProductsScreen"
        component={ProductsScreen}
        options={{
          headerShown: false,
        }}></Stack.Screen>
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerShown: false,
        }}></Stack.Screen>
        <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{
          headerShown: false,
        }}></Stack.Screen>
    </Stack.Navigator>
  );
}

//Main Drawer
function MainDrawer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerStyle={{
          borderTopRightRadius: 30,
          borderBottomRightRadius: 30,
          zIndex: 2,
        }}
        drawerContent={(props) => <DrawerContent {...props}></DrawerContent>}>
        <Drawer.Screen
          name="loginScreen"
          children={creatHomeStack}
          options={{
            swipeEnabled: false,
            headerShown: false
          }}></Drawer.Screen>
      </Drawer.Navigator>

    </NavigationContainer>
  );
}

export default MainDrawer;

