import React,{useEffect,useState} from 'react';
import {View,Text,StyleSheet,Dimensions} from 'react-native';
import Video from 'react-native-video';
import YoutubePlayer from 'react-native-youtube-iframe'

const Player=({navigation,route})=>{

    const {width,height} = Dimensions.get("screen")

    return(
        <View style={styles.mainPlayerView}>
            <View style={{height: height, backgroundColor:'#ffcc6c', alignItems:'center'}}>
                <YoutubePlayer
                height={250}
                width = {415}
                marginBottom={100}
                play={true}
                videoId={'2Gj_YzE1-pg'}
                />
                <Text style={styles.title2}>Nuestros objetivos</Text>
                <Text style={styles.title3}>●  Apoyar el fortalecimiento de habilidades parentales en familias con enfoque prenatal y primera infancia.</Text>
                <Text style={styles.title4}>●  Fomentar la lectura madre/padre/hijo(a) en niños y niñas de 0 a 4 años.</Text>
                <Text/>
                <Text style={styles.title2}>Contenidos</Text>
                <Text style={styles.title3}>●  Habilidades vinculares.</Text>
                <Text style={styles.title3}>●  Habilidades formativas.</Text>
                <Text style={styles.title3}>●  Habilidades protectoras.</Text>
                <Text style={styles.title3}>●  Habilidades reflexivas.</Text>
                <Text style={styles.title3}>●  Lectura vincular.</Text>
                <Text style={styles.title3}>●  Autoeficacia parental.</Text>
                <Text style={styles.title3}>●  Estrés parental.</Text>
            </View>
        </View>
    )
}

export default Player;

const styles = StyleSheet.create({
    mainPlayerView:{
        flex:1,
        backgroundColor: "#ffcc6c"
    },
    title2:{
        fontSize: 30,
        fontWeight: 'bold',
        alignItems: 'center',
    },
    title3:{
        fontSize: 16,
        fontWeight: 'bold',
        alignItems: 'center',
        maxWidth:"77%",
        marginTop:10
    },
    title4:{
        fontSize: 16,
        fontWeight: 'bold',
        alignItems: 'center',
        maxWidth:"80%",
        marginTop:10,
        marginLeft: 10
        
    },
    
})