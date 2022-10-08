import React from 'react';
import {StyleSheet, TouchableOpacity, Image } from 'react-native';
import Imga  from '../../assets/images/step-fw-a.jpeg';
import Imgd  from '../../assets/images/step-fw-d.jpeg';



const CustomButtonStepForward = ({ desabledValue, setIsConnected }) => {
    return (  
        <TouchableOpacity 
            style={styles.container}
            disabled={desabledValue}
            onPress={()=>{
                setIsConnected(true);
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