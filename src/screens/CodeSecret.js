import React, { useRef, useState } from 'react';
import { 
    View,
     Text,
     StyleSheet,
     TextInput,
    TouchableOpacity
 } from 'react-native';

const CodeSecret = ({ onPressedButtonValue, prenom, nom }) => {
    
    const [desablePin, setDesablePin] = useState(true);

    const pin1Ref = useRef(null);
    const pin2Ref = useRef(null);
    const pin3Ref = useRef(null);
    const pin4Ref = useRef(null);

    const pin11Ref = useRef(null);
    const pin22Ref = useRef(null);
    const pin33Ref = useRef(null);
    const pin44Ref = useRef(null);


    const [pin1, setPin1] = useState('');
    const [pin2, setPin2] = useState('');
    const [pin3, setPin3] = useState('');
    const [pin4, setPin4] = useState('');

    const [pin11, setPin11] = useState('');
    const [pin22, setPin22] = useState('');
    const [pin33, setPin33] = useState('');
    const [pin44, setPin44] = useState('');
    
    const isDesable = (linePin1, linePin2) => {
        if (linePin1.length!==4 || linePin2.length!==4) {
            setDesablePin(true);
        } else if (linePin1!==linePin2) {
            setDesablePin(true);
        }else{
            setDesablePin(false);
        }  
    }

    

    return (  
        <View style={styles.root}>
                <View style={{flexDirection:'row', paddingTop:10}}>
                    <View style={{width:'35%'}}>
                        <Text style={{fontWeight:'bold', color:'#000', fontSize:18}}>
                             Prénom / Nom : 
                             </Text>
                    </View>
                    <View style={{width:'65%', alignItems:'flex-end'}}>
                    <Text style={{fontSize:18}}> {prenom} / {nom} </Text>
                    </View>
                </View>
                <View style={{flexDirection:'row'}}>
                    <View style={{width:'35%'}}>
                        <Text style={{fontWeight:'bold', color:'#000', fontSize:18}}>
                            Téléphone :
                        </Text>
                    </View>
                    <View style={{width:'65%', alignItems:'flex-end'}}>
                    <Text style={{fontSize:18}}> {onPressedButtonValue} </Text>
                    </View>
                </View>
                <View style={{flexDirection:'column', paddingTop:10, alignItems:'center'}}>
                    <Text style={{ color:'#000', fontSize:20}}>Choisissez un code secret</Text>
                    <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                        <View style={styles.TextInputView}>
                            <TextInput 
                                ref={pin1Ref}
                                keyboardType='number-pad'
                                maxLength={1}
                                style={styles.TextInputText}
                                autoFocus={true}
                                onChangeText={(pin1) => {
                                        setPin1(pin1);

                                        let linePin1 = pin1+pin2+pin3+pin4;
                                        let linePin2 = pin11+pin22+pin33+pin44;
                                        isDesable(linePin1, linePin2); 

                                        if (pin1!=='') {
                                            pin2Ref.current.focus(); 
                                        }
                                }}
                                secureTextEntry={true}
                            />
                        </View>
                        
                        <View style={styles.TextInputView}>
                            <TextInput 
                                ref={pin2Ref}
                                keyboardType='number-pad'
                                maxLength={1}
                                style={styles.TextInputText}
                                onChangeText={(pin2) => {
                                    setPin2(pin2);

                                    let linePin1 = pin1+pin2+pin3+pin4;
                                    let linePin2 = pin11+pin22+pin33+pin44;
                                    isDesable(linePin1, linePin2);  

                                    if (pin2!=='') {
                                        pin3Ref.current.focus();
                                    }
                                }}
                                secureTextEntry={true}
                            />
                        </View>

                        <View style={styles.TextInputView}>
                            <TextInput 
                                ref={pin3Ref}
                                keyboardType='number-pad'
                                maxLength={1}
                                style={styles.TextInputText}
                                onChangeText={(pin3) => {
                                    setPin3(pin3);

                                    let linePin1 = pin1+pin2+pin3+pin4;
                                    let linePin2 = pin11+pin22+pin33+pin44;
                                    isDesable(linePin1, linePin2);  

                                    if (pin3!=='') {
                                        pin4Ref.current.focus();                                     
                                     }
                                }}
                                secureTextEntry={true}
                            />
                        </View>
                        
                        <View style={styles.TextInputView}>
                            <TextInput
                                ref={pin4Ref} 
                                keyboardType='number-pad'
                                maxLength={1}
                                style={styles.TextInputText}
                                onChangeText={(pin4) => {
                                    setPin4(pin4);

                                    let linePin1 = pin1+pin2+pin3+pin4;
                                    let linePin2 = pin11+pin22+pin33+pin44;
                                    isDesable(linePin1, linePin2);  

                                    if (pin4!=='') {
                                        pin11Ref.current.focus();         
                                    }
                                }}
                                secureTextEntry={true}
                            />
                        </View>
                        
                    </View>
                </View>
                <View style={{flexDirection:'column', paddingTop:10, alignItems:'center'}}>
                    <Text style={{ color:'#000', fontSize:20}}>Confirmez votre choix</Text>
                    <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                        <View style={styles.TextInputView}>
                            <TextInput 
                                ref={pin11Ref}
                                keyboardType='number-pad'
                                maxLength={1}
                                style={styles.TextInputText}
                                onChangeText={(pin11) => {
                                        setPin11(pin11);

                                        let linePin1 = pin1+pin2+pin3+pin4;
                                        let linePin2 = pin11+pin22+pin33+pin44;
                                        isDesable(linePin1, linePin2);  
                                        
                                        if (pin11!=='') {
                                            pin22Ref.current.focus();                                      
                                        }
                                }}
                                secureTextEntry={true}
                            />
                        </View>
                        
                        <View style={styles.TextInputView}>
                            <TextInput 
                                ref={pin22Ref}
                                keyboardType='number-pad'
                                maxLength={1}
                                style={styles.TextInputText}
                                onChangeText={(pin22) => {
                                    setPin22(pin22);

                                    let linePin1 = pin1+pin2+pin3+pin4;
                                    let linePin2 = pin11+pin22+pin33+pin44;
                                    isDesable(linePin1, linePin2);  

                                    if (pin22!=='') {
                                        pin33Ref.current.focus(); 
                                    }
                                }}
                                secureTextEntry={true}
                            />
                        </View>

                        <View style={styles.TextInputView}>
                            <TextInput 
                                ref={pin33Ref}
                                keyboardType='number-pad'
                                maxLength={1}
                                style={styles.TextInputText}
                                onChangeText={(pin33) => {
                                    setPin33(pin33);

                                    let linePin1 = pin1+pin2+pin3+pin4;
                                    let linePin2 = pin11+pin22+pin33+pin44;
                                    isDesable(linePin1, linePin2);  

                                    if (pin33!=='') {
                                        pin44Ref.current.focus(); 
                                    }
                                }}
                                secureTextEntry={true} 
                            />
                        </View>
                        
                        <View style={styles.TextInputView}>
                            <TextInput
                                ref={pin44Ref} 
                                keyboardType='number-pad'
                                maxLength={1}
                                style={styles.TextInputText}
                                onChangeText={(pin44) => {
                                    setPin44(pin44);

                                    let linePin1 = pin1+pin2+pin3+pin4;
                                    let linePin2 = pin11+pin22+pin33+pin44;
                                    isDesable(linePin1, linePin2);   
                                }}
                                secureTextEntry={true}
                            />
                        </View>
                        
                    </View>


                </View>
                <View style={{flexDirection:'column', paddingTop:30, alignItems:'center'}}>
                    <TouchableOpacity
                        style={{backgroundColor:desablePin?'#D2D2D2':'#66CDAA',padding:10, borderRadius:5}}
                        disabled ={desablePin}
                        onPress={() => {
                            alert('Création Utilisateur Natt');
                        }}
                     >
                        <Text style={{fontWeight:'bold', fontSize:22, color:'#fff'}}>Je m'inscris</Text>
                    </TouchableOpacity>
                </View>

        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        flexDirection:'column'
    },
    TextInputView: {
        borderBottomWidth: 2,
        width: 50,
        height:50,
        justifyContent: 'center',
        alignItems:'center',
        marginRight:5,
        marginLeft:5
    },
    TextInputText: {
        fontSize: 30,
        width:'100%',
        paddingTop:7,
        paddingLeft:15,
        backgroundColor:'#F9FBFC'
    }
});


export default CodeSecret;
