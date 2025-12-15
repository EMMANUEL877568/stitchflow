import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "expo-font";

export default function RootLayout() {
    const [fontsLoaded] = useFonts({
          "AvegasRoyale-Bold":require("../assets/images/fonts/AvegasRoyale-Bold.ttf"),
         "AvegasRoyale-Regular":require("../assets/images/fonts/AvegasRoyale-Regular.ttf"),
          "Paterna:":require("../assets/images/fonts/Paterna.otf"),
          "ReilycElegantDemo-Regular":require("../assets/images/fonts/ReilycElegantDemo-Regular.otf")
  
      })
      if (!fontsLoaded){
          return null
      }
  return (
    <SafeAreaProvider>
      <Stack>
      <Stack.Screen
      name="(tabs)"
      option={{
        headerShown:false,
        title:"tabs"
      }}
      /> 
      <Stack.Screen
      name="index"
      option={{
        headerShown:false,
        title:"index"
      }}
      />
    </Stack>
    </SafeAreaProvider>
  )
}
