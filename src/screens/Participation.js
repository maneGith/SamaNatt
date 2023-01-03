import React from 'react';
import {  
    SafeAreaView,
     View,
      Text, 
      StyleSheet,
       TouchableOpacity,
        Image,
        ScrollView,
        StatusBar,
        Platform,
        useWindowDimensions
     } from 'react-native';


import cotisation from '../../assets/images/cotisation.png';
import invitation from '../../assets/images/invitation.jpeg';
import samanatt from '../../assets/images/logo.png';
import wave from '../../assets/images/wave.png';
import om from '../../assets/images/om.png';
import flecheme from '../../assets/images/fleche-me.png';
import flecheyou from '../../assets/images/fleche-you.png';
import menupoints from '../../assets/images/menu-points.png';




const Participation =  ({ navigation, onPressedButtonValue }) => {

    const {height} = useWindowDimensions();
   

    return ( 
        <SafeAreaView style={styles.root}>
            <StatusBar translucent barStyle="light-content" backgroundColor='#66CDAA'/>

            <View style={{flexDirection:'row', height:70, backgroundColor:'#66CDAA', position:'absolute',
                width: "100%",
                height: 100, // For all devices, even X, XS Max
                top: 0,
                left: 0,zIndex:100
                        }}>
                <View style={{width:'15%', justifyContent:'center', paddingLeft:15 , paddingTop:20}}>
                    <TouchableOpacity
                        onPress={()=>{
                            navigation.navigate('Menu');
                        }}
                    >
                            <Image 
                                source={menupoints}  
                                style={styles.iconMenu}
                                resizeMode="contain"
                            />
                    </TouchableOpacity>
                </View>
               
                <View style={{width:'70%',justifyContent:'center', alignItems:'center', paddingTop:20}}> 
                    <Text style={{color:'#fff', fontSize:22, fontWeight:'bold'}}>({onPressedButtonValue})</Text>
                </View>

                <View style={{width:'15%',justifyContent:'center', alignItems:'flex-end', paddingRight:15, paddingTop:20}}>
                    <Text></Text>
                </View>
            
            </View>
           
       
            <View style={[styles.buttonswitcherSection, {marginTop:Platform.OS==='ios'?50:100}]}>
                
                

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
                        <Text style={{fontSize:20, color:'#5f6368', fontWeight:'bold', fontStyle:'italic'}}>Tontines</Text>
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
                        <Text style={{fontSize:20, color:'#5f6368', fontWeight:'bold', fontStyle:'italic'}}>Invitations</Text>
                    </TouchableOpacity>
                </View>
            </View>
       
            <View style={{height:10}}>
               
            </View>
            
            <View style={{height:Platform.OS=='ios'?height-250:height-245, backgroundColor:'#fff'}}>
                <ScrollView>
                    <View style={{backgroundColor:'#fff'}}>
                
                        <View style={{marginBottom:15}}>
                            <View style={styles.versementNattSectionMontant}>

                                <View style={{width:'30%', alignItems:'flex-start', justifyContent:'center'}}>
                                    <Text 
                                        style={{color:'#000',fontWeight:'bold',fontSize:16}}>10 Jan 2022
                                    </Text>
                                </View>

                                <View style={{width:'20%', alignItems:'center', justifyContent:'center'}}>
                                    <Image 
                                        source={samanatt}  
                                        style={styles.iconManuel}
                                        resizeMode="contain"
                                    />
                                </View>
                                <View style={{width:'50%', alignItems:'flex-end', justifyContent:'center', paddingRight:10}}>
                                        <Text 
                                                style={{color:'#000', fontWeight:'bold',fontSize:16}}>20.000F
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
                                        style={{color:'#000', fontWeight:'bold',fontSize:16}}>10 Jan 2022
                                    </Text>
                                </View>

                                <View style={{width:'20%', alignItems:'center', justifyContent:'center'}}>
                                    <Image 
                                        source={samanatt}  
                                        style={styles.iconManuel}
                                        resizeMode="contain"
                                    />
                                </View>
                                <View style={{width:'50%', alignItems:'flex-end', justifyContent:'center', paddingRight:10}}>
                                        <Text 
                                                style={{color:'#000', fontWeight:'bold',fontSize:16}}>10.000F
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
                                        style={{color:'#000', fontWeight:'bold',fontSize:16}}>10 Fèv 2022
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
                                                style={{color:'#000', fontWeight:'bold',fontSize:16}}>10.000F
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
                                        style={{color:'#000', fontWeight:'bold',fontSize:16}}>10 Fèv 2022
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
                                                style={{color:'#000', fontWeight:'bold',fontSize:16}}>20.000F
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
                                        style={{color:'#000', fontWeight:'bold',fontSize:16}}>10 Mars 2022
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
                                                style={{color:'#000', fontWeight:'bold',fontSize:16}}>20.000F
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
                                        style={{color:'#000', fontWeight:'bold',fontSize:16}}>10 Mars 2022
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
                                                style={{color:'#000', fontWeight:'bold',fontSize:16}}>20.000F
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
                                        style={{color:'#000', fontWeight:'bold',fontSize:16}}>10 Mars 2022
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
                                                style={{color:'#000', fontWeight:'bold',fontSize:16}}>20.000F
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
                                        style={{color:'#000', fontWeight:'bold',fontSize:16}}>10 Mars 2022
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
                                                style={{color:'#000', fontWeight:'bold',fontSize:16}}>20.000F
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
                                        style={{color:'#000', fontWeight:'bold',fontSize:16}}>10 Mars 2022
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
                                                style={{color:'#000', fontWeight:'bold',fontSize:16}}>20.000F
                                        </Text>
                                </View>

                            </View>
                            <View style={styles.descversementNattSectionMontant}>
                                <View style={{width:'50%', alignItems:'flex-start', justifyContent:'center'}}>
                                    <Text style={{color:'#5f6368', fontSize:16, fontWeight:'400'}}>Sunu Natt Scolarite 2023</Text>
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

                
                </ScrollView>
            </View>
       
        </SafeAreaView>
     );
}

const styles = StyleSheet.create({
    root: {
       
        backgroundColor: '#e5e7ec',
        flexDirection:'column'
    },
    StatusBar: {
        backgroundColor: '#66CDAA'
    },
    buttonswitcherSection: { 
        flexDirection: 'row',
        width:'100%',
        height:100,
        backgroundColor:'#fff',
       
        
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
    iconMenu: {
        width:40,
        height:40,
    },
    iconManuel: {
        width:25,
        height:25,
    }
});

export default Participation;

