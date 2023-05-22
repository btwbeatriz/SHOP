import { Text, View } from "react-native";
import { Style } from "../../context/Theme";
import { TextCuston } from '../../components/TextInput'
import { ButtonCuston } from "../../components/Button";
import { setData } from "../../context/Data";
import { useState } from "react";
import validator from 'validator';

export const Register = ({ navigation }) => {
  const [error, setError] = useState('');
  const [form, setForm] = useState('');

  const CallBack = (key, value) => {
    var clone = Object.assign({}, form);
    clone[key] = value;
    setForm(clone);
  };

  const ValidateForm = () => {
    const { name, pass, email, phone } = form;

    if (!name || name.trim() === '') {
      setError('Preencha seu nome completo!');
      return false;
    }

    if (!pass || pass.length < 6 || pass.length > 8) {
      setError('A senha deve ter entre 6 e 8 dígitos!');
      return false;
    }

    if (!email || !validator.isEmail(email)) {
      setError('Digite um e-mail válido!');
      return false;
    }

    if (!phone || !/\([0-9]{2}\) [0-9]{4,5}-[0-9]{4}/.test(phone)) {
      setError('Digite um telefone válido! Ex: (xx) 99999-9999');
      return false;
    }

    return true;
  };

  const Next = () => {
    var clone = Object.assign({}, form);
    clone.login = true;
    setData('user', clone);
    navigation.navigate('Home');
  };

  const onPress = () => {
    if (ValidateForm()) {
      Next();
    }
  };

  return (
    <View style={Style.container}>
      <Text style={Style.title}>Cadastre-se</Text>
      <TextCuston
        name='name'
        value={form.name}
        placeholder='Nome Completo'
        CallBack={CallBack}
      />
      <TextCuston
        name='pass'
        value={form.pass}
        placeholder='Senha'
        CallBack={CallBack}
      />
      <TextCuston
        name='email'
        value={form.email}
        placeholder='E-mail'
        CallBack={CallBack}
      />
      <TextCuston
        name='phone'
        value={form.phone}
        placeholder='Celular'
        CallBack={CallBack}
      />
      <Text style={Style.error}>{error}</Text>
      <ButtonCuston onPress={onPress} placeholder='Cadastrar' />
    </View>
  );
};
