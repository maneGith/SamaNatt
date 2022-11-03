import React from 'react';
import { View,
         Text,
         TouchableOpacity,
         Image,
         StyleSheet } from 'react-native';
import CustomTextInput from '../components/CustomTextInput';
import buttonFw from '../../assets/images/step-fw-a.jpeg';


const Inscription =  ({ navigation, prenom, setPrenom, nom, setNom }) => {
    
    //Initialisons les Prenom et Nom
    const controlePrenomNom =(prenom, nom) => {
        if( prenom.trim()=='' && nom.trim()=='' ){
            alert("Le Prenom et le Nom sont obligatoires");
        } else if(prenom.trim()==''){
            alert("Le Prenom est obligatoire");
        } else if(nom.trim()==''){
            alert("Le Nom est obligatoire");
        }else{
            navigation.navigate('CodeSecret');
        }
    };

    return (  
        <View style={styles.root}>
           
            <View style={{padding:10}}>
                <Text>Prénom</Text>
                <CustomTextInput
                    backgroundColor={'#fff'}
                    placeholder={'Prénom'}
                    borderRadius={5} 
                    height={40}
                    autoFocus={true}
                    onChangeText={setPrenom}
                    keyboardType={'ascii-capable'}
                 />
            </View>

            <View style={{padding:10}}>
                <Text>Nom</Text>
                <CustomTextInput 
                    backgroundColor={'#fff'}
                    placeholder={'Nom'}
                    borderRadius={5} 
                    height={40}
                    onChangeText={setNom}
                    keyboardType={'ascii-capable'}
                />
            </View>
            <View style={{paddingRight:10, paddingBottom:10, alignItems:'flex-end'}}>
               <TouchableOpacity
               onPress={() => {
                controlePrenomNom(prenom, nom);
               }}
               >
                <Image 
                        source={buttonFw}  
                        style={styles.iconImg}
                        resizeMode="contain"
                />        
               </TouchableOpacity> 
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        backgroundColor: '#e5e7ec',
        flexDirection:'column'
    },
    iconImg: {
        color: '#66CDAA', 
        fontSize: 50,
        width:40,
        height:40
    }
});

export default Inscription;
