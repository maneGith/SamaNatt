import React, { useEffect } from 'react';
import { FlatList, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import samanatt from '../../assets/images/logo.png';
import wave from '../../assets/images/wave.png';
import om from '../../assets/images/om.png';
import flechehorizM from '../../assets/images/flechehorizM.png';

import addNatt from '../../assets/images/icone-new.png';


const ListNatt =  ({ listTontine, setListTontine }) => {
   

    return (  
        <View style={styles.root}>
            <Text>66</Text>
            <FlatList 
                data={listTontine}
                renderItem={({item}) => <Text style={{color:'#000',fontWeight:'bold',fontSize:16}}>{item.type}</Text>}
            />         
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
