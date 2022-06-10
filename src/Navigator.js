import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import TelaDeLogin from "./telas/Login";
import TelaDeInicio from "./telas/Start";
import Splash from "./telas/Splash";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return(
        <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen name='Splash' component={Splash} options={{ headerShown:false }}/>
            <Stack.Screen name="Login" component={TelaDeLogin} options={{ headerShown:false }}/>
            <Stack.Screen name="Home" component={TelaDeInicio} />
        </Stack.Navigator>
    )
}

const Navigator = () => {
    return(
        <NavigationContainer>
            <StackNavigator/>
        </NavigationContainer>
    )
}

export default Navigator