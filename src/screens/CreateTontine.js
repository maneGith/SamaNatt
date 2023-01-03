import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity,
         StyleSheet, TouchableWithoutFeedback,
        Keyboard, useWindowDimensions, Image, StatusBar } from 'react-native';

import CustomTextInput from '../components/CustomTextInput';
import { RadioButton } from 'react-native-paper';
import CustomSimpleButton from '../components/CustomSimpleButton';

import closeSearch from '../../assets/images/closeSearch.png'
import backScreen from '../../assets/images/backScreen.png'

const CreateTontine = function ({  navigation, userData, tontine, input }) {

   
    const [nom, setNom] = useState('');
    const [montant, setMontant] = useState('');
    const [checked, setChecked] = React.useState('Tour');  
    const [desabled, setDesabled] = useState(true);  
    const [modal, setModal] = useState(false);  

    const pin1Ref = useRef(null);
    const pin2Ref = useRef(null);
    

    const { height, width } = useWindowDimensions();


    const formaterMontant = (montant) => {

        let returnMontant=montant;
        if (returnMontant.length==4){
            returnMontant=returnMontant.substring(0, 1) + ' ' + returnMontant.substring(1);
        } else if (returnMontant.length==5){
            returnMontant=returnMontant.substring(0, 2) + ' ' + returnMontant.substring(2);
        } else if (returnMontant.length==6){
            returnMontant=returnMontant.substring(0, 3) + ' ' + returnMontant.substring(3);
        } else if (returnMontant.length==7){
            returnMontant=returnMontant.substring(0, 1) + ' ' + returnMontant.substring(1, 4) + ' ' + returnMontant.substring(4);
        } else if (returnMontant.length==8){
            returnMontant=returnMontant.substring(0, 2) + ' ' + returnMontant.substring(2, 5) + ' ' + returnMontant.substring(5);
        }
        
        return returnMontant;
    }

    const onPress = () => {
        if (desabled==false) {
            Keyboard.dismiss();
        }
        setModal(true)
        //alert('confirmer');
    }

    const closeModal = () => {
        setModal(false)
       
    }

    const date =  new Date();
    const currentYear = date.getFullYear();
    const currentMonth = date.getMonth() + 1; 
    const today = date.getDate();
    const created_at =today+'-'+currentMonth+'-'+currentYear;


    const tontineData = JSON.stringify({
        type: checked,
        nom: nom.trim(),
        date: created_at,
        user: {
            id: userData.id,
            nom: userData.prenom+" "+userData.nom,
            telephone: userData.telephone
        },
        montant: montant
    })


    const creerTontine = (data) => {
        setModal(false)

       fetch('http://10.0.2.2:3001/tontine', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: data
       }).then((response) => response.json())
            .then((responseJson) => {
                if (responseJson) {
                    //console.log(responseJson)

                    let dataParse= responseJson;
                    //dataParse.user.id=2;


                    //Insertion dans table tontine
                    tontine.unshift(dataParse) 
                    console.log(tontine)


                    //Formatage et Insertion table input
                    let montantData
                    if (dataParse.type.nom=="Tour") {
                        montantData=" - "+ dataParse.type.montant+'F / Adhérent'
                    }else{
                        montantData=' - Variable / Adhérent'
                    }

                   
                    const inputData = {
                        ordre:dataParse.ordre,
                        titre:"Création "+dataParse.type.nom,
                        description:dataParse.nom+montantData,
                        valeur:dataParse.date,
                        user:dataParse.user
                    };

                    input.unshift(inputData) 
                    console.log(input)



                    navigation.navigate('Tontine', {
                        tontine:tontine
                    })
/*
                    let dataParse= JSON.parse(responseJson);
                    tontine.unshift(dataParse) 
                   //console.log(tontine)

                    let montantData
                    if (dataParse.type=="Tour") {
                        montantData=dataParse.tontine.montant+'F/Adhérent'
                    }else{
                        montantData='~'
                    }

                    const inputData = JSON.stringify({
                        type:dataParse.type,
                        desc:dataParse.tontine.nom,
                        date:dataParse.tontine.created_at.replaceAll('-', '/'),
                        montant:montantData
                    });

                    input.unshift(JSON.parse(inputData)) 
                    console.log(input)

                    navigation.navigate('Tontine', {
                        tontine:tontine
                    })
                        */
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }

    return ( 
        <TouchableWithoutFeedback onPress={() => {
            if (desabled==false) {
                Keyboard.dismiss();
            }
        }}>
            <View style={[styles.root]}>

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
                        <View style={{width:70,justifyContent:'center', alignItems:'flex-start' ,paddingLeft:19 , marginTop:15}}> 
                            <TouchableOpacity
                                onPress={()=>{
                                    navigation.navigate('Tontine');
                                }}
                            >
                                <Image 
                                    source={backScreen}  
                                    style={styles.iconBackScreen}
                                    resizeMode="contain"
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={{ justifyContent:'center',  marginTop:15, flex:1 }}>
                            <Text style={{color:'#fff', fontSize:25, fontWeight:'bold'}}>Créer de la Tontine</Text> 
                        </View>
                        

                    </View>         
                                    

                        
                </View>

                <View style={[styles.placeElement, {borderBottomWidth:1, marginTop:80}]}>
                    <Text style={{fontSize:20,  color:'#000', fontWeight:'bold'}}>Type de Tontine</Text>
                    <View style={{flexDirection:"row", width:"100%"}}>
                        <View style={{flexDirection:"row", width:"50%"}}>
                        <View style={{alignItems:"center", justifyContent:"center"}}>
                                <RadioButton
                                    value="Tour" 
                                    status={ checked === 'Tour' ? 'checked' : 'unchecked' } //if the value of checked is Apple, then select this button
                                    onPress={() => {
                                        setChecked('Tour')
                                        if (montant.length>=3 && nom.trim().length>=1) {
                                            setDesabled(false)
                                        }else{
                                            setDesabled(true)
                                        }
                                        //focus
                                        pin1Ref.current.focus(); 
                                       
                                       
                                    }} //when pressed, set the value of the checked Hook to 'Apple'
                                />
                            </View>
                            <View style={{alignItems:"center", justifyContent:"center"}}>
                                <TouchableOpacity
                                    onPress={() => {
                                        setChecked('Tour')
                                        if (montant.length>=3 && nom.trim().length>=1) {
                                            setDesabled(false)
                                        }else{
                                            setDesabled(true)
                                        }
                                        //focus
                                        pin1Ref.current.focus(); 
                                       
                                    }}
                                >
                                    <Text style={{fontSize:20,  color:'#000'}}>Tour</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={{flexDirection:"row", width:"50%"}}>
                        <View style={{alignItems:"center", justifyContent:"center"}}>
                                <RadioButton
                                    value="Epargne"
                                    status={ checked === 'Epargne' ? 'checked' : 'unchecked' }
                                    onPress={() => {
                                        setChecked('Epargne')
                                        if (nom.trim().length>=1) {
                                            setDesabled(false)
                                        }
                                        pin1Ref.current.focus(); 
                                    }}
                                /> 
                            </View>
                            <View style={{alignItems:"center", justifyContent:"center"}}>
                                <TouchableOpacity
                                        onPress={() => {
                                            setChecked('Epargne')
                                            if (nom.trim().length>=1) {
                                                setDesabled(false)
                                            }
                                            pin1Ref.current.focus(); 
                                        }}
                                >
                                    <Text style={{fontSize:20,  color:'#000'}}>Epargne</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            
                <View style={[styles.placeElement, {borderBottomWidth:1}]}>
                    <Text style={{fontSize:20,  color:'#000', fontWeight:'bold'}}>Nom</Text>
                    <CustomTextInput
                        refInput={pin1Ref}
                        onFocus={closeModal}
                        backgroundColor={'#ebebeb'}
                        placeholder={"Nom"}
                        borderRadius={5} 
                        fontColor={'#000'}
                        fontSizeValue={20}
                        value={nom}
                        autoFocus={true}
                        onChangeText={(text) => {
                            let varNom = text.replace(/[^0-9a-zA-Z -]+/ig, "");
                            setNom(varNom);
                            //Activation du bouton Créer
                            if (checked == 'Tour') {
                                if (montant.length>=3 && varNom.trim().length>=1) {
                                    setDesabled(false)
                                }else{
                                    setDesabled(true)
                                }   
                            }else{
                                //alert(7)
                                if (varNom.trim().length>=1) {
                                    setDesabled(false)
                                }else{
                                    setDesabled(true)
                                }   
                            }
                        }}
                        keyboardType={'ascii-capable'}
                    />
                </View>

                {checked === 'Tour' ? 
                    (
                        <View style={[styles.placeElement, {borderBottomWidth:1}]}>
                            <Text style={{fontSize:20,  color:'#000', fontWeight:'bold'}}>Cotisation</Text>
                            <CustomTextInput 
                                refInput={pin2Ref}
                                onFocus={closeModal}
                                backgroundColor={'#ebebeb'}
                                placeholder={"Montant à cotiser"}
                                borderRadius={5} 
                                fontColor={'#000'}
                                fontSizeValue={20}
                                value={montant}
                                autoFocus={(nom.trim().length>=1 && montant.length<3)?true:false}
                                onChangeText={(text) => {
                                    let varMontant = text.replace(/[^0-9]+/ig, "");
                                    if (varMontant.length<=8) {
                                        setMontant(formaterMontant(varMontant)); 
                                        //Activation du bouton Créer
                                        if (checked == 'Tour') {
                                            if (varMontant.length>=3 && nom.length>=1) {
                                                setDesabled(false)
                                            }else{
                                                setDesabled(true)
                                            }   
                                        }
                                    }
                                    
                                }}
                                keyboardType={'number-pad'}
                            />
                        </View>
                    )
                    :
                    (
                        <View style={[styles.placeElement, {borderBottomWidth:1}]}>
                            <Text style={{fontSize:20,  color:'#000', fontWeight:'bold'}}>Cotisation</Text>
                            <Text style={{fontSize:16,  color:'#000', fontStyle:'normal', textAlign:'justify'}}>Le montant à cotiser  pour les tontines-<Text style={{fontWeight:'bold'}}>Epargne</Text> est fixé lors de l'adhésion du membre: vous vous convenez un délai pour la clôture et la remise à tous les adhérents leurs argents épargnés.</Text>
                        </View>
                    )
                }

                <View style={[styles.placeElement, {alignItems:'center', marginTop:10}]}>
                    <Text style={{fontSize:13, fontWeight:'bold', color:'#496859'}}>Frais Natt = 200F / Adhésion</Text>
                </View>

                <View style={styles.placeElement}>
                    <CustomSimpleButton 
                            textBtn={"Créer"}
                            disabled={desabled}
                            fontWeight={"bold"}
                            ftSize={18}
                            onPress={onPress}
                            fgColor={'#fff'}
                    />
                </View>

                


                {modal? 
                    (
                    <View style={{position:'absolute',top:190, backgroundColor:'#fff', 
                                height:height-260, width:width, borderTopLeftRadius:30,
                                 borderTopRightRadius:30, paddingLeft:15, paddingRight:15,
                                 paddingTop:35}}>
                        <View style={{flexDirection:'row'}}>
                            <View style={{flex:1, alignItems:'flex-start', justifyContent:'center'}}>
                                    <Text style={{fontSize:20,  color:'#000', fontWeight:'bold'}}>Confirmer la Création</Text>
                            </View>
                           
                            <View style={{width:30, alignItems:'center', justifyContent:'center'}}>
                                        <TouchableOpacity
                                             onPress={closeModal}
                                        >
                                            <Image 
                                                source={closeSearch}  
                                                style={{width:25, height:30}}
                                                resizeMode="contain"
                                            />
                                        </TouchableOpacity>
                            </View>
                           
                       
                        
                        </View>
                       
                        <View style={{flexDirection:'row', paddingTop:15}}>
                            <View style={{width:'30%', alignItems:'flex-start', justifyContent:'center'}}>
                                <Text style={{fontSize:18,  color:'#999999'}}>Tontine</Text>
                            </View>
                            <View style={{width:'70%', alignItems:'flex-end', justifyContent:'center'}}>
                                <Text style={{fontSize:18,  color:'#000'}}>{checked}</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row', paddingTop:15}}>
                            <View style={{width:'30%', alignItems:'flex-start', justifyContent:'center'}}>
                                <Text style={{fontSize:18,  color:'#999999'}}>Nom</Text>
                            </View>
                            <View style={{width:'70%', alignItems:'flex-end', justifyContent:'center'}}>
                                <Text style={{fontSize:18,  color:'#000'}}>{nom.trim()}</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row', paddingTop:15}}>
                            <View style={{width:'30%', alignItems:'flex-start', justifyContent:'center'}}>
                                <Text style={{fontSize:18,  color:'#999999'}}>Cotisation</Text>
                            </View>
                            <View style={{width:'70%', alignItems:'flex-end', justifyContent:'center'}}>
                                {checked === 'Tour' ? 
                                    (<Text style={{fontSize:18,  color:'#000'}}>{montant} F</Text>):
                                    (<Text style={{fontSize:18,  color:'#000'}}> Elle est fixée  par le membre lors de son adhésion</Text>)
                                }                              
                            </View>
                        </View>
                        <View style={{flexDirection:'row', paddingTop:15}}>
                            <CustomSimpleButton 
                                    textBtn={"Confirmer"}
                                    disabled={desabled}
                                    fontWeight={"bold"}
                                    ftSize={18}
                                    fgColor={'#fff'}
                                    onPress={() => {
                                        creerTontine(tontineData)
                                    }}
                            />
                        </View>
    
                    </View>
                    ):null
                }

                
            </View>
        </TouchableWithoutFeedback>
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

export default CreateTontine;
