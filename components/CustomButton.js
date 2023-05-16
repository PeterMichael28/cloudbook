import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'


const CustomButton = ({text, onClick}) => {
  return (
    <TouchableOpacity style={styles.shadowProp} className='w-[75%] rounded-3xl py-2 bg-[#387df1]' onPress={() => onClick()}>
    <Text className='text-white text-lg font-semibold text-center'>{text}</Text>
</TouchableOpacity>
  )
}

export default CustomButton;


const styles = StyleSheet.create( {
    shadowProp: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        
        elevation: 4,
      },
})