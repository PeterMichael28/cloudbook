import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Header from './Header';

const TopPopular = () => {

    const [selected, setSelected] = useState('All')


  return (
    <View className='w-full mt-2'>
         <Header text="Top popular course's"/>
     <View className='w-full mt-2 space-x-2 items-center flex-row justify-between'   style={{ paddingHorizontal: 25, paddingVertical: 10 }}>
        
              {/* top popular card */}
        <TouchableOpacity onPress={() => setSelected('All')} className={`px-4 py-[8px] rounded-tl-3xl rounded-br-3xl  flex-row space-x-2 justify-center items-center border-[#3a7df1] border-2  ${selected === 'All' ? 'bg-[#3a7df1]' : 'bg-transparent'}`}>
        <Image
       source={require("../assets/all.png")}
       resizeMode="contain"
       className="rounded-full w-5 h-5"
      />
      <Text className={`font-semibold text-[17px] ${selected === 'All' ? 'text-white' : '#3a7df1]'}`}>All</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setSelected('Biz')} className={`px-4 py-[8px] rounded-tl-3xl rounded-br-3xl  flex-row space-x-2 justify-center items-center border-[#3a7df1] border-2 ${selected === 'Biz' ? 'bg-[#3a7df1]' : 'bg-transparent'}` }>
        <Image
       source={require("../assets/biz.png")}
       resizeMode="contain"
       className="rounded-full w-5 h-5"
      />
      <Text className={`font-semibold text-[17px] ${selected === 'Biz' ? 'text-white' : '#3a7df1]'}`}>Business</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setSelected('Bulb')} className={`px-4 py-[8px] rounded-tl-3xl rounded-br-3xl  flex-row space-x-2 justify-center items-center border-[#3a7df1] border-2 ${selected === 'Bulb' ? 'bg-[#3a7df1]' : 'bg-transparent'}` }>
        <Image
       source={require("../assets/bulb.png")}
       resizeMode="contain"
       className="rounded-full w-5 h-5"
      />
      <Text className={`font-semibold text-[17px] ${selected === 'Bulb' ? 'text-white' : '#3a7df1]'}`}>3D Designs</Text>
        </TouchableOpacity>

     </View>
    </View>
  )
}

export default TopPopular;