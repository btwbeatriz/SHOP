import { Image, View } from "react-native"
import { Style } from "../../context/Theme"

export const ImageCuston = ({ img }) => {
    return (
        <View >
            <Image
            style={Style.img}
            source={img}
            />
        </View>
    )
}