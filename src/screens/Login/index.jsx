import { useState, useEffect } from "react"
import { Text, View, StatusBar } from "react-native"
import { setData, getData } from '../../context/Data'
import { TextCuston } from '../../components/TextInput'
import { Style } from "../../context/Theme"
import { ButtonCuston } from "../../components/Button"

export const Login = ({ navigation }) => {
    const [error, setError] = useState('')
    const [form, setForm] = useState('')
    
    var user = {}
    useEffect(() => {
        const FindUser = (value) => {
            user = value
        }
        getData(FindUser, 'user')
    })

    const Validated = () => {
        const { user, pass } = form

        if (!user || user.trim() === '') {
            setError('Preencha o campo usuário!')
            return false
        }

        if (!pass || pass.length < 6 || pass.length > 8) {
            setError('A senha deve ter entre 6 e 8 dígitos!')
            return false
        }

        return true
    }

    const Next = () => {
        user.login = true
        setData(user, 'user')
        navigation.navigate('Home') //Link
    }


    const CallBack = (key, value) => {
        var clone = Object.assign({}, form)
        clone[key] = value
        setForm(clone)
    }

    const onPress = () => {
        (Validated())
            ? Next()
            : setError('Preencha o formulário corretamente!')
    }

    return (
        <View style={Style.container}>
            <Text style={Style.title}>Login</Text>
            <TextCuston
                name='user'
                CallBack={CallBack}
                value={form.user}
                placeholder='E-mail'
            />
            <TextCuston
                name='pass'
                CallBack={CallBack}
                value={form.pass}
                placeholder='Senha'
            />
            <Text style={Style.error}>{error}</Text>
            <ButtonCuston
                onPress={onPress}
                placeholder='Logar'
            />
            <StatusBar style="auto" />
        </View>
    );
}
