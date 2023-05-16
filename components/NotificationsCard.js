import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { WalletIcon } from 'react-native-heroicons/outline';

const NotificationsCard = () => {


  return (
    <View className='px-2 py-2 h-fit bg-white rounded-full flex-row space-x-4 justify-between items-center mb-3' style={styles.shadowProp}>
     <View className='rounded-full bg-[#3a7df1] w-[70px] h-[70px] justify-center items-center'>
       <WalletIcon size={35} color='#fff'/>
     </View>

     <View className='mr-36'>
        <Text className='text-black/70 font-bold text-[17px]'>Payment Successfully</Text>
        <Text className='text-[#777] text-[14px] font-semibold'>You have made the course payment.</Text>
     </View>
    </View>
  )
}

export default NotificationsCard



const styles = StyleSheet.create({
    shadowProp: {
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 8,
    },
    shadowOpacity: 0.16,
    shadowRadius: 10.14,
    
    elevation: 17,
   }
   });
   