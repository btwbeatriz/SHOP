import { NavigationContainer } from "@react-navigation/native";
import { CardStyleInterpolators } from "@react-navigation/stack";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import { Login } from "./src/screens/Login";
import { Register } from "./src/screens/Login/register";
import { Logoff } from "./src/screens/Login/logoff";
import { Router } from "./src/screens/routes";

const options ={
  gestureEnabled: true,
  gestureDirection : 'horizontal',
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  headerShown: false,
}

const Stack = createSharedElementStackNavigator();

const RootStack = () =>{
  return(
    <Stack.Navigator screenOptions={options}>
      <Stack.Screen name="Routes" component={Router} />
      <Stack.Screen name="Cadastro" component={Register} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Logoff" component={Logoff} />
    </Stack.Navigator>
  )
}

export default function App() {

  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}
