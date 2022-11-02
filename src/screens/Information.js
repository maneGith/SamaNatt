import React from 'react';
import {
     View, 
     Text, 
     Image, 
     StyleSheet ,
     useWindowDimensions,
    } from 'react-native';

import wave from '../../assets/images/wave.png';
import om from '../../assets/images/om.png';



const Information = () => {

    const {height} = useWindowDimensions();

    return ( 
        
            
            <View> 
                <Text style={{color:'#000', width:'100%', borderColor:'#000', padding:10, fontSize:20, textAlign:'justify'}}>
                    Vous gérez des activités d'auto-financement des groupes de femmes ou d'hommes
                    appelées  <Text style={{fontWeight:'bold', fontStyle: 'italic'}}> Natt</Text>, l'application <Text style={{fontWeight:'bold', fontStyle: 'italic'}}> SamaNatt</Text> vous offre plus de transparence et de flexibilité dans la gestion de ces activités. Elle vous aide à 
                    <Text style={{fontWeight:'bold', fontStyle: 'italic'}}> enregistrer,
                    tirer et  remettre des Natts à leurs bénéficiaires</Text>. 
                    {"\n"} {"\n"}
                    Ainsi,<Text style={{fontWeight:'bold', fontStyle: 'italic'}}> tous les participants seront informés  à temps de l'évolution de leur Natt</Text> .
                    {"\n"} {"\n"}
                    En plus de la fonctionnalité d'enregistrement des Natts par le gestionnaire du Natt, l'application permet aux participants <Text style={{fontWeight:'bold', fontStyle: 'italic'}}>de créditer leurs Natts par Wave
                    et Orange Money </Text> sans nécessité de se déplacer.
                </Text> 

                <View style={[styles.containerMoyensPaiement, {position:'absolute' ,top:Platform.OS === 'ios'?height-200:height-150}]}>
                    
                   

                    <View style={{width:'50%', alignItems:'center'}}>
                        <Image 
                            source={wave}  
                            style={styles.iconWF}
                            resizeMode="contain"
                        />
                    </View>
                    
                    <View style={{width:'50%', alignItems:'center'}}>
                        <Image 
                            source={om}  
                            style={styles.iconOM}
                            resizeMode="contain"
                        />
                    </View>

                </View> 
            </View>
          
           
        
     );
}

const styles = StyleSheet.create({
    rootApp: {
        flex: 1,
        backgroundColor: '#F9FBFC'
    },
    containerMoyensPaiement: {
        flexDirection: 'row',
        width:'100%',
    },
    iconWF: {
        width:47,
        height:47,
    },
    iconOM: {
        width:55,
        height:55,
    },
    iconMannuel: {
        width:50,
        height:50
    }
}); 

export default Information;