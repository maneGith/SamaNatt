import React from 'react';
import {  View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import mannuel from '../../assets/images/depot-argent.png';
import wave from '../../assets/images/wave.png';
import om from '../../assets/images/om.png';


const ListNatt =  ({navigation }) => {
    return (  
        <View>
             
            <View>
            <Image 
                source={mannuel}  
                style={styles.icon}
                resizeMode="contain"
            />

            <Image 
                source={wave}  
                style={styles.icon}
                resizeMode="contain"
            />

            <Image 
                source={om}  
                style={styles.icon}
                resizeMode="contain"
            />
                <Text>List des natts</Text>
            </View>
           
        </View>
    );
}

const styles = StyleSheet.create({
    buttonswitcherSection: {
        flexDirection: 'row',
        //borderBottomWidth: 1,
        backgroundColor: '#66CDAA',
        width:'100%',
        height:40
        
    },
    icon: {
        width:40,
        height:40,
    }
});

export default ListNatt;
