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


 import Participation from './src/screens/Participation';
 import ListNatt from './src/screens/ListNatt';
 import Invitation from './src/screens/Invitation';
 import Menu from './src/screens/Menu';
 import Inscription from './src/screens/Inscription';
 import CodeSecret from './src/screens/CodeSecret';
 import CodeForLogin from './src/screens/CodeForLogin';
 import CreationNatt from './src/screens/CreationNatt';

 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import { AuthContext } from './src/components/Context';
 import addNatt from './assets/images/icone-new.png'
 
 const Stack = createNativeStackNavigator();


 
 const App = () => {

  // Verify isConnected value stored
  // Switch screen according to this value
  const [userData, setUserData] = useState(null);
  const [onPressedButtonValue, setOnPressedButtonValue] = useState('');
  const [prenom, setPrenom] = useState('');
  const [nom, setNom] = useState('');
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
                {(props) => <Login {...props}  onPressedButtonValue= {onPressedButtonValue} setOnPressedButtonValue={setOnPressedButtonValue}  
                setPrenom={setPrenom} setNom={setNom} setUserData={setUserData}/>}
            </Stack.Screen>
            <Stack.Screen
              name="CodeForLogin"
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
                {(props) => <CodeForLogin {...props}  userData={userData}/>}
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
                  options={({ navigation }) => ({
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
                      <TouchableOpacity
                        onPress={() => {
                         navigation.navigate('CreationNatt')
                        }}
                      >
                        <Image 
                          source={addNatt}  
                          style={styles.icon}
                          resizeMode="contain"
                        />
                      </TouchableOpacity>
                        
                    )
                  })}
                />

                <Stack.Screen
                  name="Invitation"
                  component={Invitation}
                  options={{ 
                    title: 'Mes adhésions',
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
                  {(props) => <Menu {...props}  onPressedButtonValue= {onPressedButtonValue} />}
                </Stack.Screen>

                <Stack.Screen
                  name="CreationNatt"
                  options={{ 
                    title: 'Création du Natt',
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
                  {(props) => <CreationNatt {...props}  />}
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
 