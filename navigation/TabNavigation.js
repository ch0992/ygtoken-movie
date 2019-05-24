import React from 'react'
import { Platform } from 'react-native';
import {createBottomTabNavigator, createAppContainer} from "react-navigation";
import MoviesScreen from "../screens/Movies";
import TVScreen from "../screens/TV";
import SearchScreen from "../screens/Search";
import { BG_COLOR } from "../constants/Colors";
import TabBarIcon from "../components/TabBarIcon";


const TabNavigation = createBottomTabNavigator(
    {
        Movie :{
            screen : MoviesScreen,
            navigationOptions : {
                TabBarIcon: ({focused}) => (
                    <TabBarIcon
                        focused={focused}
                        name={Platform.OS === "ios" ? "ios-film" : "md-film"}
                    />
                )
            }
        },
        TV :{
            screen : TVScreen,
            navigationOptions : {
                TabBarIcon : ({focused}) => (
                    <TabBarIcon
                        focused={focused}
                        name={Platform.OS === "ios" ? "ios-film" : "md-film"}
                    />
                )
            }
        }, 
        Search : {
            screen : SearchScreen,
            navigationOptions : {
                TabBarIcon : ({focused}) => (
                    <TabBarIcon
                        focused = {focused}
                        name={Platform.OS === "ios" ? "ios-film" : "md-film"}
                    />
                )
            }
        }
    },
    {
        tabBarOptions : {
            showLabel : false,
            style : {
                backgroundColor : BG_COLOR
            }
        }
    }
);

export default createAppContainer(TabNavigation);