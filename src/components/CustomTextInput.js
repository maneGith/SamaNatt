import React from 'react';
import {TextInput } from 'react-native';

const CustomTextInput =  ({value, setValue, placeholder, autoFocus, showSoftInputOnFocus, fontSizeValue, fontColor}) => {
    return ( 
       
        <TextInput 
            value={value}
            onChangeText={setValue}
            placeholder={placeholder}
            style={{fontSize:fontSizeValue, color:fontColor}}
            autoFocus={autoFocus}
            
            showSoftInputOnFocus={showSoftInputOnFocus}
        />     
       
     );
};


export default CustomTextInput;