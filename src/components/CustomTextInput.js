import React from 'react';
import {TextInput } from 'react-native';

const CustomTextInput =  ({value, onChangeText, placeholder, autoFocus, showSoftInputOnFocus, fontSizeValue, fontColor, editable}) => {
    return ( 
       
        <TextInput 
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            style={{fontSize:fontSizeValue, color:fontColor}}
            autoFocus={autoFocus}
            editable={editable}
            showSoftInputOnFocus={showSoftInputOnFocus}
        />     
       
     );
};


export default CustomTextInput;