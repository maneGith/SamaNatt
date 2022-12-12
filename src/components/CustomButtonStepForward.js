import React from 'react';
import {StyleSheet, TouchableOpacity, Image } from 'react-native';
import Imga  from '../../assets/images/step-fw-a.jpeg';
import Imgd  from '../../assets/images/step-fw-d.jpeg';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from './Context';


const CustomButtonStepForward = ({ navigation, desabledValue, onPressedButtonValue, setPrenom, setNom, setUserData }) => {
    const {signIn} = React.useContext(AuthContext);

    const searchUser = (telephone) => {
        fetch('http://10.0.2.2:3001/' + telephone)
        .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.length > 0) {
                    //console.log(responseJson[0]); 
                    //signIn(responseJson[0]);
                    setUserData(responseJson[0]);
                    navigation.navigate('CodeForLogin'); 
                }else{
                    setPrenom('');
                    setNom('');
                    navigation.navigate('Inscription'); 
                } 
            })
            .catch((error) => {
                console.error(error);
            });
    }
   
    return (  
        <TouchableOpacity 
            style={styles.container}
            disabled={desabledValue}
            onPress={() => { 
                searchUser(onPressedButtonValue)
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