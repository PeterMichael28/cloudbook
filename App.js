
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import SignInScreen from './screens/SignInScreen';
import OnBoardingScreen from './screens/OnBoardingScreen';
import HomeScreen from './screens/HomeScreen';
import NotificationScreen from './screens/NotificationScreen';
import TopMentorsScreen from './screens/TopMentorsScreen';
import { KeyboardAvoidingView, Platform } from 'react-native';


const Stack = createNativeStackNavigator();


export default function App() {

  return (
 
     <NavigationContainer>

      <KeyboardAvoidingView
        behavior={ Platform.OS === 'ios' ? "padding" : "height" }
        style={{flex:1}}
        keyboardVerticalOffset={ Platform.OS === 'ios' ? -64 : 0 }
      >

      
     <Stack.Navigator screenOptions={{
          gestureEnabled: true
     }}>
         <Stack.Screen name="OnBoarding" component={OnBoardingScreen} options={{headerShown: false}}/>
         <Stack.Screen name="Login" component={LoginScreen}  options={{headerShown: false}}/>
         <Stack.Screen name="SignIn" component={SignInScreen}  options={{headerShown: false}}/>
          <Stack.Screen name="Home" component={HomeScreen}  options={{headerShown: false}}/>
          <Stack.Screen name="Notification" component={NotificationScreen}  options={{headerShown: false}}/>
          <Stack.Screen name="TopMentors" component={TopMentorsScreen}  options={{headerShown: false}}/>
          {/* <Stack.Screen name="Cart" component={ CartScreen }
            options={{headerShown: false}}
          />
          <Stack.Screen name="PreparingOrder" component={PreparingScreen }
            options={{presentation: 'fullScreenModal', animation: 'slide_from_bottom', headerShown: false}}
          />   
          <Stack.Screen name="Delivery" component={DeliveryScreen }
            options={{presentation: 'fullScreenModal', animation: 'slide_from_bottom', headerShown: false}}
          /> */}
        </Stack.Navigator>
      </KeyboardAvoidingView>

   </NavigationContainer>

  );
 }
 
 
 