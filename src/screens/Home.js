import React from 'react';
import { 
    SafeAreaView,  
    StatusBar,
    View, 
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    useWindowDimensions,
    Platform ,
    FlatList} from 'react-native';

import cotisation from '../../assets/images/cotisation.png';
import amitie from '../../assets/images/amitie.png';


import menupointille from '../../assets/images/menu-points.png';




const Home =  ({ navigation, onPressedButtonValue, userData, input }) => {
    /* Rafraichissement de l'ecran
    React.useEffect(() => {
        const focusHandler = navigation.addListener('focus', () => {
            alert('Refreshed');
        });
        return focusHandler;
    }, [navigation]);
    */
    const { height, width } = useWindowDimensions();
    return ( 
        <SafeAreaView style={[styles.root]}>
            <StatusBar translucent barStyle="light-content" backgroundColor='#66CDAA'/>
            
            <View style={{height:70, backgroundColor:'#66CDAA', position:'absolute',
                            width: "100%",
                            height: 100, // For all devices, even X, XS Max
                            top: 0,
                            left: 0,
                            zIndex:100,
                            paddingTop:13
                        }}>
                
                <View style={{flexDirection:'row'}}>
                    <View style={{width:'80%',justifyContent:'center', alignItems:'flex-start', paddingTop:20, paddingLeft:15}}> 
                        <Text style={{color:'#fff', fontSize:25, fontWeight:'bold', fontStyle:'italic'}}>Natt</Text>
                    </View>

                    

                    <View style={{width:'20%', justifyContent:'center', paddingLeft:15 , paddingTop:20}}>
                        <TouchableOpacity
                            onPress={()=>{
                                navigation.navigate('Menu');
                            }}
                        >
                            <Image 
                                source={menupointille}  
                                style={styles.iconMenu}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{justifyContent:'center', alignItems:'center'}}>
                    <Text style={{fontSize:20, color:'#fff', fontWeight:'bold', fontStyle:'italic'}}>{onPressedButtonValue}</Text>
                </View>
                
            
            </View>

            <View style={[styles.buttonswitcherSection, {marginTop:Platform.OS==='ios'?50:100}]}>
                
                

                <View style={{width:'50%', alignItems:'center', justifyContent:'center', marginTop:10}}>
                    <TouchableOpacity
                        onPress={()=>{
                            navigation.navigate('Tontine');
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
                        navigation.navigate('Amitie');
                    }}
                    style={{width:'100%', alignItems:'center', justifyContent:'center'}}
                    >
                        <View style={{width:'100%', alignItems:'center', justifyContent:'center'}}>
                            <Image 
                                source={amitie}  
                                style={styles.icon}
                                resizeMode="contain"
                            />
                        </View>
                        <Text style={{fontSize:20, color:'#5f6368', fontWeight:'bold', fontStyle:'italic'}}>Invitations</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{height:10}}></View>

            <View style={{height:Platform.OS=='ios'?height-250:height-245, backgroundColor:'#ebebeb'}}>   
                <FlatList 
                    data={input}           
                    renderItem={({item}) => 
                        //<Text>{item.type}-{item.desc}-{item.date}</Text>
                    <TouchableOpacity style={{marginBottom:15,
                        backgroundColor:item.user.id==userData.id?'#b8cdc3':'#fff',
                        marginLeft:15, marginRight:15,
                        borderRadius: 10
                    }}>
                        <View style={{flexDirection:'row'}}>
                            <View style={{flex:1,alignItems:'flex-start',  paddingTop:10}}>
                                    <Text style={styles.itemType}>{item.titre}</Text>
                            </View>
                            <View style={{width:120, alignItems:'flex-end', paddingTop:17}}>
                                <Text style={styles.itemDate}>{item.valeur}</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <View style={{flex:1, alignItems:'flex-start', paddingLeft:5}}>
                                <Text style={styles.itemDescription}>
                                    {item.description}
                                </Text>
                            </View>
                            <View style={{width:120}}>  
                            </View>
                        </View>
                        <View style={{flexDirection:'row', marginTop:15}}>
                        <View style={{alignItems:'flex-end', flex:1}}>
                          <Text style={styles.itemUser}></Text>
                        </View>
                        <View style={{alignItems:'flex-start', width:120}}>
                          <Text style={styles.itemUser}> 
                            {item.user.id==userData.id?'Vous':
                                item.user.nom
                            }
                          </Text>
                        </View>
                        <View style={{alignItems:'flex-end', width:95}}>
                          <Text style={styles.itemUser}>{item.user.telephone}</Text>
                        </View>
                    </View>
                    </TouchableOpacity>

                    }
                />
            </View>


        </SafeAreaView>
     );
}

const styles = StyleSheet.create({
    root: {
        backgroundColor: '#ebebeb',
        flexDirection:'column',
        width:'100%'
    },
    iconMenu: {
        width:40,
        height:40,
    },
    buttonswitcherSection: { 
        flexDirection: 'row',
        width:'100%',
        height:100,
        backgroundColor:'#fff',
       
        
    },
    icon: {
        width:55,
        height:55,
    },
    itemType: {
        paddingLeft: 10,
        fontSize: 25,
        //fontWeight:'800',
       
        color:'#000000'
      },
      itemDate: {
        paddingRight: 10,
        fontSize: 15,
        color:'#5f6368'
      },
  itemDescription:{
    paddingLeft: 10,
    fontSize: 20,
    color:'#5f6368'
  },
  itemUser:{
    paddingRight: 10,
    fontSize: 13,
    color:'#5f6368',
    fontWeight:'bold'
  }
})

export default Home;
