import { initializeFirebase } from "@/features/firebase";
import store from "@/store";
import { Stack } from "expo-router";
import { Provider } from "react-redux";

export default function RootLayout() {
  initializeFirebase();
  return (
    <Provider store={store}>
      <Stack>
        <Stack.Screen name="index" />
        <Stack.Screen name="login" />
        <Stack.Screen name="settings" />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </Provider>
  );
}
