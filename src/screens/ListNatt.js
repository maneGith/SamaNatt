import React from 'react';
import {  View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import samanatt from '../../assets/images/logo.png';
import wave from '../../assets/images/wave.png';
import om from '../../assets/images/om.png';
import flechehorizM from '../../assets/images/flechehorizM.png';


const ListNatt =  ({navigation }) => {
    return (  
        <View style={styles.root}>
            
            <View style={{backgroundColor:'#fff', marginTop:15}}>
                <View style={{marginBottom:15}}>
                        <View style={styles.versementNattSectionMontant}>

                            <View style={{width:'80%', alignItems:'flex-start', justifyContent:'center'}}>
                                <Text 
                                    style={{color:'#000',fontWeight:'bold',fontSize:16}}>
                                       Sunu Natt Tabaski 2023
                                </Text>
                            </View>

                            <View style={{width:'20%', alignItems:'flex-end', justifyContent:'center'}}>
                                <Text></Text>
                            </View>
                            

                        </View>
                        <View style={styles.descversementNattSectionMontant}>
                            <View style={{width:'80%', alignItems:'flex-start', justifyContent:'center'}}>
                                <Text style={{color:'#5f6368', fontSize:16, fontWeight:'400'}}>
                                    <Text>Créé par </Text>
                                    <Text style={{color:'#5f6368', fontSize:16, fontWeight:'bold'}}>
                                        Mouhammad Moustapha Latif CONTE.

                                    </Text>
                                    <Text>   Téléphone : </Text>
                                    <Text style={{color:'#5f6368', fontSize:16, fontWeight:'bold'}}>
                                        77 743 74 44.
                                    </Text> {"\n"}
                                    <Text style={{color:'#5f6368', fontSize:16, fontWeight:'400'}}>
                                        remise de fonds par tour - 1000 participants
                                    </Text>
                                </Text>
                                
                            </View>

                            <View style={{width:'20%', alignItems:'flex-end', justifyContent:'center', paddingRight:10}}>
                                <Image 
                                        source={flechehorizM}  
                                        style={styles.iconManuel}
                                        resizeMode="contain"
                                    />
                            </View>
                        </View>
                        
                    </View>
                    <View style={{marginBottom:15}}>
                        <View style={styles.versementNattSectionMontant}>

                            <View style={{width:'80%', alignItems:'flex-start', justifyContent:'center'}}>
                                <Text 
                                    style={{color:'#000',fontWeight:'bold',fontSize:16}}>
                                       Sunu Natt Tabaski 2023
                                </Text>
                            </View>

                            <View style={{width:'20%', alignItems:'flex-end', justifyContent:'center'}}>
                                <Text></Text>
                            </View>
                            

                        </View>
                        <View style={styles.descversementNattSectionMontant}>
                            <View style={{width:'80%', alignItems:'flex-start', justifyContent:'center'}}>
                                <Text style={{color:'#5f6368', fontSize:16, fontWeight:'400'}}>
                                    <Text>Créé par </Text>
                                    <Text style={{color:'#5f6368', fontSize:16, fontWeight:'bold'}}>
                                        Mouhammad Moustapha Latif CONTE.

                                    </Text>
                                    <Text>   Téléphone : </Text>
                                    <Text style={{color:'#5f6368', fontSize:16, fontWeight:'bold'}}>
                                        77 743 74 44.
                                    </Text> {"\n"}
                                    <Text style={{color:'#5f6368', fontSize:16, fontWeight:'400'}}>
                                        remise de fonds par tour - 1000 participants
                                    </Text>
                                </Text>
                                
                            </View>

                            <View style={{width:'20%', alignItems:'flex-end', justifyContent:'center', paddingRight:10}}>
                                <Image 
                                        source={flechehorizM}  
                                        style={styles.iconManuel}
                                        resizeMode="contain"
                                    />
                            </View>
                        </View>
                        
                    </View>
            </View>

            
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
       
        backgroundColor: '#e5e7ec',
        flexDirection:'column'
    },
    versementNattSectionMontant: {
        flexDirection: 'row',
        width:'100%',
        padding:5
    },
    descversementNattSectionMontant: {
        flexDirection: 'row',
        width:'100%',
        marginBottom:10,
        paddingLeft:5,
        paddingRight:5
    },
    icon: {
        width:55,
        height:55,
    },
    iconManuel: {
        width:35,
        height:30,
    }
});

export default ListNatt;
