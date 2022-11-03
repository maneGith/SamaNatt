import React from 'react';
import {StyleSheet, TouchableOpacity, Image } from 'react-native';
import Imga  from '../../assets/images/step-fw-a.jpeg';
import Imgd  from '../../assets/images/step-fw-d.jpeg';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from './Context';


const CustomButtonStepForward = ({ navigation, desabledValue, onPressedButtonValue, setPrenom, setNom }) => {
    const {signIn} = React.useContext(AuthContext);
   
    return (  
        <TouchableOpacity 
            style={styles.container}
            disabled={desabledValue}
            onPress={() => {
                if(onPressedButtonValue!='77 743 74 44'){
                    setPrenom('');
                    setNom('');
                    navigation.navigate('Inscription');
                }else{
                    signIn(onPressedButtonValue);
                }
               
            }}
        >
           <Image 
                source={desabledValue?Imgd:Imga}  
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

export default CustomButtonStepForward;