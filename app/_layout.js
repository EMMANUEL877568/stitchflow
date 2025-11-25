import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
      name="(tabs)"
      option={{
        headerShown:true,
        title:"tabs"
      }}
      />
      <Stack.Screen
      name="index"
      option={{
        headerShown:true,
        title:"index"
      }}
      />
    </Stack>
  )
}
