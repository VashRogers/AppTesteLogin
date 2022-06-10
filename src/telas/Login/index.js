import react, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Alert } from 'react-native'
import Api from "../../Api";
import Sessao from "../../Sessao";

import styles from "./styles";
import { Entypo } from '@expo/vector-icons';


const TelaDeLogin = (props) => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('')
    const [ carregando, setCarregando ] = useState(false)

    const entrar = async() => {
        if(!validaCampo()) return;


        let resposta = await Api.signin(email, password);
        validaLogin(resposta)

    }

    const validaCampo = () => {
        if(email == '' || password == ''){
            Alert.alert('Ocorreu um Erro!', 'Por favor preencha os campos de email ou senha');
            return false
        }
        return true
    }

    const validaLogin = (resposta) => {
        if(resposta.errorMsg){
            Alert.alert('Ocorreu um erro no Login!', 'Senha ou usuário podem estar incorretos')
        } else{
            Sessao.login(resposta.token);
            console.log(Sessao.token)

            props.navigation.reset({
                index:0,
                routes: [{name:'Home'}]
            })
        }
    }

    return(
        
        <KeyboardAvoidingView style={styles.container}>
            <View style={styles.inputContainers}>
                
                <View style={styles.viewInput}>
                    <Entypo name="email" size={20} color="white" />
                    <TextInput 
                        placeholderTextColor="#aaa"
                        selectionColor='white'
                        style={styles.textInput}
                        placeholder="Email"
                        value={email}
                        onChangeText={value => setEmail(value)}
                    />
                </View>
                
                <View style={styles.viewInput}>
                    <Entypo name="lock" size={20} color="white"/>
                    <TextInput 
                        placeholderTextColor="#aaa"
                        selectionColor='white'
                        style={styles.textInput}
                        placeholder="Password"
                        value={password}
                        onChangeText={value => setPassword(value)}
                        secureTextEntry={true}
                    /> 
                </View>
                <TouchableOpacity 
                    onPress={() => entrar()}
                >
                    <View style={styles.viewBtn}>
                        <Text style={styles.textBtn}>Enter</Text>
                    </View>
                </TouchableOpacity>
                
            </View>
        </KeyboardAvoidingView>
    )
}


export default TelaDeLogin