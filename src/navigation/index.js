import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import ShopNavigator from "./shop";
import TabNavigator from './tabs';

const AppNavigator = () => {
    return (
        <NavigationContainer> 
            <TabNavigator />
        </NavigationContainer>
    )
};

export default AppNavigator;
