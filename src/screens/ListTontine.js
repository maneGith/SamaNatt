import React from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const ListTontine =  ({tontine, userData}) => {
    return ( 
        <View style={{marginTop:15}}>
            
            <FlatList 
                data={tontine}           
                renderItem={({item}) => 
                <TouchableOpacity style={{marginBottom:15,
                  backgroundColor:item.user.id==userData.id?'#b8cdc3':'#fff',
                  marginLeft:15, marginRight:15,
                  borderRadius: 10
                }}>
                  <View>
                    <View style={{flexDirection:'row'}}>
                      <View style={{flex:1,alignItems:'flex-start',  paddingTop:10}}>

                      {item.nom.length>16?
                          (
                            <Text style={styles.itemTontine}>
                              {item.nom.substring(0, 16)}...</Text>
                          ):
                          (
                            <Text style={styles.itemTontine}>
                              {item.nom}</Text>
                          )
                      }
                        
                      </View>
                      <View style={{width:120, alignItems:'flex-end', paddingTop:17}}>
                        <Text style={styles.itemDate}>{item.date}</Text>
                      </View>
                    </View>
                    <View style={{alignItems:'flex-start'}}>
                      <Text style={styles.itemDescription}>
                        {item.type.nom=='Tour'?(<Text>
                          {item.type.nom} : {item.type.montant}F / Adhérent</Text>)
                          :
                          item.type.nom+' : Variable / Adhérent'
                        }
                        
                       </Text>
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
                  </View>
                  
                </TouchableOpacity>
              }
            />
        </View>
     );
}

const styles = StyleSheet.create({ 
  itemTontine: {
      paddingLeft: 10,
      fontSize: 25,
      //fontWeight:'800',
      //fontFamily:'notoserif',
     
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
  });

export default ListTontine;
