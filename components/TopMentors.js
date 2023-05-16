import { View, Text } from 'react-native'
import React from 'react'
import Header from './Header';
import TopMentorsCard from './TopMentorsCard';
import { useNavigation } from '@react-navigation/native';

const TopMentors = () => {

  const navigation = useNavigation()
  return (
    <View className='w-full'>
      <Header text="Top Mentor's" onPress={ () => navigation.navigate('TopMentors')} />
      <View className='w-full mt-3 items-center justify-between flex-row' style={{ paddingHorizontal: 18 }}>
        <TopMentorsCard />
        <TopMentorsCard />
        <TopMentorsCard />
      
      </View>
    </View>
  )
}

export default TopMentors

