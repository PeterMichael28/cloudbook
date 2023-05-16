import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import Back from '../components/Back';
import { SparklesIcon } from "react-native-heroicons/solid";
import { ArrowSmallLeftIcon } from 'react-native-heroicons/outline';
const LoginScreen = () => {

    const navigation = useNavigation();

    const signIn = () => navigation.navigate('SignIn')

    const back = () => navigation.goBack();
  return (
    <SafeAreaView className='w-full flex-1 px-9 items-center pt-12 bg-[#dde8fb]'>

        {/* back */}
        <TouchableOpacity className='absolute left-3 top-10 z-50' onPress={() => back()}>
             <Text className='text-[#444] font-bold'>  <ArrowSmallLeftIcon size={30} color='#444' /></Text>
          </TouchableOpacity>
       


        <Image source={ require( '../assets/img6.png' ) } style={{height: 300, width: 400}} resizeMode='cover' className='mt-0'
          />
      <Text className='-mt-5 tracking-tighter text-black/80 font-bold text-[23px]'>Lets's you in</Text>
     
      {/* social media login */}
      <View className='w-full gap-3 mt-3 justify-center items-center'>
        {/* facebook */}
      <View className='w-full border py-2 justify-center items-center rounded-lg'>
        <Text className='text-center text-base text-[#333] font-semibold'>Continue with Facebook</Text>
      </View>

       {/* Google */}
       <View className='w-full border py-2 justify-center items-center rounded-lg'>
        <Text className='text-center text-base text-[#333] font-semibold'>Continue with Google</Text>
      </View>

      {/* Apple */}
      <View className='w-full border py-2 justify-center items-center rounded-lg'>
        <Text className='text-center text-base text-[#333] font-semibold'>Continue with Apple</Text>
      </View>
      </View>

      {/* or */}
      <View className='items-center justify-center gap-[6px] mt-5 mb-4 flex-row px-3'>
        <View className='h-[1px] w-[50%] bg-[#888]'></View>
        <Text className='text-black font-bold text-lg '>or</Text>
        <View className='h-[1px] w-[50%] bg-[#888]'></View>
      </View>


      {/* cta */}
          <View className='w-[450px] justify-center items-center'>
              <CustomButton text='Sign in with your Password' onClick={signIn} />
        </View>
        
        
     

      <View className='mt-2'>
        <Text className='text-[#989898] text-base font-semibold'>Don't have an account ? <Text className='text-[#3a7df1] text-base font-semibold'>Sign Up</Text></Text>
      </View>
     
    </SafeAreaView>
  )
}

export default LoginScreen