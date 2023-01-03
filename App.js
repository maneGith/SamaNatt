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
        Text,
        ActivityIndicator } from 'react-native';
 import AsyncStorage from '@react-native-async-storage/async-storage';
 
 import Login from './src/screens/Login';
 import Information from './src/screens/Information';


import Home from './src/screens/Home';
import Tontine from './src/screens/Tontine';
import CreateTontine from './src/screens/CreateTontine';
import SearchTontine from './src/screens/SearchTontine';
import SearchAmi from './src/screens/SearchAmi';


 import Amitie from './src/screens/Amitie';
 import Menu from './src/screens/Menu';
 import Inscription from './src/screens/Inscription';
 import CodeSecret from './src/screens/CodeSecret';
 import CodeLogin from './src/screens/CodeLogin';
 


 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import { AuthContext } from './src/components/Context';
 
 
 const Stack = createNativeStackNavigator();


 
 const App = () => {

  // Verify isConnected value stored
  // Switch screen according to this value
  const [userData, setUserData] = useState(null);
  const [onPressedButtonValue, setOnPressedButtonValue] = useState('');
  const [prenom, setPrenom] = useState('');
  const [nom, setNom] = useState('');
  const [tontine, setTontine] = useState([]);
  const [ami, setAmi] = useState([]);
  const [input, setInput] = useState([]);

  

  //const [isLoading, setIsLoading] = React.useState(false);
 //const [userToken, setUserToken] = React.useState(null);
 const initialLoginState = {
  isLoading: true,
  userData: null,
  userToken: null

 }

 const loginreducer = (prevState, action) => {
    switch( action.type ){
      case 'RESTORE_TOKEN':
        return {
          ...prevState,
          userData: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'SIGN_IN':
        return {
          ...prevState,
          userData: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'SIGN_OUT':
        return {
          ...prevState,
          userData: null,
          userToken: null,
          isLoading: false,
        };
    }
 }

 const [state, dispatch] = React.useReducer(loginreducer, initialLoginState);

  const authContext = React.useMemo(() => ({
    signIn: async(userData) => {
        let userToken
        userToken = null;
        try {
          //From Data Base
          userToken =   'dummy-auth-token';
          const jsonValue = JSON.stringify(userData);

         

          await AsyncStorage.setItem('userToken', userToken);
          await AsyncStorage.setItem('userData', jsonValue);
        } catch (error) {
          console.log(error);
        }
        dispatch({ type: 'SIGN_IN', id: userData, token: userToken });
    },
    signOut: async() => {
      try {
        await AsyncStorage.removeItem('userToken');
        await AsyncStorage.removeItem('userData');

        setOnPressedButtonValue('');
        setTontine([]);
        setInput([]);

      } catch (error) {
        console.log(error);
      }
      dispatch({ type: 'SIGN_OUT' });
    }
  }), []);
  
  useEffect(() => {
    setTimeout(async() => {
      let userToken;
      let userData;
      try {
        userToken = await AsyncStorage.getItem('userToken');
        userData = await AsyncStorage.getItem('userData');
        if (userData==null){
          setOnPressedButtonValue('');
        }else{
          console.log(userData);
          userData = JSON.parse(userData);
          setOnPressedButtonValue(userData.telephone);
          signIn(userData);
     
        }
      } catch (error) {
        console.log(error);
      }
      dispatch({ type: 'RESTORE_TOKEN', id: userData, token: userToken });
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
                {(props) => <Login {...props}  onPressedButtonValue= {onPressedButtonValue} setOnPressedButtonValue={setOnPressedButtonValue}  
                setPrenom={setPrenom} setNom={setNom} setUserData={setUserData}/>}
            </Stack.Screen>
            <Stack.Screen
              name="CodeLogin"
              options={{ 
                title: '',
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
             >
                {(props) => <CodeLogin {...props}  userData={userData}/>}
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
            <Stack.Screen 
              name="Inscription" 
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
                headerBackTitle:' ',
                headerRight: ()=>(
                  <Text style={{fontSize:20, fontWeight:'bold'}}>{onPressedButtonValue}</Text>
                )
              }} 
            >
               {(props) => <Inscription {...props}  prenom={prenom} setPrenom= {setPrenom} nom={nom} setNom= {setNom} />}
            </Stack.Screen>
            <Stack.Screen 
              name="CodeSecret" 
              options={{ 
                title: 'Choix Code Secret',
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
            >
              {(props) => <CodeSecret {...props}  onPressedButtonValue= {onPressedButtonValue}  prenom={prenom} nom={nom} />}
            </Stack.Screen>
            
          </Stack.Navigator>

            
            ):(
            <Stack.Navigator
            initialRouteName='Home'
            >

                <Stack.Screen
                  name="Home"
                  options={{ 
                  headerShown:false
                  }} >
                        {(props) => <Home {...props}  onPressedButtonValue= {onPressedButtonValue}  userData={userData} input={input}/>}
                </Stack.Screen>


                <Stack.Screen
                  name="Tontine"
                  options={{ 
                    headerShown:false
                }}
                >
                  {(props) => <Tontine {...props}    tontine={tontine}   userData={userData} input={input} />}
                </Stack.Screen>

                <Stack.Screen
                  name="CreateTontine"
                  options={{ 
                    headerShown:false
                    }}
                >
                  {(props) => <CreateTontine {...props}  userData={userData}  tontine={tontine} input={input} />}
                </Stack.Screen>

                <Stack.Screen
                  name="SearchTontine"
                  options={{ 
                    headerShown:false
                }}
                >
                  {(props) => <SearchTontine {...props}   />}
                </Stack.Screen>

                <Stack.Screen
                  name="Amitie"
                  options={{ 
                    headerShown:false
                    
                  }} 
                >
                  {(props) => <Amitie {...props}    ami={ami}   userData={userData} input={input} />}
                </Stack.Screen>

                <Stack.Screen
                  name="SearchAmi"
                  options={{ 
                    headerShown:false
                }}
                >
                  {(props) => <SearchAmi {...props}   />}
                </Stack.Screen>


                <Stack.Screen
                  name="Menu"
                  options={{ 
                    title: 'Paramètres',
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
                  {(props) => <Menu {...props}  onPressedButtonValue= {onPressedButtonValue} />}
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
 