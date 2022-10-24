import React from 'react';
import {View, Text, StyleSheet , Image, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import iconepart from '../../assets/images/icone-part.png';
import iconemodif from '../../assets/images/icone-modification.png';
import iconedecon from '../../assets/images/icone-deconnexion.png';



const Menu =  ({ navigation, setIsConnected }) => {
    return ( 
        <View style={styles.root}>
            <View style={{height:20,padding:5}}>
            </View>

            <View style={{backgroundColor:'#fff', width:'100%', alignSelf:'center', borderRadius:10, padding:15}}>
                <View style={{marginBottom:40}}>
                    <TouchableOpacity>
                        <View style={{flexDirection:'row'}}>
                            <View style={{alignItems:'flex-start', justifyContent:'center'}}>
                                <Image 
                                    source={iconepart}  
                                    style={styles.icon}
                                    resizeMode="contain"
                                />
                            </View>
                            <View style={{alignItems:'flex-start', justifyContent:'center', paddingLeft:15, flex:1}}>
                                <Text style={{color:'#000', fontSize:18}}>Inviter un ami à rejondre SamaNatt</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{marginBottom:40}}>
                    <TouchableOpacity>
                        <View style={{flexDirection:'row'}}>
                            <View style={{alignItems:'flex-start', justifyContent:'center'}}>
                                <Image 
                                    source={iconemodif}  
                                    style={styles.icon}
                                    resizeMode="contain"
                                />
                            </View>
                            <View style={{alignItems:'flex-start', justifyContent:'center', paddingLeft:15, flex:1}}>
                                <Text style={{color:'#000', fontSize:18}}>Modifiez votre code secret</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{marginBottom:40}}>
                    <TouchableOpacity
                        onPress={()=>{
                            setIsConnected(false);
                        }}
                    >
                        <View style={{flexDirection:'row'}}>
                            <View style={{alignItems:'flex-start', justifyContent:'center'}}>
                                <Image 
                                    source={iconedecon}  
                                    style={styles.icon}
                                    resizeMode="contain"
                                />
                            </View>
                            <View style={{alignItems:'flex-start', justifyContent:'center', paddingLeft:15, flex:1}}>
                                <Text style={{color:'#000', fontSize:18}}>Se déconnecter</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                    
               
                
            </View>
            
        </View>
     );
};

const styles = StyleSheet.create({
    root: {
       
        backgroundColor: '#e5e7ec',
        flexDirection:'column',
        minHeight:500
    },
    icon: {
        width:50,
        height:50,
    }
});

export default Menu;
