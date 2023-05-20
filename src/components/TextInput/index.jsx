import { TextInput, View } from "react-native"
import { Style } from "../../context/Theme"

export const TextCuston = (props) => {

    const onChangeText = (e) => {
        props.CallBack(props.name, e)
    }

    return (<View style={Style.row}>
        <TextInput
            onChangeText={onChangeText}
            value={props.value}
            placeholder={props.placeholder}
            style={Style.TextInput}
        />
    </View>)
}