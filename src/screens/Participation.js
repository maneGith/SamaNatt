import React from 'react';
import {  SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';


import cotisation from '../../assets/images/cotisation.png';
import invitation from '../../assets/images/invitation.jpeg';
import manuel from '../../assets/images/depot-argent.png';
import wave from '../../assets/images/wave.png';
import om from '../../assets/images/om.png';
import flecheme from '../../assets/images/fleche-me.png';
import flecheyou from '../../assets/images/fleche-you.png';




const Participation =  ({ navigation }) => {
    return ( 
        <SafeAreaView style={styles.root}>
             <View>
            <View style={styles.buttonswitcherSection}>
                
                

                <View style={{width:'50%', alignItems:'center', justifyContent:'center', marginTop:10}}>
                    <TouchableOpacity
                        onPress={()=>{
                            navigation.navigate('ListNatt');
                        }}
                        style={{width:'100%', alignItems:'center', justifyContent:'center'}}
                    >
                        <View style={{width:'100%', alignItems:'center', justifyContent:'center'}}>
                            <Image 
                                source={cotisation}  
                                style={styles.icon}
                                resizeMode="contain"
                            />
                        </View>
                        <Text style={{fontSize:20, color:'#5f6368', fontWeight:'bold'}}>Nattbi</Text>
                    </TouchableOpacity>
                </View>
                
                <View style={{width:'50%', alignItems:'center', justifyContent:'center', marginTop:10,flex:1}}>
                    <TouchableOpacity
                     onPress={()=>{
                        navigation.navigate('Invitation');
                    }}
                    style={{width:'100%', alignItems:'center', justifyContent:'center'}}
                    >
                        <View style={{width:'100%', alignItems:'center', justifyContent:'center'}}>
                            <Image 
                                source={invitation}  
                                style={styles.icon}
                                resizeMode="contain"
                            />
                        </View>
                        <Text style={{fontSize:20, color:'#5f6368', fontWeight:'bold'}}>Invitation</Text>
                    </TouchableOpacity>
                </View>
            </View>
           </View>

            
            

            <View style={{backgroundColor:'#fff', marginTop:15}}>
                
                <View style={{marginBottom:15}}>
                    <View style={styles.versementNattSectionMontant}>

                        <View style={{width:'30%', alignItems:'flex-start', justifyContent:'center'}}>
                            <Text 
                                style={{fontWeight:'bold',fontSize:16}}>10 Jan 2022
                            </Text>
                        </View>

                        <View style={{width:'20%', alignItems:'center', justifyContent:'center'}}>
                            <Image 
                                source={manuel}  
                                style={styles.iconManuel}
                                resizeMode="contain"
                            />
                        </View>
                        <View style={{width:'50%', alignItems:'flex-end', justifyContent:'center', paddingRight:10}}>
                                <Text 
                                        style={{fontWeight:'bold',fontSize:16}}>10.000.000F
                                </Text>
                        </View>

                    </View>
                    <View style={styles.descversementNattSectionMontant}>
                        <View style={{width:'50%', alignItems:'flex-start', justifyContent:'center'}}>
                            <Text style={{color:'#5f6368', fontSize:16, fontWeight:'400'}}>Sunu Natt Tabaski 2023</Text>
                        </View>

                        <View style={{width:'50%', alignItems:'flex-end', justifyContent:'center', paddingRight:10}}>
                            <Image 
                                    source={flecheme}  
                                    style={styles.iconManuel}
                                    resizeMode="contain"
                                />
                        </View>
                    </View>
                </View>

                <View style={{marginBottom:15}}>
                    <View style={styles.versementNattSectionMontant}>

                        <View style={{width:'30%', alignItems:'flex-start', justifyContent:'center'}}>
                            <Text 
                                style={{fontWeight:'bold',fontSize:16}}>10 Jan 2022
                            </Text>
                        </View>

                        <View style={{width:'20%', alignItems:'center', justifyContent:'center'}}>
                            <Image 
                                source={manuel}  
                                style={styles.iconManuel}
                                resizeMode="contain"
                            />
                        </View>
                        <View style={{width:'50%', alignItems:'flex-end', justifyContent:'center', paddingRight:10}}>
                                <Text 
                                        style={{fontWeight:'bold',fontSize:16}}>10.000F
                                </Text>
                        </View>

                    </View>
                    <View style={styles.descversementNattSectionMontant}>
                        <View style={{width:'50%', alignItems:'flex-start', justifyContent:'center'}}>
                            <Text style={{color:'#5f6368', fontSize:16, fontWeight:'400'}}>Sunu Natt Korité 2023</Text>
                        </View>

                        <View style={{width:'50%', alignItems:'flex-end', justifyContent:'center', paddingRight:10}}>
                            <Image 
                                    source={flecheyou}  
                                    style={styles.iconManuel}
                                    resizeMode="contain"
                                />
                        </View>
                    </View>
                </View>

                <View style={{marginBottom:15}}>
                    <View style={styles.versementNattSectionMontant}>

                        <View style={{width:'30%', alignItems:'flex-start', justifyContent:'center'}}>
                            <Text 
                                style={{fontWeight:'bold',fontSize:16}}>10 Fèv 2022
                            </Text>
                        </View>

                        <View style={{width:'20%', alignItems:'center', justifyContent:'center'}}>
                            <Image 
                                source={om}  
                                style={styles.iconManuel}
                                resizeMode="contain"
                            />
                        </View>
                        <View style={{width:'50%', alignItems:'flex-end', justifyContent:'center', paddingRight:10}}>
                                <Text 
                                        style={{fontWeight:'bold',fontSize:16}}>10.000F
                                </Text>
                        </View>

                    </View>
                    <View style={styles.descversementNattSectionMontant}>
                        <View style={{width:'50%', alignItems:'flex-start', justifyContent:'center'}}>
                            <Text style={{color:'#5f6368', fontSize:16, fontWeight:'400'}}>Sunu Natt Korité 2023</Text>
                        </View>

                        <View style={{width:'50%', alignItems:'flex-end', justifyContent:'center', paddingRight:10}}>
                            <Image 
                                    source={flecheyou}  
                                    style={styles.iconManuel}
                                    resizeMode="contain"
                                />
                        </View>
                    </View>
                </View>

                <View style={{marginBottom:15}}>
                    <View style={styles.versementNattSectionMontant}>

                        <View style={{width:'30%', alignItems:'flex-start', justifyContent:'center'}}>
                            <Text 
                                style={{fontWeight:'bold',fontSize:16}}>10 Fèv 2022
                            </Text>
                        </View>

                        <View style={{width:'20%', alignItems:'center', justifyContent:'center'}}>
                            <Image 
                                source={wave}  
                                style={styles.iconManuel}
                                resizeMode="contain"
                            />
                        </View>
                        <View style={{width:'50%', alignItems:'flex-end', justifyContent:'center', paddingRight:10}}>
                                <Text 
                                        style={{fontWeight:'bold',fontSize:16}}>20.000F
                                </Text>
                        </View>

                    </View>
                    <View style={styles.descversementNattSectionMontant}>
                        <View style={{width:'50%', alignItems:'flex-start', justifyContent:'center'}}>
                            <Text style={{color:'#5f6368', fontSize:16, fontWeight:'400'}}>Sunu Natt Tabaski 2023</Text>
                        </View>

                        <View style={{width:'50%', alignItems:'flex-end', justifyContent:'center', paddingRight:10}}>
                            <Image 
                                    source={flecheme}  
                                    style={styles.iconManuel}
                                    resizeMode="contain"
                                />
                        </View>
                    </View>
                </View>

                <View style={{marginBottom:15}}>
                    <View style={styles.versementNattSectionMontant}>

                        <View style={{width:'30%', alignItems:'flex-start', justifyContent:'center'}}>
                            <Text 
                                style={{fontWeight:'bold',fontSize:16}}>10 Mars 2022
                            </Text>
                        </View>

                        <View style={{width:'20%', alignItems:'center', justifyContent:'center'}}>
                            <Image 
                                source={wave}  
                                style={styles.iconManuel}
                                resizeMode="contain"
                            />
                        </View>
                        <View style={{width:'50%', alignItems:'flex-end', justifyContent:'center', paddingRight:10}}>
                                <Text 
                                        style={{fontWeight:'bold',fontSize:16}}>20.000F
                                </Text>
                        </View>

                    </View>
                    <View style={styles.descversementNattSectionMontant}>
                        <View style={{width:'50%', alignItems:'flex-start', justifyContent:'center'}}>
                            <Text style={{color:'#5f6368', fontSize:16, fontWeight:'400'}}>Sunu Natt Tabaski 2023</Text>
                        </View>

                        <View style={{width:'50%', alignItems:'flex-end', justifyContent:'center', paddingRight:10}}>
                            <Image 
                                    source={flecheme}  
                                    style={styles.iconManuel}
                                    resizeMode="contain"
                                />
                        </View>
                    </View>
                </View>

            </View>
           
        </SafeAreaView>
     );
}

const styles = StyleSheet.create({
    root: {
       
        backgroundColor: '#e5e7ec',
        flexDirection:'column'
    },
    buttonswitcherSection: {
        flexDirection: 'row',
        width:'100%',
        height:100,
        backgroundColor:'#fff'
        
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
        width:25,
        height:25,
    }
});

export default Participation;

