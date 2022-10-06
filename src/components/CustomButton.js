import React from 'react';
import {Text, StyleSheet, TouchableOpacity } from 'react-native';



const CustomButton = ({  setDesabledValue, text, bgColor, fgColor, ftSize, onPressedButtonValue, setOnPressedButtonValue}) => {
    return (  
        <TouchableOpacity
            
            style={[styles.container, {backgroundColor:bgColor}]}>
            <Text style={[styles.button, {color:fgColor, fontSize:ftSize}]}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 10,
        alignItems: 'center',
        borderRadius: 5
    },
    button: {
        fontWeight: 'bold',
    }
});

export default CustomButton;