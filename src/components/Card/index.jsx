import { View, Text } from "react-native"
import { Style } from "../../context/Theme"
import { useState } from "react"
import { ImageCuston } from "../Image"
import { ButtonCuston } from '../Button'

export const Card = (props) => {
    const [getQtd, setQtd] = useState(0)
    const add = () => {
        setQtd(getQtd + 1)
        // If verificar se produto exite sacola
        // Not exist - eu add item e qtd   { 'alface': 1 ,'tomate': 2 }  sacola[title]= getQtd +1
    }
    const remove = () => {
        if (getQtd != 0) {
            setQtd(getQtd - 1)
            // If verificar se produto exite sacola
            // Not exist - eu add item e qtd   { 'alface': 1 }  sacola[title]= getQtd -1
            // Remove item da sacola { 'alface': 0 } => {}
        }
    }
    const onPress = () => {
        props.navigation.navigate('Detalhes', { ...props })
    }
    return (<View style={[Style.row, Style.card, Style.cardBorder]}>
        <View style={[Style.column, Style.cardImg]}><ImageCuston img={props.img} />
            <Text onPress={onPress} style={Style.subText}>Veja mais detalhes</Text>
        </View>
        <View style={Style.column}>
            <Text style={Style.title}>{props.title}</Text>
            <View style={[Style.card]}>
                <Text style={Style.text}><Text>R$ </Text>{props.price}</Text>
                <Text style={Style.text}> {props.descrition}</Text>
            </View>
            <Text style={Style.text}><Text>Qtd </Text>{getQtd}</Text>
            <View style={[Style.row, Style.card]}>
                <View style={[Style.column]}>
                    <ButtonCuston onPress={add} placeholder='+' />
                </View>
                <View style={Style.column}>
                    <ButtonCuston onPress={remove} placeholder='-' />
                </View>
            </View>
        </View>
    </View>)
}

export const ProductDetails = (props) => {
    return (<View style={Style.row}>
        <View style={[Style.row, Style.cardImg]}>
            <ImageCuston img={props.img} />
        </View>
        <View style={[Style.row, Style.card]}>
            <Text style={Style.title}><Text>R$ </Text>{props.price} </Text>
            <Text style={Style.title}>{props.descrition}</Text>
        </View>
        <View style={Style.row}><Text style={Style.text}>{props.descritionAll}</Text></View>

    </View>)
}
