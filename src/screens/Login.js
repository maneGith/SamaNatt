import React, { useState, useEffect } from 'react';
import {
    View ,
    Text,
    StyleSheet,
    Image,
    useWindowDimensions,
    TouchableOpacity,
    Keyboard,
    Platform
    } from 'react-native';
import Logo from '../../assets/images/logo.png'
import CustomTextInput from '../components/CustomTextInput';
import Flag from '../../assets/images/drapeau-senegal.png'
import ClavierNumerique from '../components/ClavierNumerique';

const Login =  ({ navigation, onPressedButtonValue, setOnPressedButtonValue, setPrenom, setNom, setUserData }) => {

   
    
    const {height} = useWindowDimensions();
   


    return ( 
        <View style={[styles.root, {paddingTop:Platform.OS === 'ios'?50:20}]}>
            <Image
                source={Logo}  
                style={[
                        styles.logo,
                        {height: height * 0.3}
                    ]}
                resizeMode="contain"
            />
            <View>
                <Text style={{fontSize:30, fontWeight:'bold'}}>Natt</Text>
            </View>

           

            <View style={styles.containerInputPhoneSection}>

                

                <View style={styles.phoneSection}>
                    <CustomTextInput 
                        placeholder="7X XXX XX XX" 
                        fontColor={'#000'}
                        value={onPressedButtonValue} 
                        onChangeText={setOnPressedButtonValue}
                       // editable={false}
                        
                        showSoftInputOnFocus={false} 
                        
                        fontSizeValue={25}
                    />
                </View>
            </View> 

            <ClavierNumerique 
                ftSize={30}
                fgColor={'#000'}
                onPressedButtonValue={onPressedButtonValue}
                setOnPressedButtonValue={setOnPressedButtonValue}
                setPrenom={setPrenom}
                setNom={setNom}
                navigation={navigation}
                setUserData={setUserData}
            /> 

            
            <TouchableOpacity 
                style={[styles.infoButton]}
                onPress={() => {
                    navigation.navigate('Information');
                }}
                >
                <Text style={styles.textinfoButton}>Pour en savoir plus, cliquez ici.</Text>
          </TouchableOpacity> 

        </View>
     );
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        backgroundColor: '#F9FBFC'
    },
    containerInputPhoneSection: {
        flexDirection: 'row',
        //borderBottomWidth: 1,
        borderColor: '#66CDAA',
        paddingHorizontal: 10,
        width:'80%',
        paddingTop:10
    },
    logo: {
        width: '100%',
       maxHeight: 80,
       marginBottom:5
    },
    iconFlag: {
        color: '#66CDAA', 
        fontSize: 50,
        width:40,
        height:40,
    },
    flagSection:{
        alignItems:'center',
         justifyContent:'center'
    },
    indicatorSection:{
        alignItems:'center',
        justifyContent:'center',
        marginLeft:5
        },
    phoneSection:{
        alignItems:'center',
        justifyContent:'center',
        flex: 1, 
        marginLeft: 5
    },
    infoButton: {
        width: '100%',
        padding: 11,
        alignItems: 'center',
        justifyContent:'center',
        borderRadius: 5,
        position:'absolute',
        backgroundColor:'#66CDAA',
        bottom:0
    },
    textinfoButton: {
        fontWeight: 'bold',
        color: '#fff',
        fontSize:18
    }
})

export default Login;

