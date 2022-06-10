import react, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import styles from "./styles";
import { MaterialIcons } from '@expo/vector-icons';
import Sessao from "../../Sessao";

const TelaDeInicio = (props) => {

    const sair = () => {
        
        Sessao.logoff()
        console.log(Sessao.user);
        console.log(Sessao.token)

        props.navigation.reset({
            index:0,
            routes: [{name:'Login'}]
        })
    }

    return(
        <View style={styles.container}>
           
           <View style={styles.textBox}>
                <Text>Parabéns você conseguiu logar</Text>
           </View>

            
            <View style={styles.exitBox}>
                <TouchableOpacity 
                    onPress={sair}
                >
                    <View>
                        <MaterialIcons name="logout" size={24} color="black" />
                        <Text>Sair</Text>
                    </View>
                </TouchableOpacity> 
            </View>
           
        </View>
    )
}

export default TelaDeInicio