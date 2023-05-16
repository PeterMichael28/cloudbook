import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const TopMentorsCard = () => {
  return (
    <View className='bg-[#c3c3c35d] justify-center items-center w-[31%] rounded-3xl' style={styles.shadowProp}
    >
         <Image
       source={require("../assets/avatar.jpg")}
       resizeMode="contain"
       className="rounded-full w-12 h-12 m"
      />
      <Text className='font-semibold text-[18px] mt-1 text-[#545353]'>Saara</Text>
      <Text className='text-[#615f5f] text-[12px]'>UI/UX Designer</Text>
    </View>
  )
}

export default TopMentorsCard;



const styles = StyleSheet.create({
  shadowProp: {
 
   elevation: 5,
    paddingHorizontal: 13,
    paddingVertical: 16
  },
 });