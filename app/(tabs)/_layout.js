import { Tabs } from "expo-router";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function _Layout(){
  return (
    <Tabs screenOptions={{tabBarActiveTintColor:"red"}}>
    <Tabs.Screen
    name="homepage"
    options={{
        headerShown:false,
        title:"feed",
        tabBarIcon:() => <MaterialCommunityIcons name="home-heart" size={24} color="black" />
    }}
    />
    <Tabs.Screen
    name="measurement"
    options={{
        headerShown:false,
        title:"measurements",
        tabBarIcon:() => <MaterialCommunityIcons name="tape-measure" size={24} color="black" />
    }}
    />
    <Tabs.Screen
    name="history"
    options={{
        headerShown:false,
        title:"history",
        tabBarIcon:() => <MaterialCommunityIcons name="history" size={24} color="black" />
    }}
    />
    <Tabs.Screen
    name="settings"
    options={{
        headerShown:false,
        title:"settings",
        tabBarIcon:() => <Ionicons name="settings" size={24} color="black" />
    }}
    />

</Tabs>


  )

}
