import { Redirect } from "expo-router";
// import { Link, Redirect } from "expo-router";
import { useEffect } from "react";
// import { Text, View } from "react-native";
import { onAuth } from "@/features/auth";
import { getAuth } from "firebase/auth";

export default function Index() {
  const login = false;

  useEffect(() => {
    const unsubscribe = onAuth(getAuth(), (user) => {
      console.log("onAuthStateChanged --- ");
      if (user) {
        console.log("user -- ", user);
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        // ...
      } else {
        // User is signed out
        // ...
      }
      return () => unsubscribe();
    });
  }, [login]);

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
