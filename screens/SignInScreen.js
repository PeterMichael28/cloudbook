import { View, Text, TouchableOpacity, Image, TextInput, ScrollView, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import CheckBox from "expo-checkbox";
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../components/CustomButton';
import { ArrowSmallLeftIcon } from 'react-native-heroicons/outline';

const SignInScreen = () => {

    const navigation = useNavigation();

    const signIn = () => navigation.navigate('Home')

    const back = () => navigation.goBack();

    const [showPassword, setShowPassword] = useState(true)
    const [agree, setAgree] = useState(false);
  return (
    <SafeAreaView className='w-full flex-1  bg-[#dde8fb] items-center'>
        <TouchableOpacity className='absolute left-3 top-10' onPress={() => back()}>
             <Text className='text-[#444] font-bold'><ArrowSmallLeftIcon size={30} color='#444' /></Text>
          </TouchableOpacity>


          <ScrollView style={styles.container}  className='w-full flex-1 '>
              {/* back */}
        
       


        <Image source={ require( '../assets/img2.png' ) } style={{height: 200, width: 350}} resizeMode='contain' className='mt-20'
          />


          {/* input section */}
          <View className='w-full mt-8'>
              <View className='w-full bg-[#fafafa] px-4 py-2 h-12 rounded-md' style={styles.shadowProp}>
                <TextInput inputMode='email' placeholder='Email' className='w-full h-full text-lg'/>
            </View>
            <View className='w-full flex-row bg-[#fafafa] px-4 py-2 h-12 rounded-md mt-5' style={styles.shadowProp}>
                <TextInput inputMode='text' secureTextEntry={showPassword} placeholder='Password' className='w-full h-full text-lg'/>
                <Text className='self-end text-sm absolute right-4 top-4' onPress={() => setShowPassword(!showPassword)}>{!showPassword ? 'hide' : 'show'}</Text>
            </View>
          </View>

          {/* remember me */}
        <View className='flex-row gap-2 items-center justify-center mt-4 w-full' >
          <CheckBox
          value={agree}
          onValueChange={() => setAgree(!agree)}
          color={agree ? '#3a7df1' : '#3a7df1'}
          className='rounded w-[18px] h-[18px]'
        />
            <Text className='text-lg font-semibold text-[#666]'>Remember me</Text>
          </View>

          
      {/* cta */}
      <View className='w-[420px] justify-center items-center mt-6' style={ styles.btn }>
              <CustomButton text='Login' onClick={signIn} />
        </View>

        {/* forgot Password */}
        <View className='w-full justify-center items-center'>
            <Text className='text-[17px] font-semibold text-[#3a7df1] mt-5'>Forgot Your Password?</Text>
        </View>

        
      {/* or */}
      <View className='items-center justify-center gap-[6px] mt-5 mb-4 flex-row px-3'>
        <View className='h-[1px] w-[50%] bg-[#888]'></View>
        <Text className='text-black/60 font-bold text-lg '>or continue with</Text>
        <View className='h-[1px] w-[50%] bg-[#888]'></View>
      </View>


      <View className='mt-2 items-center justify-center'>
        <Text className='text-[#989898] text-base font-semibold'>Don't have an account ? <Text className='text-[#3a7df1] text-base font-semibold'>Sign Up</Text></Text>
        </View>
              

        </ScrollView>
        
    </SafeAreaView>
  )
}

export default SignInScreen

const styles = StyleSheet.create( {
    container: {
        paddingHorizontal: 40
  },
  btn: {
   marginLeft: -50
  },
  shadowProp: {
    shadowColor: "#c6c4c4",
    shadowOffset: {
        width: 1,
        height: 3,
    },
    shadowOpacity: 0.59,
    shadowRadius: 4.65,
    
    elevation: 4,
  },
})