import { Text, Pressable } from "react-native"

export const ButtonCuston = ({ onPress, placeholder }) => {
    return (<Pressable onPress={() => { onPress() }}>
        <Text>{placeholder}</Text>
    </Pressable>)
}