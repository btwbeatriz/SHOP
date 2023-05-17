import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { ScreenArray } from "../context/routes";

const {Navigator, Screeen} = createDrawerNavigator()

export const Router = () =>{
    return(
        <NavigationContainer>
            <Navigator>
                {ScreenArray.map((item, i) => (
                    <Screeen key={i} name={item.route} component={item.component}
                        options={{ item: item, }}
                    />
                ))}
            </Navigator>
        </NavigationContainer>
    )
}