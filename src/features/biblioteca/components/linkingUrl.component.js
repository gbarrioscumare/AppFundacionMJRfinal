import React, { useCallback, useEffect, useState } from "react";
import { Alert, Button, Linking, Platform, StyleSheet, Text, View } from "react-native";


export const LinkingUrl = ({url, message, bgcolor, color}) => {

    const openUrl = async (url) => {
        const isSupported = await Linking.canOpenURL(url);
        if (isSupported) {
            await Linking.openURL(url);
        } else {
            Alert.alert(`Don't know how to open this url: ${url}`);
        }
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer} backgroundColor={bgcolor}>
                <Button title={message} onPress={() => {
                    openUrl(url)
                    }}
                    style={{backgroundColor: "orange", color:"black"}}/>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center" },
    buttonContainer: {
        margin: 10,
        width: 200,
        borderRadius: 15,
        shadowColor: "black",
        shadowOffset: { width:5, height:5},
        shadowOpacity: 50,
        shadowRadius: 0.3
    }
});
