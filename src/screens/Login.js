import React, { useState } from 'react';
import {
    View ,
    Text,
    StyleSheet,
    Image,
    useWindowDimensions
    } from 'react-native';
import Logo from '../../assets/images/koppar.jpeg'
import CustomTextInput from '../components/CustomTextInput';
import Flag from '../../assets/images/drapeau-senegal.png'
import ClavierNumerique from '../components/ClavierNumerique';

const Login =  () => {

    const [onPressedButtonValue, setOnPressedButtonValue] = useState('');
    
    const {height} = useWindowDimensions();

    return ( 
        <View style={styles.root}>
            <Image
                source={Logo}  
                style={[
                        styles.logo,
                        {height: height * 0.3}
                    ]}
                resizeMode="contain"
            />
            <View>
                <Text style={{fontSize:30, color:'#000'}}>SamaNatt</Text>
            </View>

            <View style={{ alignItems: 'center',paddingTop:10}}>
                <Text style={{fontSize:22,  color:'#000'}}>Pour commencer, tapez le</Text>
                <Text style={{fontSize:22,  color:'#000'}}>numéro de votre téléphone mobile :</Text>
            </View>

            <View style={styles.containerInputPhoneSection}>

                <View style={styles.flagSection}>
                    <Image 
                        source={Flag}  
                        style={styles.iconFlag}
                        resizeMode="contain"
                    />
                </View>

                <View style={styles.indicatorSection}>
                    <Text  style={{fontSize:20, color:'#000'}}>
                        +221
                    </Text>
                </View> 

                <View style={styles.phoneSection}>
                    <CustomTextInput 
                        placeholder="7X XXX XX XX" 
                        fontColor={'#000'}
                        value={onPressedButtonValue} 
                        setValue={setOnPressedButtonValue}
                    
                        showSoftInputOnFocus={false} 
                        autoFocus 
                        fontSizeValue={20}
                    />
                </View>
            </View> 

            <ClavierNumerique 
                    onPressedButtonValue={onPressedButtonValue}
                    ftSize={30}
                    fgColor={'#000'}
                    setOnPressedButtonValue={setOnPressedButtonValue}
                />   

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
        borderBottomWidth: 1,
        borderColor: '#66CDAA',
        paddingHorizontal: 10,
        width:'80%',
        paddingTop:10
    },
    logo: {
        width: '100%',
       maxHeight: 50,
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
        marginLeft:10
        },
    phoneSection:{
        alignItems:'center',
         justifyContent:'center',
          flex: 1, 
          marginLeft: 10
    }
})

export default Login;

