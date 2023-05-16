import { View, Text, Image, TouchableWithoutFeedback, TouchableOpacity  } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

import {
    EllipsisHorizontalCircleIcon,
    ArrowSmallLeftIcon,
} from "react-native-heroicons/outline";
import NotificationsCard from '../components/NotificationsCard';
import { useNavigation } from '@react-navigation/native';
   
const NotificationScreen = () => {

  const navigation = useNavigation()
  return (
    <View>
     <View className="h-[95px] bg-[#3a7df1] mt-0 rounded-b-[100px]">
    <SafeAreaView
     className="w-full flex-row items-center justify-between flex-1"
     style={{ paddingHorizontal: 20, paddingVertical: 10}}
    >
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <ArrowSmallLeftIcon size={25} color='#fff'/>
        
      </TouchableOpacity>
     <View className="flex-1 items-center justify-center"> 
        <Text className='text-white font-semibold text-[18px]'>Notification's</Text>
     </View>
    <EllipsisHorizontalCircleIcon size={25} color='#fff'/>
  
    </SafeAreaView>
   </View>

    <SafeAreaView className='w-full -mt-1 px-4'>
      {/* today */}
      <View>
        <Text className='font-semibold text-[17px] mb-3'>Todays</Text>
          <View className=''>
            <NotificationsCard />
            <NotificationsCard />
        </View>
      </View>

      {/* yesterday */}
      <View>
        <Text className='font-semibold text-[17px] mb-3'>Yesterday</Text>
          <View className=''>
            <NotificationsCard />
            <NotificationsCard />
        </View>
      </View>

      {/* Nov 23 */}
      <View>
        <Text className='font-semibold text-[17px] mb-3'>Novermber 23, 2022</Text>
          <View className=''>
            <NotificationsCard />

        </View>
      </View>
    </SafeAreaView>
    </View>
  )
}

export default NotificationScreen