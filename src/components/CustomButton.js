import React from 'react';
import {Text, StyleSheet, TouchableOpacity } from 'react-native';

const FormatPhoneNumber = (number) => {

    let numberDeleteSpace=number.replaceAll(' ', '');

    if (numberDeleteSpace.length>2 && numberDeleteSpace.length<=5){

        numberDeleteSpace = numberDeleteSpace.substring(0, 2) + ' ' + numberDeleteSpace.substring(2)
       
    
    } else if(numberDeleteSpace.length>5 && numberDeleteSpace.length<=7) {

        numberDeleteSpace = numberDeleteSpace.substring(0, 2) + ' ' + numberDeleteSpace.substring(2, 5) + ' ' + numberDeleteSpace.substring(5, 7);
       
    } else  if (numberDeleteSpace.length>7) {
        
        numberDeleteSpace = numberDeleteSpace.substring(0, 2) + ' ' + numberDeleteSpace.substring(2, 5) + ' ' + numberDeleteSpace.substring(5, 7)+ ' ' + numberDeleteSpace.substring(7)
        //console.warn(numberDeleteSpace);
    }
  
    
    return numberDeleteSpace
}

const CustomButton = ({  desabledValue, setDesabledValue, text, bgColor, fgColor, ftSize, onPressedButtonValue, setOnPressedButtonValue}) => {
    return (  
        <TouchableOpacity
            style={[styles.container, {backgroundColor:bgColor}]}
            onPress={()=>{

                if(onPressedButtonValue.length>=11){
                    if(desabledValue){
                        setDesabledValue(false);
                        setOnPressedButtonValue(FormatPhoneNumber(onPressedButtonValue+text));        
                    }
                }else{
                    setDesabledValue(true);
                    if(onPressedButtonValue.length!=0 || text=='7'){
                        setOnPressedButtonValue(FormatPhoneNumber(onPressedButtonValue+text));
                    }
                }

            }}
        >
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