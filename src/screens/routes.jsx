import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { ScreenArray } from "../context/routes";

const {Navigator, Screen} = createDrawerNavigator()

export const Router = () =>{
    return(
        <Navigator>
            {
                ScreenArray.map((item, index) => (
                    <Screen
                        key={index}
                        name={item.route}
                        component={item.component}
                        options={{ item: item }}
                    />
                ))
            }
        </Navigator>
    )
}