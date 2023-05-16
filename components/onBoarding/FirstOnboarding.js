import { View, Text, Image } from 'react-native'
import React from 'react'

const FirstOnboarding = () => {
  return (
    <View className='justify-center items-center w-full'>
          <Image source={ require( '../../assets/img5.png' ) } style={{height: 380, width: '60%'}} className='ml-10 mt-5'
          />
          <View className='flex justify-center items-center w-full -mt-6 ml-11'>   
            <Text className=' text-[#252525] text-center font-bold text-[23px]'>We Provide the best </Text>
            <Text className=' text-[#252525] text-center font-bold text-[23px]'>Learning Courses &</Text>
            <Text className=' text-[#252525] text-center font-bold text-[23px]'>great Mentors!</Text>
          </View>
    </View>
  )
}
 
export default FirstOnboarding