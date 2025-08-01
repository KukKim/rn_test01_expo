import { Stack } from "expo-router";
import { initializeFirebae } from "../firebaseConfig";

export default function RootLayout() {
  initializeFirebae();
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="login" />
      <Stack.Screen name="settings" />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
