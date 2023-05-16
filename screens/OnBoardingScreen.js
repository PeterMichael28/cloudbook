import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useCallback, useMemo, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import FirstOnboarding from '../components/onBoarding/FirstOnboarding';
import SecondOnboarding from '../components/onBoarding/SecondOnboarding';
import ThirdOnboarding from '../components/onBoarding/ThirdOnboarding';
import {
    MagnifyingGlassIcon, ArrowSmallLeftIcon
   } from "react-native-heroicons/outline";
import CustomButton from '../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import Back from '../components/Back';

const OnBoardingScreen = () => {
    const navigation = useNavigation();

    const [steps, setSteps] = useState(1)

    // next func
    const onNext = useCallback( () => {
        setSteps(prev => prev + 1)
    }, [steps])


    //back func
    const onBack = useCallback( () => {
        setSteps(prev => prev - 1)
    }, [steps])

    // action buttons
    const onSubmit = () => {
        if ( steps < 3 ) {
            return onNext()
        }

        // navigate to login page
        navigation.navigate('Login')
    }

    const actionLabel = useMemo( () => {
        
        if ( steps < 3 ) {
            return 'Next'
        }

        return 'Get Started'
    }, [steps])


    const bodyContent = useMemo( () => { 
        if ( steps === 1 ) {
            return <FirstOnboarding />
        }

        if ( steps === 2 ) {
            return <SecondOnboarding />
        }

        if ( steps === 3 ) {
            return <ThirdOnboarding />
        }
    }, [steps])




  return (
    <SafeAreaView className="bg-[#dde8fb] flex-1 justify-center items-center gap-16">
        {/* back btn */}
       { steps > 1 &&  <TouchableOpacity className='absolute left-4 top-14 z-50' onPress={() => onBack()}>
    <Text className='text-[#444] font-extrabold'> <ArrowSmallLeftIcon size={30} color='#444' /></Text>
          
</TouchableOpacity>}

{/* skip button */}
   {steps < 3 && <TouchableOpacity className=' absolute right-10 top-14 z-50' onPress={() => navigation.navigate('Login')}>
        <Text className='text-[#444]'>Skip</Text>
    </TouchableOpacity>}

    {bodyContent}


      {/* actionButton */}
      <View className='w-full items-center justify-center'>
        <CustomButton text={ actionLabel } onClick={onSubmit} />
      </View>
        
    </SafeAreaView>
  )
}

export default OnBoardingScreen