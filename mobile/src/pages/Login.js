import React, {useState} from 'react';
import { View, AsyncStorage, Image, Text, TextInput, TouchableOpacity,StyleSheet } from 'react-native';

import api from '../services/api'

import logo from '../assets/logo.png';
import { white } from 'ansi-colors';

export default function Login({navigation}){
    const [email, setEmail] = useState('');
    const [techs, setTechs] = useState('');

    async function handleSubmit() {
        
        const response = await api.post('/sessions', {
            email
        });
        
        const { _id} = await response.data;

        await AsyncStorage.setItem('user',_id); //como se fosse o localStorage da web
        await AsyncStorage.setItem('techs',techs)
        
        navigation.navigate('List'); // enviar o usuario para a pagina 'List' que esta em routes.js
    }

    return (
        <View style={styles.container}>
            <Image source={logo} />

            <View style={styles.form}>
                <Text style={styles.label}>SEU E-MAIL *</Text>
                <TextInput 
                    style={styles.input}
                    placeholder="Seu e-mail"
                    placeholderTextColor="#999"
                    keyboardType="email-address" //para o teclado ficar do tipo de email
                    autoCapitalize="none" //não colocar primeira letra em maiusculo
                    autoCorrect={false}
                    value={email}
                    onChangeText={setEmail}
                />

                <Text style={styles.label}>TECNOLOGIAS *</Text>
                <TextInput 
                    style={styles.input}
                    placeholder="Tecnologias de interesse"
                    placeholderTextColor="#999"
                    autoCapitalize="words" //em cada palavra coloca a primeira letra em maiusculo
                    autoCorrect={false}
                    value={techs}
                    onChangeText={setTechs}
                />

                <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                    <Text style={styles.buttonText}>Encontrar spots   </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1, //para ficar na tela inteira
        justifyContent: 'center',
        alignItems: 'center',
    },

    label: {
        fontWeight:'bold',
        color:'#444',
        marginBottom: 8
    },

    form: {
        alignSelf: 'stretch',
        paddingHorizontal: 30,
        marginTop: 30,
    },

    input:{
        borderWidth: 1,
        borderColor: '#ddd',
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#444',
        height:44,
        marginBottom:20,
        borderRadius: 2,
    },

    button:{
        height: 42,
        backgroundColor:'#f05a5b',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
    },

    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    }
})