import react, { useEffect } from "react";
import { View, Text, ActivityIndicator } from 'react-native'
import Sessao from "../../Sessao";
import * as SecureStore from 'expo-secure-store'
import styles from "./style";

const Splash = (props) => {

    useEffect(() => {
        Auth();
    }, []);

    return(
        <View style={styles.container}>
            <ActivityIndicator 
                size='large'
                color='green'
            />
        </View>
    )
    async function Auth () {
        const logado = Sessao.logado
        console.log(logado)
        if(logado){
            props.navigation.reset({
                index:0,
                routes: [{name:'Home'}]
            })
        } else {
            props.navigation.reset({
                index:0,
                routes: [{name:'Login'}]
            })
        }
    }
}

export default Splash