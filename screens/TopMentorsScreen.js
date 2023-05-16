import { View, Text, TouchableOpacity, StyleSheet, TextInput, Image, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import {
    EllipsisHorizontalCircleIcon,
    ArrowSmallLeftIcon,
    StarIcon,
    ChatBubbleLeftEllipsisIcon
} from "react-native-heroicons/outline";
import { AdjustmentsHorizontalIcon, MagnifyingGlassIcon, StarIcon as StarIconSolid } from 'react-native-heroicons/solid';


const TopMentorsScreen = () => {
    const navigation = useNavigation()
  return (
    <View className='flex-1'>
       <View className="h-[105px] bg-[#3a7df1] mt-0 rounded-b-[100px]">
    <SafeAreaView
     className="w-full flex-row items-center justify-between flex-1 mb-6"
     style={{ paddingHorizontal: 20, paddingVertical: 10}}
    >
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <ArrowSmallLeftIcon size={25} color='#fff'/>
        
      </TouchableOpacity>
     <View className="flex-1 items-center justify-center"> 
        <Text className='text-white font-semibold text-[18px]'>Top Mentor's</Text>
     </View>
    <EllipsisHorizontalCircleIcon size={25} color='#fff'/>
    

     {/* search component */}
     <View
      className="w-[75%] flex-row absolute top-[84px] left-[70px] bg-[#fff] rounded-2xl py-2 px-5 items-center justify-center space-x-2"
      style={styles.shadowProp}
     >
      <MagnifyingGlassIcon size={15} color="#444" />
      <TextInput
       placeholder="Search here for mentors"
       className="flex-1"
      />
      <AdjustmentsHorizontalIcon size={20} color="#444" />
     </View>
    </SafeAreaView> 
   </View>


   {/* mentors */}
   <ScrollView className='w-full  flex-1 mt-12 px-3'>
      <View className='bg-[#e2e0e0] px-6 pt-1 justify-between items-center flex-row rounded-[40px] h-[90px]' style={styles.shadowProp}>
          

            <View className='w-[105px] h-[105px] rounded-full bg-white p-2 relative -left-5 top-1 scale-105' style={styles.shadowProp}>
              <Image source={ require( '../assets/avatar.jpg' ) } resizeMode='contain' className=' w-full h-full rounded-full'/>
            </View>


        <View className='space-y-1 mr-10'>
          <Text className='text-[16px] font-bold text-black/70'>Saara Williams</Text>
          <Text className='text-[13px] text-[#888] font-semibold'>Full stack Web Developer</Text>
          <Text  className='text-[11px] font-light text-[#888]'>ID: A7498477444 | Student</Text>
          <View className='flex-row items-center space-x-[2px]'>
            <StarIconSolid size={15} color='gold'/>
            <StarIconSolid size={15} color='gold'/>
            <StarIconSolid size={15} color='gold'/>
            <StarIconSolid size={15} color='gold'/>
            <StarIcon size={15} color='gold'/>
          </View>
        </View>

        <ChatBubbleLeftEllipsisIcon size={30} color='#3a7df1'/>
      </View>
   </ScrollView>
    </View>
  )
}

export default TopMentorsScreen

const styles = StyleSheet.create({
    shadowProp: {
     shadowColor: "#000",
     shadowOffset: {
      width: 0,
      height: 5,
     },
     shadowOpacity: 0.1,
     shadowRadius: 3,
   
     elevation: 50,
     paddingHorizontal: 15,
        paddingVertical: 2
   
    },
    octagon: {},
  octagonBar: {
    width: 42,
    height: 100,
    backgroundColor: "white",
  },
  octagonUp: {},
  octagonFlat: {
    position: "absolute",
    top: 0,
    left: 0,
    transform: [{ rotate: "90deg" }],
  },
  octagonLeft: {
    position: "absolute",
    top: 0,
    left: 0,
    transform: [{ rotate: "-45deg" }],
  },
  octagonRight: {
    position: "absolute",
    top: 0,
    left: 0,
    transform: [{ rotate: "45deg" }],
  },
   });