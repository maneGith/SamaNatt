/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React , { useState } from 'react';
 import Login from './src/screens/Login';
 import Information from './src/screens/Information';

 import Participation from './src/screens/Participation';
 import ListNatt from './src/screens/ListNatt';
 import Invitation from './src/screens/Invitation';

 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 
 const Stack = createNativeStackNavigator();
 
 const App = () => {

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
                  title: 'SamaNatt',
                  headerBackVisible:false,
                  headerTitleAlign: 'center',
                  headerStyle: {
                    backgroundColor: '#66CDAA',
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize:25,
                  },
                  headerBackTitle:' ',
                  headerShadowVisible: false
                }} 
              />

              <Stack.Screen
                name="ListNatt"
                component={ListNatt}
                options={{ 
                  title: 'Nattbi',
                  headerTitleAlign: 'center',
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
                name="Invitation"
                component={Invitation}
                options={{ 
                  title: 'Invitation',
                  headerTitleAlign: 'center',
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

          </Stack.Navigator>

        ):(
          <Stack.Navigator>

            <Stack.Screen
              name="Login"
              options={{headerShown: false}}>
                {(props) => <Login {...props} isConnected={isConnected} setIsConnected={setIsConnected} />}
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
 
 
 
 export default App;
 