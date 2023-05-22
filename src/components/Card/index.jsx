import { Button, View, Text } from "react-native";
import { Style } from "../../context/Theme";
import { useState } from "react";
import { ImageCustom } from "../Image";
import { ButtonCuston } from "../Button";

export const Card = (props) => {
  const [getQtd, setQtd] = useState(0);
  const add = () => {
    setQtd(getQtd + 1);
    // if verificar se produto existe na sacola
    // Not existe - adicianar item e quantidade { 'alface': 1 } sacola[title] = getQtd + 1
  };
  const remove = () => {
    if (getQtd != 0) {
      setQtd(getQtd - 1);
      // if verificar se produto existe na sacola
      // Not existe - adicianar item e quantidade { 'alface': 1 } sacola[title] = getQtd - 1
      // Remover { 'alface': 0 } => {}
    }
  };

  return (
    <View style={[Style.row, Style.card]}>
      <View>
        <ImageCustom img={props.img} />
        <Text onPress={() => { props.navigation.navigate("Detalhes", { ...props });
        }}>Veja mais detalhes</Text>
      </View>
      <View style={Style.column}>
        <Text style={Style.title}>{props.title}</Text>
        <Text style={Style.text}>{props.description}</Text>
        <Text style={Style.text}><Text>R$ </Text>{props.price}</Text>
        <Text style={Style.text}><Text>Qtd </Text>{getQtd}</Text>
        <View style={Style.row}>
          <ButtonCuston onPress={add} placeholder="+" />
          <ButtonCuston onPress={remove} placeholder="-" />
        </View>
      </View>
    </View>
  );
};

export const ProductDetails = (props) => {
  return (
    <View>
      <View>
        <ImageCustom img={props.img} />
      </View>
      <View>
        <Text style={Style.text}>{props.description}</Text>
        <Text style={Style.text}><Text>R$ </Text>{props.price}</Text>
        <Text style={Style.text}>{props.descriptionAll}</Text>
      </View>
    </View>
  );
};
