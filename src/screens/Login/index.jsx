import { useState, useEffect } from "react"
import { Text, View } from "react-native"
import { setData, getData } from '../../context/Data'
import { TextCuston } from '../../components/TextInput'
import { Style } from "../../context/Theme"
import { ButtonCuston } from "../../components/Button"

export const Login = ({ navigation }) => {
    const [error, setError] = useState('')
    const [form, setForm] = useState('')
    var data = {}

    useEffect(() => {
        const findData = (value) => {
            data = value
            console.log(data)
        }
        getData(findData, 'user')
    })

    const Validate = () => {
        //Valida os registros
        return (form.user && form.pass) ? true : false
    }

    const next = () => {
        data.login = true
        setData(data, 'user')
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
                placeholder='Password' />
            <Text style={Style.error}>{error}</Text>
            <ButtonCuston
                onPress={onPress}  
                placeholder='Cadastrar'
            />
            <StatusBar style="auto"  />
        </View>
    );
}
