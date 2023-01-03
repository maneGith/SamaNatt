import React, { useState, useRef, useEffect } from 'react';
import { 
    SafeAreaView,  
    StatusBar,
    View, 
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    Platform } from 'react-native';

import backScreen from '../../assets/images/backScreen.png'
import addEntity from '../../assets/images/addIcon.png'
import searchIcon from '../../assets/images/searchIcon.png'

import ListTontine from './ListTontine';
import CreateTontine from './CreateTontine';

const Tontine = function ({  navigation, tontine,  userData , input}) {

    return ( 
            <SafeAreaView style={[styles.root]}>

                <StatusBar translucent barStyle="light-content" backgroundColor='#66CDAA'/> 
                <View style={{backgroundColor:'#66CDAA', position:'absolute',
                            width: "100%",
                            height: 60, // For all devices, even X, XS Max
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
                        <View style={{width:150, justifyContent:'center',  marginTop:15}}>
                            <Text style={{color:'#fff', fontSize:25, fontWeight:'bold'}}>Tontines</Text> 
                        </View>
                        <View style={{ justifyContent:'center', flex:1,  marginTop:15, flexDirection:'row'}}>
                            
                            <View style={{width:50, paddingTop:3}}>
                                <TouchableOpacity
                                    onPress={()=>{
                                        navigation.navigate('SearchTontine');
                                    }}
                                >
                                    <Image 
                                        source={searchIcon}  
                                        style={styles.iconSearchElement}
                                        resizeMode="contain"
                                    />
                                </TouchableOpacity>
                            </View>
                            <View>
                                    <TouchableOpacity
                                        onPress={()=>{
                                            navigation.navigate('CreateTontine')
                                        }}
                                    >
                                        <Image 
                                            source={addEntity}  
                                            style={styles.iconAddEntity}
                                            resizeMode="contain"
                                        />
                                    </TouchableOpacity>
                            </View>     
                        </View>

                    </View>         
                                    

                        
                </View>
                <View style={{marginTop:80}}>
                   <ListTontine tontine={tontine}  userData={userData}/>
                </View>
                
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
    }
})

export default Tontine;
