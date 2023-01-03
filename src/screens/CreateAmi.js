import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity,
         StyleSheet, TouchableWithoutFeedback,
        Keyboard, useWindowDimensions, Image, StatusBar } from 'react-native';

        const CreateAmi = function ({  navigation, userData, ami, input }) {

            return ( 
                <View><Text>77</Text></View>
            );

        }

        const styles = StyleSheet.create({
            root: {
                backgroundColor: '#ebebeb',
                flexDirection:'column',
                width:'100%'
            },
            placeElement:{
                paddingTop:5,
                paddingRight:10,
                paddingBottom:5,
                paddingLeft:10
            },iconBackScreen: {
                width:40,
                height:20,
            }
        });
        
        export default CreateAmi;