import React, { useCallback, useEffect, useState } from "react";
import { Alert, Button, Linking, Platform, StyleSheet, Text, View } from "react-native";


export const LinkingUrlBiblioteca = ({url, message, color, bgcolor}) => {

    const openUrl = async (url1) => {
        const isSupported = await Linking.canOpenURL(url1);
        if (isSupported) {
            await Linking.openURL(url1);
        } else {
            Alert.alert(`Don't know how to open this url: ${url}`);
        }
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer} backgroundColor={bgcolor}>
                <Button title={message} onPress={() => {
                    openUrl(url)
                    }} color={color}/>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "left" },
    buttonContainer: {
        margin: 5,
        width: 200,
        borderRadius: 15,
        //shadowColor: "black",
        //shadowOffset: { width:5, height:5},
        //shadowOpacity: 50,
        //shadowRadius: 0.3
    }
});
