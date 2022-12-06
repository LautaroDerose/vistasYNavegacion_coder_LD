import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import shopNavigator from "./shop";
import CartNavigator from './cart'
import OrderNavigator from "./orders";
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from "../constants/themes/colors";
const BottomTab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <BottomTab.Navigator
            initialRouteName="shopTab"
            screenOptions={{
                headerShown: false,
                tabBarLabelStyle: {
                    fontFamily: 'Lato-Regular',
                    fontSize: 12,
                    marginBottom: 10,
                },
                tabBarStyle:{
                    paddingVertical: 10,
                    height: 60,
                },
                tabBarActiveTintColor: COLORS.gameOnPrimary,
                tabBarInactiveTintColor: COLORS.gameOnSecondary,
            }}
        >
            <BottomTab.Screen
                name="ShopTab"
                component={shopNavigator}
                options={{
                title: 'Shop',
                tabBarIcon: ({ focused }) => (
                    <Ionicons
                    name={focused ? 'home' : 'home-outline'}
                    size={22}
                    color={COLORS.gameOnSecondary}
                    />
                ),
                
                }}
            />
           
            <BottomTab.Screen name='CartTab' component={CartNavigator}
            options={{
            title: 'cart',
            tabBarIcon: ({ focused }) => (
                <Ionicons
                    name={ focused ? 'cart' : 'cart-outline' }
                    size={22}
                    color={COLORS.gameOnSecondary}
                />
            ),
            }}
            />
            <BottomTab.Screen name='OrderTab' component={OrderNavigator}
            options={{
            title: "orders",
            tabBarIcon: ({ focused }) => (
                <Ionicons
                    name={ focused ? 'file-tray' : 'file-tray-outline' }
                    size={22}
                    color={COLORS.gameOnSecondary}
                />
            ),
            }}
            />
        </BottomTab.Navigator>
    )
};

export default Tabs;
