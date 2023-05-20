import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { Style } from "../../context/Theme";
import { TextCuston } from '../../components/TextInput'
import { ButtonCuston } from "../../components/Button";
import { getData, setData } from "../../context/Data";
import { useState, useEffect } from "react";

export const Register = ({ navigation }) => {
    const [error, setError] = useState('')
    const [form, setForm] = useState('')

    const CallBack = (key, value) => {
        var clone = Object.assign({}, form)
        clone[key] = value
        setForm(clone)
    }
    const Validated = () => {
        return (form.name && form.pass && form.email && form.phone)
            ? true : false
    }
    const Next = () => {
        var clone = Object.assign({}, form)
        clone.login = true
        setData('user', clone)
        navigation.navigate('Home')
    }
    const onPress = () => {
        (Validated())
            ? Next()
            : setError('preencha o formulario corretamente')
    }

    return (<View style={Style.container}>
        <Text style={Style.title}>Cadastre-se</Text>
        <TextCuston
            name='name'
            value={form.name}
            placeholder='Nome'
            CallBack={CallBack} />
        <TextCuston
            name='pass'
            value={form.pass}
            placeholder='Senha'
            CallBack={CallBack} />
        <TextCuston
            name='email'
            value={form.email}
            placeholder='E-mail'
            CallBack={CallBack} />
        <TextCuston
            name='phone'
            value={form.phone}
            placeholder='Telefone'
            CallBack={CallBack} />
        <Text style={Style.error}>{error}</Text>
        <ButtonCuston onPress={onPress} placeholder='Cadastrar' />
    </View>)
}
