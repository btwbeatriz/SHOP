import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { Text, View } from "react-native";
import { Style } from '../context/Theme';
import { getData } from "../context/Data";
import { ButtonCuston } from '../components/Button';

export const Home = ({ navigation }) => {

  useEffect(() => {
      const CallBack = (user) => {
          if (!user) {
              navigation.navigate('Register')
              return false
          }
          if (!user.login) {
              navigation.navigate('Login')
              return false
          }
      }
      getData(CallBack, 'user')
  })
  const onPress = () => {
      navigation.navigate('Logoff')
  }
  return (
      <View style={Style.container}>
          <Text>Open up App.js to s2tart working on your app!</Text>
          <ButtonCuston onPress={onPress} placeholder='Logoff' />
          <StatusBar style="auto" />
      </View>
  );
}