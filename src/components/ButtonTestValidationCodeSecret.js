import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { AuthContext } from './Context';

const ButtonTestValidationCodeSecret =  ({ pin1, setPin1, pin2, setPin2, pin3, setPin3, pin4, setPin4, value, userData }) => {
    const {signIn} = React.useContext(AuthContext);

    return ( 
        <TouchableOpacity 
            style={styles.conButton}
            onPress={() => {
                
                if (pin1.length<=0) {
                    setPin1(value) 
                }else if(pin2.length<=0){
                    setPin2(value) 
                }else if(pin3.length<=0) {
                    setPin3(value) 
                }else if(pin4.length<=0){
                    setPin4(value) 
                   
                    let pin = pin1+pin2+pin3+value;
                    if(pin==userData.code){
                        signIn(userData);
                    }else{
                        setPin1('') 
                        setPin2('') 
                        setPin3('') 
                        setPin4('') 
                    } 

                    
                  
                }
            }}
        >
            <Text style={styles.TextButton}>{value}</Text>
        </TouchableOpacity>
     );
}

const styles = StyleSheet.create({
    TextButton: {
        fontSize: 30,
        color:'#000',
        fontWeight: 'bold'
    },
    conButton: { 
        width: '100%',
        padding: 10,
        alignItems: 'center',
        borderRadius: 5
    }
})

export default ButtonTestValidationCodeSecret;