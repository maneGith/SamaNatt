import React from 'react';
import {TextInput } from 'react-native';

const CustomTextInput =  ({value, onChangeText, placeholder, autoFocus, showSoftInputOnFocus, fontSizeValue,
     fontColor, editable, backgroundColor, borderRadius, height, keyboardType, refInput, onFocus, width}) => {
    return ( 
       
        <TextInput 
            ref={refInput}
            value={value}
            onFocus={onFocus}
            onChangeText={onChangeText}
            placeholder={placeholder}
            style={{fontSize:fontSizeValue, color:fontColor,
                    backgroundColor:backgroundColor, borderRadius:borderRadius,
                    height:height, width:width}}
            autoFocus={autoFocus}
            editable={editable}
            showSoftInputOnFocus={showSoftInputOnFocus}
            keyboardType={keyboardType}
        />     
       
     );
};


export default CustomTextInput;