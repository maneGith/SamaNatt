import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CodeSecret = ({ onPressedButtonValue, prenom, nom }) => {
    return (  
        <View style={styles.root}>
                <View style={{flexDirection:'row'}}>
                    <View style={{width:'30%'}}>
                        <Text> Prénom / Nom </Text>
                    </View>
                    <View style={{width:'70%', alignItems:'flex-end'}}>
                    <Text> {prenom} / {nom} </Text>
                    </View>
                </View>
                <View style={{flexDirection:'row'}}>
                    <View style={{width:'30%'}}>
                        <Text>Téléphone</Text>
                    </View>
                    <View style={{width:'70%', alignItems:'flex-end'}}>
                    <Text> {onPressedButtonValue} </Text>
                    </View>
                </View>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        flexDirection:'column'
    }
});


export default CodeSecret;
