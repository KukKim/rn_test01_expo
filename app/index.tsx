import { Redirect } from "expo-router";
// import { Link, Redirect } from "expo-router";
// import { useEffect } from "react";
// import { Text, View } from "react-native";

export default function Index() {
  const login = false;

  // useEffect(() => {
  //   if (login) {
  //     return <Redirect href="/(tabs)" />;
  //   } else {
  //     return <Redirect href="/login" />;
  //   }
  // }, [login]);

  // return (
  //   <View
  //     style={{
  //       flex: 1,
  //       justifyContent: "center",
  //       alignItems: "center",
  //     }}
  //   >
  //     <Text>index</Text>
  //     <Link href="/settings">View details</Link>
  //   </View>
  // );

  if (login) {
    return <Redirect href="/(tabs)" />;
  } else {
    return <Redirect href="/login" />;
  }
}
