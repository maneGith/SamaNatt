/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React , { useState, useEffect } from 'react';
 import { Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
 import AsyncStorage from '@react-native-async-storage/async-storage';
 
 import Login from './src/screens/Login';
 import Information from './src/screens/Information';


 import Participation from './src/screens/Participation';
 import ListNatt from './src/screens/ListNatt';
 import Invitation from './src/screens/Invitation';
 import Menu from './src/screens/menu';

 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';

 import addNatt from './assets/images/icone-new.png'
 
 const Stack = createNativeStackNavigator();
 
 const App = () => {

  // Verify isConnected value stored
  // Switch screen according to this value
  const [isConnected, setIsConnected] = useState(false);

  
  

   return ( 
    
    <NavigationContainer> 
      {isConnected?(
        
          <Stack.Navigator
          initialRouteName='Participation'
          >

              <Stack.Screen
                name="Participation"
                component={Participation}
                options={{ 
                headerShown:false
                }} 
              />

              <Stack.Screen
                name="ListNatt"
                component={ListNatt}
                options={{ 
                  title: 'Mes Natts',
                  headerTitleAlign: 'left',
                  headerStyle: {
                    backgroundColor: '#66CDAA',
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize:25
                  },
                  headerBackTitle:' ',
                  headerShadowVisible: false,
                  headerRight: ()=>(
                    <TouchableOpacity>
                      <Image 
                        source={addNatt}  
                        style={styles.icon}
                        resizeMode="contain"
                      />
                    </TouchableOpacity>
                      
                  )
                }} 
              />

              <Stack.Screen
                name="Invitation"
                component={Invitation}
                options={{ 
                  title: 'Mes demandes à',
                  headerTitleAlign: 'left',
                  headerStyle: {
                    backgroundColor: '#66CDAA',
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize:25
                  },
                  headerBackTitle:' ',
                  headerShadowVisible: false
                }} 
              />

              <Stack.Screen
                name="Menu"
                options={{ 
                  title: 'Menu',
                  headerTitleAlign: 'left',
                  headerStyle: {
                    backgroundColor: '#66CDAA',
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize:25
                  },
                  headerBackTitle:' ',
                  headerShadowVisible: false
                }} 
              >
                {(props) => <Menu {...props}  setIsConnected={setIsConnected} />}
              </Stack.Screen>

          </Stack.Navigator>

        ):(
          <Stack.Navigator>

            <Stack.Screen
              name="Login"
              options={{headerShown: false}}>
                {(props) => <Login {...props}  setIsConnected={setIsConnected} />}
            </Stack.Screen>
            <Stack.Screen 
              name="Information" 
              component={Information}
              options={{ 
                title: 'Bon à savoir',
                headerStyle: {
                  backgroundColor: '#66CDAA',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize:25
                },
                headerBackTitle:' '
              }} 
            />

        </Stack.Navigator>
          )
      }
    </NavigationContainer>
   );


 };
 

 const styles = StyleSheet.create({
  icon: {
      width:90,
      height:45,
  }
});
 
 
 export default App;
 