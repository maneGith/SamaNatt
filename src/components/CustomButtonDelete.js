import React from 'react';
import {StyleSheet, TouchableOpacity, Image } from 'react-native';
import Img  from '../../assets/images/backsp.png';

const CustomButtonDelete = ({ setDesabledValue, onPressedButtonValue, setOnPressedButtonValue }) => {
    return (  
        <TouchableOpacity 
            style={styles.container}
            onPress={()=>{

                let returnValue='';
                let subOnPressed=onPressedButtonValue.substring(onPressedButtonValue.length-1, onPressedButtonValue.length)
                if(subOnPressed!=' '){
                    returnValue=onPressedButtonValue.substring(0, onPressedButtonValue.length-1)
                }else{
                    returnValue=onPressedButtonValue.substring(0, onPressedButtonValue.length-2)
                }
                setOnPressedButtonValue(returnValue)
                setDesabledValue(true);

            }}
        >
           
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