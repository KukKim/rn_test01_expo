import { initializeFirebase } from "@/features/firebase";
import { Stack } from "expo-router";

export default function RootLayout() {
  initializeFirebase();
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="login" />
      <Stack.Screen name="settings" />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
