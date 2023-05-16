import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const NavIcon = ({icon: Icon, title, currentPage, setCurrentPage}) => {

    

  return (
    <TouchableOpacity className={`justify-center items-center px-1 w-fit ${currentPage === title ? 'border-b-[3px] border-[#3a7df1] pb-[3px]' : 'border-0 pb-0'} `} onPress={() => setCurrentPage(title)} >
          <Icon size={currentPage === title ? 33 : 27} color={`${currentPage === title ? '#3a7df1' : '#888'}` } className='fw-bold'/>
    </TouchableOpacity>
  )
}

export default NavIcon