import { ScrollView } from "react-native"
import { createSharedElementStackNavigator } from "react-navigation-shared-element"
import {  getProducts } from "../../context/Data"
import { Card, ProductDetails} from "../../components/Card"
import { useEffect } from "react"

const { Navigator, Screen } = createSharedElementStackNavigator()

export const Store = ({navigation}) => {
    return(
        <Navigator>
            <Screen name="Catalogo" component={Catalogo}/>
            <Screen name="Detalhes" component={Detalhes}/>
        </Navigator>
    )
}

export const Catalogo = ({navigation}) => {
    return(
        <ScrollView>
            {
                getProducts().map(
                    (item) => (<Card {...item} navigation={navigation} />)
                )
            }
        </ScrollView>
    )
}

export const Detalhes = ({ navigation, route }) => {
    const params = route.params
    useEffect(() => {
        navigation.setOptions({headerTitle:params.title})
    },[])
    return(
       <ScrollView><ProductDetails {...params}/></ScrollView>
    )
}