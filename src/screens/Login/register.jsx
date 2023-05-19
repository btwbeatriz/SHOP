import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { Style } from "../../context/Theme";
import { TextCuston } from "../../components/TextInput";
import { ButtonCuston } from "../../components/Button";
import { getData, setData } from "../../context/Data";
import { useState, useEffect } from "react";

export const Register = ({ navigation }) => {
    const [error, setError] = useState('')
    const [form, setForm] = useState('')

    const Validate = () => { }

    const next = () => {
        var clone = object.assign({}, form)
        clone.login = true
        setData(clone, 'user')
        navigation.navigate('Routes') //Link
    }

    const onPress = () => {
        (Validate()) ?
            next(form) :
            setError('Cadastro invalido')
    }

    const CallBack = (key, value) => {
        var clone = object.assign({}, form); //{user:'', pass:''}
        clone[key] = value
        setForm(clone)
    }

    return(
        <View style={Style.container}>
            <Text style={Style.title}>Login</Text>
            <TextCuston
                name='user'
                CallBack={CallBack}
                value={form.name}
                placeholder='User' />
            <TextCuston
                name='pass'
                CallBack={CallBack}
                value={form.pass}
                placeholder='Senha' />
                <TextCuston
                name='email'
                CallBack={CallBack}
                value={form.email}
                placeholder='E-mail' />
                <TextCuston
                name='phone'
                CallBack={CallBack}
                value={form.phone}
                placeholder='Celular' />
            <Text style={Style.error}>{error}</Text>
            <ButtonCuston
                onPress={onPress}  
                placeholder='Cadastrar'
            />
            <StatusBar style="auto"  />
        </View>
    );
}
