import { Link, Redirect } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  const login = true;

  if (login) {
    return <Redirect href="/(tabs)" />;
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>index</Text>
      <Link href="/settings">View details</Link>
    </View>
  );
}
