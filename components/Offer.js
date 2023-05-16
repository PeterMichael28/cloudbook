import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Offer = () => {
  return (
    <View
    className="flex-row items-center justify-between mx-2 bg-[#3a7df1] rounded-3xl space-x-6 flex-1"
    style={[styles.shadowProp, styles.viewPadding]}
   >
    <View className='w-20 h-[80px] top-9 absolute bg-[#5089ec] left-12 rounded-tl-[31px] rounded-bl-[40] rounded-tr-[35px] ' style={styles.shadowProp}></View>
    <View className=''>
     <Text className=" text-white/70" >
      60 % Offer
     </Text>
     <Text className="font-bold text-[28px] mt-2 text-white" >
      Today's Special
     </Text>
     <Text className="text-white/90 font-semibold mt-1" style={{fontWeight: '300'}}>
      Get a discount for every{" "}
     </Text>
     <Text className="text-white/90 font-semibold" style={{fontWeight: '300'}}>
    course you order
     </Text>
    </View>

    <View className="justify-center items-center rounded-[35px] p-[12px] bg-[#6497f0]">
     <Text className="text-[39px] font-extrabold text-white">
      60%
     </Text>
    </View>
   </View>
  )
}

export default Offer

const styles = StyleSheet.create({
    shadowProp: {
     shadowColor: "#000",
     shadowOffset: {
      width: 100,
      height: 150,
     },
     shadowOpacity: 2.79,
     shadowRadius: 0.65,
   
     elevation: 0
  },
  viewPadding: {
    paddingHorizontal: 15,
    paddingVertical: 25
  }
   });