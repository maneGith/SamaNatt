import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Img from '../../assets/images/backsp.png';
import ButtonTestValidationCodeSecret from '../components/ButtonTestValidationCodeSecret';

const CodeForLogin =  ({ navigation, userData }) => {
    const [pin1, setPin1] = useState('');
    const [pin2, setPin2] = useState('');
    const [pin3, setPin3] = useState('');
    const [pin4, setPin4] = useState('');


    return ( 
        <View style={styles.root}>
             <View style={{alignItems:'center', paddingTop:20}}>
                <Text style={{fontSize:22, color:'#000'}}>Entrez votre Code Secret</Text>
            </View>
            <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', paddingTop:15}}>
                
                <View style={styles.TextInputView}>
                    <TextInput 
                            maxLength={1}
                            style={styles.TextInputText}
                            value={pin1}
                            onChangeText={(pin1)=>{
                                setPin1(pin1);
                            }}
                            editable={false}
                           secureTextEntry={true}
                    />
                </View>

                <View style={styles.TextInputView}>
                    <TextInput 
                            maxLength={1}
                            style={styles.TextInputText}
                            value={pin2}
                            onChangeText={(pin2)=>{
                                setPin2(pin2);
                            }}
                            editable={false}
                            secureTextEntry={true}
                    />
                </View>

                <View style={styles.TextInputView}>
                    <TextInput 
                            maxLength={1}
                            style={styles.TextInputText}
                            value={pin3}
                            onChangeText={(pin3)=>{
                                setPin3(pin3);
                            }}
                            editable={false}
                            secureTextEntry={true}
                    />
                </View>

                <View style={styles.TextInputView}>
                    <TextInput 
                            maxLength={1}
                            style={styles.TextInputText}
                            value={pin4}
                            
                            editable={false}
                            secureTextEntry={true}
                    />
                </View>

            </View>
            <View style={{ marginTop:15, width:'80%'}}>
                <View style={{flexDirection: 'row'}}>
                    <View style={{width: '33%', alignItems: 'center'}}>
                        <ButtonTestValidationCodeSecret 
                        pin1={pin1}
                        setPin1={setPin1}
                        pin2={pin2}
                        setPin2={setPin2}
                        pin3={pin3}
                        setPin3={setPin3}
                        pin4={pin4}
                        setPin4={setPin4}
                        value="1"
                        userData={userData}
                        />
                    </View>
                    <View style={{width: '34%', alignItems: 'center'}}>
                    <ButtonTestValidationCodeSecret 
                        pin1={pin1}
                        setPin1={setPin1}
                        pin2={pin2}
                        setPin2={setPin2}
                        pin3={pin3}
                        setPin3={setPin3}
                        pin4={pin4}
                        setPin4={setPin4}
                        value="2"
                        userData={userData}
                        />
                    </View>
                    <View style={{width: '33%', alignItems: 'center'}}>
                    <ButtonTestValidationCodeSecret 
                        pin1={pin1}
                        setPin1={setPin1}
                        pin2={pin2}
                        setPin2={setPin2}
                        pin3={pin3}
                        setPin3={setPin3}
                        pin4={pin4}
                        setPin4={setPin4}
                        value="3"
                        userData={userData}
                        />
                    </View>
                </View>

                <View style={{flexDirection: 'row'}}>
                    <View style={{width: '33%', alignItems: 'center'}}>
                        <ButtonTestValidationCodeSecret 
                            pin1={pin1}
                            setPin1={setPin1}
                            pin2={pin2}
                            setPin2={setPin2}
                            pin3={pin3}
                            setPin3={setPin3}
                            pin4={pin4}
                            setPin4={setPin4}
                            value="4"
                            userData={userData}
                        />
                    </View>
                    <View style={{width: '34%', alignItems: 'center'}}>
                        <ButtonTestValidationCodeSecret 
                            pin1={pin1}
                            setPin1={setPin1}
                            pin2={pin2}
                            setPin2={setPin2}
                            pin3={pin3}
                            setPin3={setPin3}
                            pin4={pin4}
                            setPin4={setPin4}
                            value="5"
                            userData={userData}
                        />
                    </View>
                    <View style={{width: '33%', alignItems: 'center'}}>
                    <ButtonTestValidationCodeSecret 
                        pin1={pin1}
                        setPin1={setPin1}
                        pin2={pin2}
                        setPin2={setPin2}
                        pin3={pin3}
                        setPin3={setPin3}
                        pin4={pin4}
                        setPin4={setPin4}
                        value="6"
                        userData={userData}
                        />
                    </View>
                </View>

                <View style={{flexDirection: 'row'}}>
                    <View style={{width: '33%', alignItems: 'center'}}>
                        <ButtonTestValidationCodeSecret 
                            pin1={pin1}
                            setPin1={setPin1}
                            pin2={pin2}
                            setPin2={setPin2}
                            pin3={pin3}
                            setPin3={setPin3}
                            pin4={pin4}
                            setPin4={setPin4}
                            value="7"
                            userData={userData}
                        />
                    </View>
                    <View style={{width: '34%', alignItems: 'center'}}>
                    <ButtonTestValidationCodeSecret 
                        pin1={pin1}
                        setPin1={setPin1}
                        pin2={pin2}
                        setPin2={setPin2}
                        pin3={pin3}
                        setPin3={setPin3}
                        pin4={pin4}
                        setPin4={setPin4}
                        value="8"
                        userData={userData}
                        />
                    </View>
                    <View style={{width: '33%', alignItems: 'center'}}>
                            <ButtonTestValidationCodeSecret 
                            pin1={pin1}
                            setPin1={setPin1}
                            pin2={pin2}
                            setPin2={setPin2}
                            pin3={pin3}
                            setPin3={setPin3}
                            pin4={pin4}
                            setPin4={setPin4}
                            value="9"
                            userData={userData}
                            />
                    </View>
                </View>

                <View style={{flexDirection: 'row'}}>
                    <View style={{width: '33%', alignItems: 'center'}}>
                        <TouchableOpacity style={styles.conButton}>
                            <Text style={[styles.TextButton, {fontStyle:'italic'}]}>?</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{width: '34%', alignItems: 'center'}}>
                    <ButtonTestValidationCodeSecret 
                        pin1={pin1}
                        setPin1={setPin1}
                        pin2={pin2}
                        setPin2={setPin2}
                        pin3={pin3}
                        setPin3={setPin3}
                        pin4={pin4}
                        setPin4={setPin4}
                        value="0"
                        userData={userData}
                        />
                    </View>
                    <View style={{width: '33%', alignItems: 'center'}}>
                        <TouchableOpacity 
                            style={styles.conButton}
                            onPress={() => {
                                let pin =pin1+pin2+pin3+pin4;
                                if (pin.length>3) {
                                    setPin4('')
                                }else if(pin.length>2){
                                    setPin3('')
                                }else if(pin.length>1){
                                    setPin2('')
                                }else {
                                    setPin1('')
                                }
                                
                            }}
                        >
                            <Image 
                                source={Img}  
                                style={styles.iconImg}
                                resizeMode="contain"
                            />          
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            
        </View>
     );
}

const styles = StyleSheet.create({
    root: {
        flexDirection:'column',
        alignItems:'center',
        backgroundColor: '#F9FBFC'
    },
    TextInputView: {
       // borderBottomWidth: 2,
        width: 50,
        height:50,
        justifyContent: 'center',
        alignItems:'center',
        marginRight:5,
        marginLeft:5
    },
    TextInputText: {
        fontSize: 30,
        fontWeight:'bold',
        width:'100%',
        paddingTop:7,
        paddingLeft:16,
        paddingBottom:4,
        backgroundColor:'#e5e7ec'
    },
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
    },
    iconImg: {
      
        fontSize: 50,
        width:40,
        height:40
    }
})

export default CodeForLogin;

