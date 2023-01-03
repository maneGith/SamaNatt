import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomSimpleButton =  ({ textBtn, ftSize, fgColor, bgColor, btnHeight, onPress, disabled  }) => {
    return ( 
       <TouchableOpacity
            style={[styles.container, {backgroundColor:disabled?'#b8cdc3':'#66CDAA', height:btnHeight}]}
            onPress={onPress}
            disabled={disabled}
       >
            <Text style={{color:fgColor, fontSize:ftSize}}>{textBtn}</Text>
       </TouchableOpacity>      
     );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    }
});

export default CustomSimpleButton;

