/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React , { useState, useEffect } from 'react';
 import { 
        Image,
        StyleSheet,
        TouchableOpacity,
        View,
        ActivityIndicator } from 'react-native';
 import AsyncStorage from '@react-native-async-storage/async-storage';
 
 import Login from './src/screens/Login';
 import Information from './src/screens/Information';


 import Participation from './src/screens/Participation';
 import ListNatt from './src/screens/ListNatt';
 import Invitation from './src/screens/Invitation';
 import Menu from './src/screens/menu';
 import Inscription from './src/screens/Inscription';

 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import { AuthContext } from './src/components/Context';
 import addNatt from './assets/images/icone-new.png'
 
 const Stack = createNativeStackNavigator();


 
 const App = () => {

  // Verify isConnected value stored
  // Switch screen according to this value
  const [isConnected, setIsConnected] = useState(false);
  const [onPressedButtonValue, setOnPressedButtonValue] = useState('');
  //const [isLoading, setIsLoading] = React.useState(false);
 //const [userToken, setUserToken] = React.useState(null);
 const initialLoginState = {
  isLoading: true,
  userPhone: null,
  userToken: null

 }

 const loginreducer = (prevState, action) => {
    switch( action.type ){
      case 'RESTORE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'SIGN_IN':
        return {
          ...prevState,
          userPhone: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'SIGN_OUT':
        return {
          ...prevState,
          userPhone: null,
          userToken: null,
          isLoading: false,
        };
    }
 }

 const [state, dispatch] = React.useReducer(loginreducer, initialLoginState);

  const authContext = React.useMemo(() => ({
    signIn: async(userPhone) => {
        let userToken
        userToken = null;
        try {
          //From Data Base
          userToken =   'dummy-auth-token';

          await AsyncStorage.setItem('userToken', userToken);
          await AsyncStorage.setItem('userPhone', userPhone);
        } catch (error) {
          console.log(error);
        }
        dispatch({ type: 'SIGN_IN', id: userPhone, token: userToken });
    },
    signOut: async() => {
      try {
        await AsyncStorage.removeItem('userToken');
        await AsyncStorage.removeItem('userPhone');
        setOnPressedButtonValue('');
      } catch (error) {
        console.log(error);
      }
      dispatch({ type: 'SIGN_OUT' });
    }
  }), []);
  
  useEffect(() => {
    setTimeout(async() => {
      let userToken;
      try {
        userToken = await AsyncStorage.getItem('userToken');
        userPhone = await AsyncStorage.getItem('userPhone');
        if (userPhone==null){
          setOnPressedButtonValue('');
        }else{
          setOnPressedButtonValue(userPhone);
        }
      } catch (error) {
        console.log(error);
      }
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    }, 1000);
  }, []);

 
  if(state.isLoading) {
    return (
      <View style={{flex:1, justifyContent:"center", alignItems:'center'}}>
        <ActivityIndicator size="large" />
      </View>
    )
  };


  

   return ( 
      <AuthContext.Provider value={authContext}>
        <NavigationContainer> 
          
          {state.userToken == null?(
            
          <Stack.Navigator>
            <Stack.Screen
              name="Login"
              options={{headerShown: false}}>
                {(props) => <Login {...props}  onPressedButtonValue= {onPressedButtonValue} setOnPressedButtonValue={setOnPressedButtonValue} setIsConnected={setIsConnected} />}
            </Stack.Screen>
            <Stack.Screen 
              name="Information" 
              component={Information}
              options={{ 
                title: 'Information',
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
            <Stack.Screen 
              name="Inscription" 
              component={Inscription}
              options={{ 
                title: 'Inscription',
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

            
            ):(
            <Stack.Navigator
            initialRouteName='Participation'
            >

                <Stack.Screen
                  name="Participation"
                  options={{ 
                  headerShown:false
                  }} >
                        {(props) => <Participation {...props}  onPressedButtonValue= {onPressedButtonValue} />}
                </Stack.Screen>


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
                  {(props) => <Menu {...props}  onPressedButtonValue= {onPressedButtonValue} setIsConnected={setIsConnected} />}
                </Stack.Screen>

            </Stack.Navigator>

              )
          }
        </NavigationContainer>
      </AuthContext.Provider>
   );


 };
 

 const styles = StyleSheet.create({
  icon: {
      width:90,
      height:45,
  }
});
 
 
 export default App;
 