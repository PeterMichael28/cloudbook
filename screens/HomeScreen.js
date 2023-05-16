import {
 View,
 Text,
 ScrollView,
 StyleSheet,
 Image,
 Touchable,
 TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import {
 BellAlertIcon,
 Bars3Icon,
 MagnifyingGlassIcon,
 AdjustmentsHorizontalIcon,
} from "react-native-heroicons/solid";
import { TextInput } from "react-native";
import Offer from "../components/Offer";
import TopMentors from "../components/TopMentors";
import TopPopular from "../components/TopPopular";
import NavigationBar from "../components/NavigationBar";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {

   const navigation = useNavigation()
 return (
  <View className="w-full flex-1 ">
   {/* header */}
   <View className="h-[150px] bg-[#3a7df1] mt-0 rounded-b-[100px]">
    <SafeAreaView
     className="w-full flex-row items-center justify-center"
     style={{ paddingHorizontal: 20, paddingVertical: 20}}
    >
     <View className="flex-1 flex-row">
      <Image
       source={require("../assets/avatar.jpg")}
       resizeMode="contain"
       className="rounded-full w-10 h-10 mr-3"
      />

      <View>
       <Text className="text-white font-bold text-xl">
        Hi George
       </Text>
       <Text
        className="text-white font-light text-[14px] -mt-1"
        style={{ letterSpacing: 1 }}
       >
        ID: A7498477444 | Student
       </Text>
      </View>
     </View>

     <View className="flex-row space-x-4 items-center justify-center mr-2">
        <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
            <BellAlertIcon size={23} color="#fff" />
        </TouchableOpacity>
      
      <Bars3Icon size={30} color="#fff" />
     </View>

     {/* search component */}
     <View
      className="w-[75%] flex-row absolute top-[125px] bg-[#fff] rounded-2xl py-2 px-5 items-center justify-center space-x-2"
      style={styles.shadowProp}
     >
      <MagnifyingGlassIcon size={15} color="#444" />
      <TextInput
       placeholder="Search here something"
       className="flex-1"
      />
      <AdjustmentsHorizontalIcon size={20} color="#444" />
     </View>
    </SafeAreaView>
   </View>

   {/* content */}
   <ScrollView className="flex-1 ">
    {/* offers */}
    <ScrollView
     horizontal={true}
     className=" mt-8"
     contentContainerStyle={{
      justifyContent: "center",
      alignItems: "center",
   
      paddingHorizontal: 13
     }}
    >
    <Offer />
    <Offer />
    <Offer />
    <Offer />
    </ScrollView>

    {/* top mentors */}
    <TopMentors />

    {/* top popular */}
    <TopPopular />
   </ScrollView>

   {/* Navigation */}
         <NavigationBar  />
  </View>
 );
};

export default HomeScreen;

const styles = StyleSheet.create({
 shadowProp: {
  shadowColor: "#000",
  shadowOffset: {
   width: 10,
   height: 10,
  },
  shadowOpacity: 0.1,
  shadowRadius: 5,

  elevation: 50,
  paddingHorizontal: 15,
  paddingVertical: 2,
 },
});
