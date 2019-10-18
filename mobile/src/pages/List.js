import React, {useState, useEffect} from 'react';
import { SafeAreaView, ScrollView,StyleSheet, AsyncStorage, Image } from 'react-native';

import logo from '../assets/logo.png'
import SpotList from '../components/SpotList';

export default function List(){
    const [techs,setTechs] = useState([]);

    useEffect(()  => { //executar um método assim que a pagina é aberta
        AsyncStorage.getItem('techs').then(storagedTechs => {
            const techsArray = storagedTechs.split(',').map(tech => tech.trim());

            setTechs(techsArray);
        })
    }, []) 


    return (
        <SafeAreaView style={styles.container}>
            <Image styles={styles.logo} source={logo}></Image>

            <ScrollView>
               {techs.map(tech => <SpotList key={tech} tech={tech} />)}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },

    logo: {
        height: 32,
        resizeMode: 'contain', //para conseguir alterar o tamanho sem modificar a imagem
        alignSelf: 'center',
        marginTop: 10,
    },
})