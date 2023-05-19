import { NavigationContainer } from "@react-navigation/native";
import { CardStyleInterpolators } from "@react-navigation/stack";
import { ScreenStack } from "./src/context/routes";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";

const options ={
  gestureEnabled: true,
  gestureDirection : 'horizontal',
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  headerShown: false,
}

const {Navigator, Screen} = createSharedElementStackNavigator();

const RootStack = () =>{
  return(
    <NavigationContainer screenOptions={options}>
      <Navigator screenOptions={}
      {
        ScreenStack.map((item,index) =>(
          <Screen 
          key={index}
          name={item.router}
          component={item.component}
          options={{item:item}}
          />
        ))
      }
    </NavigationContainer>
  )
}

export default function App() {

  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}
