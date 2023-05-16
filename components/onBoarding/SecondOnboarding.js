import { View, Text, Image } from 'react-native'
import React from 'react'

const SecondOnboarding = () => {
    return (
        <View className='justify-center items-center w-full h-[60%]'>
              <Image source={ require( '../../assets/img10.png' ) } style={{height: '70%', width: '80%'}} resizeMode='contain' className='ml-10 '
              />
              <View className='flex justify-center items-center w-full ml-11'>   
                <Text className=' text-[#252525] text-center font-bold text-[23px]'>Learn anytime and </Text>
                <Text className=' text-[#252525] text-center font-bold text-[23px] '>anywhere</Text>
                <Text className=' text-[#252525] text-center font-bold text-[23px]'>easily and conveniently</Text>
              </View>
        </View>
      )
}

export default SecondOnboarding