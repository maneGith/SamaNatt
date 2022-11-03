import React from 'react';
import {TextInput } from 'react-native';

const CustomTextInput =  ({value, onChangeText, placeholder, autoFocus, showSoftInputOnFocus, fontSizeValue,
     fontColor, editable, backgroundColor, borderRadius, height, keyboardType}) => {
    return ( 
       
        <TextInput 
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            style={{fontSize:fontSizeValue, color:fontColor,
                    backgroundColor:backgroundColor, borderRadius:borderRadius,
                    height:height}}
            autoFocus={autoFocus}
            editable={editable}
            showSoftInputOnFocus={showSoftInputOnFocus}
            keyboardType={keyboardType}
        />     
       
     );
};


export default CustomTextInput;