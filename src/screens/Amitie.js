import React, { useState, useRef, useEffect } from 'react';
import { 
    SafeAreaView,  
    StatusBar,
    View, 
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    Platform, useWindowDimensions } from 'react-native';

import backScreen from '../../assets/images/backScreen.png'
import addEntity from '../../assets/images/addIcon.png'
import amis from '../../assets/images/amis.png'
import CustomTextInput from '../components/CustomTextInput';
import CustomSimpleButton from '../components/CustomSimpleButton';
import closeSearch from '../../assets/images/closeSearch.png'

const Amitie =  ({ navigation, ami,  userData , input }) => {
    
    const [modal, setModal] = useState(false);  
    const { height, width } = useWindowDimensions();

    return (  
        <SafeAreaView style={[styles.root, { minHeight:height}]}>

                <StatusBar translucent barStyle="light-content" backgroundColor='#66CDAA'/> 
                <View style={{backgroundColor:'#66CDAA', position:'absolute',
                            width: "100%",
                            height: 77, // For all devices, even X, XS Max
                            top: 0,
                            left: 0,
                            zIndex:100,
                            marginTop:20
                    }}>
                       
                    <View style={{flexDirection:'row'}}>
                        <View style={{width:70,justifyContent:'center', alignItems:'flex-start' ,paddingLeft:19 , marginTop:15}}> 
                            <TouchableOpacity
                                onPress={()=>{
                                    navigation.navigate('Home', {
                                        input:input
                                    });
                                }}
                            >
                                <Image 
                                    source={backScreen}  
                                    style={styles.iconBackScreen}
                                    resizeMode="contain"
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={{flex:1, justifyContent:'center',  marginTop:15}}>
                            <Text style={{color:'#fff', fontSize:25, fontWeight:'bold'}}>Invitations</Text> 
                        </View>

                    </View>                        
                </View>
                

                <View style={[styles.buttonswitcherSection, {backgroundColor:modal?'#ebebeb':'#fff',marginTop:Platform.OS==='ios'?50:100}]}>
                    <View style={{width:'50%', alignItems:'center', justifyContent:'center', marginTop:10}}>
                        <TouchableOpacity
                            onPress={()=>{
                                navigation.navigate('Amitie');
                            }}
                            style={{width:'100%', alignItems:'center', justifyContent:'center'}}
                        >
                            <View style={{width:'100%', alignItems:'center', justifyContent:'center'}}>
                                <Image 
                                    source={amis}  
                                    style={styles.icon}
                                    resizeMode="contain"
                                />
                            </View>
                            <Text style={{fontSize:20, color:'#5f6368', fontWeight:'bold', fontStyle:'italic'}}>Amis</Text>
                        </TouchableOpacity>
                    </View>
                    
                    <View style={{width:'50%', alignItems:'center', justifyContent:'center', marginTop:10,flex:1}}>
                        <TouchableOpacity
                        onPress={()=>{
                            setModal(true)
                        }}
                        style={{width:'100%', alignItems:'center', justifyContent:'center'}}
                        >
                            <View style={{width:'100%', alignItems:'center', justifyContent:'center'}}>
                                <Image 
                                    source={addEntity}  
                                    style={styles.icon}
                                    resizeMode="contain"
                                />
                            </View>
                            <Text style={{fontSize:20, color:'#5f6368', fontWeight:'bold', fontStyle:'italic'}}>Inviter</Text>
                        </TouchableOpacity>
                    </View>
                </View> 

                {modal? 
                (<View style={{position:'absolute', top:100, zIndex:200, height:200,backgroundColor:'#fff', width:'95%', alignSelf:'center', borderRadius:10, marginTop:10}}>
                           
                           <View style={[{flexDirection:'row'},  styles.placeElement]}>
                                <View style={{flex:1, alignItems:'flex-start', justifyContent:'center'}}>
                                        <Text style={{fontSize:20,  color:'#000', fontWeight:'bold'}}>Inviter un ami</Text>
                                </View>
                            
                                <View style={{width:30, alignItems:'center', justifyContent:'center'}}>
                                            <TouchableOpacity
                                               onPress={()=>{
                                                setModal(false)
                                            }}
                                            >
                                                <Image 
                                                    source={closeSearch}  
                                                    style={{width:25, height:25}}
                                                    resizeMode="contain"
                                                />
                                            </TouchableOpacity>
                                </View>
                            </View>
                           <View style={[styles.placeElement]}>
                                <Text style={{fontSize:20,  color:'#000', fontWeight:'bold'}}>Téléphone</Text>
                                <CustomTextInput 
                                    backgroundColor={'#ebebeb'}
                                    placeholder={"7X XXX XX XX"}
                                    borderRadius={5} 
                                    fontColor={'#000'}
                                    fontSizeValue={20}
                                    keyboardType={'number-pad'}
                                    autoFocus={true}
                                />
                            </View>
                            <View style={styles.placeElement}>
                                <CustomSimpleButton 
                                    textBtn={"Inviter"}
                                    fontWeight={"bold"}
                                    disabled={true}
                                    ftSize={18}
                                    fgColor={'#fff'}
                                    
                                />      
                            </View>
                </View>):null
                }

            </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    root: {
        backgroundColor: '#ebebeb',
        flexDirection:'column',
        width:'100%'
    },iconBackScreen: {
        width:40,
        height:20,
    },iconAddEntity: {
        width:40,
        height:32,
    },
    iconSearchElement: {
        width:35,
        height:30,
    },
    icon: {
        width:55,
        height:55,
    },buttonswitcherSection: { 
        flexDirection: 'row',
        width:'100%',
        height:100,
       
       
        
    },
    placeElement:{
        paddingTop:5,
        paddingRight:10,
        paddingBottom:5,
        paddingLeft:10
    }
});


export default Amitie;
