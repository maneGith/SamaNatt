import React from 'react';
import {StyleSheet, TouchableOpacity, Image } from 'react-native';
import Img  from '../../assets/images/step-fw.png';

const CustomButtonDelete = ({ setDesabledValue, text, nameIcon, ftColor, ftSize, onPressedButtonValue, setOnPressedButtonValue }) => {
    return (  
        <TouchableOpacity 
            style={styles.container}>
           
           <Image 
                        source={Img}  
                        style={styles.iconImg}
                        resizeMode="contain"
                    />
                    
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
    iconImg: {
        color: '#66CDAA', 
        fontSize: 50,
        width:40,
        height:40
    },
});

export default CustomButtonDelete;