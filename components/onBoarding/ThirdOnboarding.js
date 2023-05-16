import { View, Text, Image } from 'react-native'
import React from 'react'

const ThirdOnboarding = () => {
    return (
        <View className='justify-center items-center w-full'>
              <Image source={ require( '../../assets/img4.png' ) } style={{height: 180, width: '90%'}} resizeMode='contain' className='ml-14  mt-20'
              />
              <View className='flex justify-center items-center w-full mt-10 ml-11'>   
                <Text className=' text-[#252525] text-center font-bold text-[23px]'>Lets improve your skills</Text>
                <Text className=' text-[#252525] text-center font-bold text-[23px]'>together with our</Text>
                <Text className=' text-[#252525] text-center font-bold text-[23px]'>Mentor right now</Text>
              </View>
        </View>
      )
}

export default ThirdOnboarding