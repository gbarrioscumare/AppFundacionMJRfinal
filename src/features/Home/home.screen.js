import React, {Component , useState, useEffect} from "react";
import * as firebase from "firebase";
import { View, 
    Text,
    Button,
    StyleSheet,
    Image,
    TouchableOpacity, 
    FlatList
} from "react-native"
import { createAppContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import "firebase/auth";
import "firebase/firestore";
import VideoPlayer from 'react-native-video-controls'
import Player from './video.screen'

const Home = ({navigation}) => {


    return(
            
            <View style={styles.container} >
                <Text style={styles.title}>BIENVENIDO A LA APLICACION MJR</Text>
                <Text style={styles.subtitle}>Hacer click en la imagen para ver el video introductorio</Text>
                <TouchableOpacity style={styles.coverButton} onPress={() => navigation.navigate('Player')}>
                <Image 
                style={styles.stretch}
                source={require('../../../assets/Arbol.png')} />
                </TouchableOpacity>
                <Text style={styles.title2}>¿Quienes Somos?</Text>
                <Text style={styles.subtitle2}>Somos una Fundación que tiene por objetivo contribuir a mejorar la calidad de la educación y la salud mental de las personas más vulnerables de la región de O’Higgins.</Text>
                <Text style={styles.subtitle3}>Esta aplicación busca fortalecer las competencias parentales y promover la coparentalidad desde la gestación. Es muy simple de usar y tiene la ventaja que puedes descargar los contenidos desde tu celular.</Text>
                <Image
                style={styles.logo}
                source={require('../../../assets/Logo_Home.png')}
                />
            </View>
        
    );
}
export default Home;

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        alignItems:'center',
        backgroundColor: "#ffcc6c",
        height: "100%"
      },
      stretch: {
        width: "90%",
        height: 200,
        resizeMode: 'stretch',
        alignItems:'center',
        position: "relative",
        marginTop: 0,
        borderRadius:10
        
      },      
      logo: {
        width: "50%",
        height: 200,
        alignItems:'center',
        marginTop: 0,
       
    
    },
      coverButton:{
        width:'90%',
        height: 200,
        alignItems:'center',
        backgroundColor: 'rgba(0,0,0,0.06)',
        marginTop:25,
        borderRadius:10,
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold',
    },
    subtitle:{
        fontSize: 15,
        fontWeight: 'bold',
    },
    subtitle2:{
        fontSize: 13,
        fontWeight: 'bold',
        marginTop: 10,
        marginLeft: "2.5%",
        marginRight: "2.5%",
        paddingLeft: "2%",
        paddingRight: "2%",
        maxWidth: "85%"

        

    },
    subtitle3:{
        fontSize: 13,
        fontWeight: 'bold',
        marginTop: 10,
        marginLeft: "5.6%",
        marginRight: "5.6%",
        paddingLeft: "2%",
        paddingRight: "2%",
        maxWidth: "88%"

    },
    title2:{
        fontSize: 20,
        fontWeight: 'bold',
        marginTop:20,
    },
})