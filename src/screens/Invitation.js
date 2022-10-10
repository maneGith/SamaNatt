import React from 'react';
import {  View, Text, StyleSheet, TouchableOpacity } from 'react-native';


const Invitation =  ({ navigation }) => {
    return (  
        <View>
            
            <View>
                <Text>Invitations</Text>
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
});


export default Invitation;
