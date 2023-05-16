import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {
  ArrowSmallLeftIcon,
} from "react-native-heroicons/outline";

const Back = ({onClick}) => {
  return (
    <TouchableOpacity className='absolute border left-7 top-14' onPress={() => onClick()}>
    <Text className='text-[#444] font-bold'> <ArrowSmallLeftIcon size={20} color='#444' /></Text>
          
</TouchableOpacity>
  )
}

export default Back