import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Header = ({text, onPress}) => {
  return (
    <View className='flex-row justify-between items-center px-4 mt-6'>
      <Text className='font-extrabold text-[21px] text-[#252525]'>{ text }</Text>
      <TouchableOpacity onPress={() => onPress()}>
        <Text className='text-sm font-semibold text-[#3a7df1]'>See all</Text>
      </TouchableOpacity>
      
    </View>
  )
}

export default Header