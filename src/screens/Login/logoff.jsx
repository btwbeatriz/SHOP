import { View } from "react-native";
import { getData, setData } from "../../context/Data";
import { useEffect } from "react";

export const Logoff = ({ navigation }) => {
    useEffect(() => {
        const findData = (value) =>{
            value.login = false
            setData(value, 'user')
            navigation.navigate('Login')
        }
        getData(findData, 'user')
    })

    return(
        <View></View>
    );
}