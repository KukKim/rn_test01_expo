import { Stack } from "expo-router";

export const unstable_settings = {
  initialRouteName: "index",
};

export default function TestLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="testAnimated" />
      <Stack.Screen name="testFCM" />
    </Stack>
  );
}
