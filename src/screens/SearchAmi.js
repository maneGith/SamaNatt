import React, { useState } from 'react';
import { 
    SafeAreaView,  
    StatusBar,
    View, 
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    useWindowDimensions,
    Platform } from 'react-native';

import backScreen from '../../assets/images/backScreen.png'
import closeSearch from '../../assets/images/closeSearch.png'
import CustomTextInput from '../components/CustomTextInput';

const SearchAmi = function ({ navigation }) {
    const [searchValue, setSearchValue] = useState('')
   // const [stateClose, setStateClose] = useState(fls)

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
                            <View style={{width:70,justifyContent:'center', alignItems:'flex-start' ,paddingLeft:19, marginTop:15 }}> 
                                <TouchableOpacity
                                    onPress={()=>{
                                        navigation.navigate('Ami');
                                    }}
                                >
                                    <Image 
                                        source={backScreen}  
                                        style={styles.iconBackScreen}
                                        resizeMode="contain"
                                    />
                                </TouchableOpacity>
                            </View>
                            
                            <View style={{ justifyContent:'center', flex:1, marginTop:15, flexDirection:'row', backgroundColor:'#fff'}}>
                                <View style={{flex:1}}>
                                    <CustomTextInput 
                                        placeholder={"Ami..."}
                                        value={searchValue}
                                        fontSizeValue={16}
                                        onChangeText={setSearchValue}
                                        width={"100%"}
                                        backgroundColor={"#fff"}  
                                    />
                                </View>
                                {searchValue.length>0 ?
                                    (<View style={{width:30, alignItems:'center', justifyContent:'center'}}>
                                        <TouchableOpacity
                                            onPress={()=>{
                                               setSearchValue('')
                                            }}
                                        >
                                            <Image 
                                                source={closeSearch}  
                                                style={{width:28, height:28}}
                                                resizeMode="contain"
                                            />
                                        </TouchableOpacity>
                                    </View>)
                                    :''
                                }
  
                            </View>
                        </View>
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
    }
})

export default SearchAmi;
