import { View, Text, StyleSheet  } from 'react-native'
import React, { useState } from 'react'
import {
    HomeIcon,
    BookOpenIcon,
    ChatBubbleBottomCenterTextIcon,
    ShoppingBagIcon,
    UserIcon
   } from "react-native-heroicons/outline";
import NavIcon from './NavIcon';

const nav = [
    {
        title: 'Home',
        icon: HomeIcon
    },
    {
        title: 'Books',
        icon: BookOpenIcon
    },
    {
        title: 'Chat',
        icon:ChatBubbleBottomCenterTextIcon
    },
    {
        title: 'Shop',
        icon:ShoppingBagIcon
    },
    {
        title: 'User',
        icon:UserIcon
    },

]

const NavigationBar = () => {
    const [currentPage, setCurrentPage] = useState('Home')


  return (
    <View className='flex-row justify-between items-center absolute bottom-0 left-0 w-full flex-1 border-t border-[#f1f1f1] bg-[#fff]'  style={styles.shadowProp}>
          { nav.map( item => (
              <NavIcon key={ item.title } icon={ item.icon } title={ item.title} currentPage={ currentPage } setCurrentPage={setCurrentPage }/>
      ))}
    </View>
  )
}

export default NavigationBar

const styles = StyleSheet.create({
    shadowProp: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: -1,
        },
        shadowOpacity: 0.07,
        shadowRadius: 4.65,
        
        elevation: 6,
     paddingHorizontal: 17, 
     paddingTop: 10, 
     elevation: 10, 
     zIndex: 10, 
     paddingBottom: 20 
    },
   });
   