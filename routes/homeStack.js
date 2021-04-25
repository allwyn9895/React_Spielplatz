import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";

const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (
  <Navigator >
    <Screen name="Home" component={Home} options={{title:'GameZone', headerStyle:'#eee'}}  />
    <Screen name="Details" component={ReviewDetails} options={{title:'Review Details', headerStyle:'#eee'}} />
  </Navigator>
);

export default function AppNavigator(){
    return(
  <NavigationContainer>
    <HomeNavigator />
  </NavigationContainer>
  );
}