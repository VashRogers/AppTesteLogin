import react, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import styles from "./styles";

const TelaDeInicio = (props) => {

    return(
        <View style={styles.container}>
            <Text>Parabéns você conseguiu logar</Text>
        </View>
    )
}

export default TelaDeInicio