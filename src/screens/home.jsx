import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { Text, View } from "react-native";
import { Style } from '../context/Theme';
import { getData } from "../context/Data";
import { ButtonCuston } from '../components/Button';

export const Home = ({ navigation }) => {
    useEffect(
      () => {
        function handleStatusChange(data){

          if (!data) {
            navigation.navigate('register')
            return true
          }
          if (!data.login) {
            navigation.navigate('login')
            return true
          }
        }
        getData(handleStatusChange, 'user')
      }
    )

    const onPress = () => {
      navigation.navigate('Logoff')
    }

    return(
      <View style={Style.container}>
        <Text style={Style.title}> SHOP </Text>
        <ButtonCuston
          onPress={onPress}
          placeholder='Logoff'
          />
          <StatusBar style="auto" />
      </View>
    );
}

