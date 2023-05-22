import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { Text, View } from "react-native";
import { Style } from "../context/Theme";
import { getData, setData } from "../context/Data";
import { ButtonCuston } from "../components/Button";

export const Home = ({ navigation }) => {
  var user_ = {};

  useEffect(() => {
    const CallBack = (user) => {
      if (!user) {
        navigation.navigate("Register");
        return false;
      }
      if (!user.login) {
        navigation.navigate("Login");
        return false;
      }
      user_ = user;
    };
    getData(CallBack, "user");
  });

  const onPress = () => {
    user_.login = false;
    setData("user", user_);
    navigation.navigate("Logoff");
  };
  
  return (
    <View style={Style.container}>
      <Text>Bem vindo à nossa loja!</Text>
      <ButtonCuston onPress={onPress} placeholder="Logoff" />
      <StatusBar style="auto" />
    </View>
  );
};
