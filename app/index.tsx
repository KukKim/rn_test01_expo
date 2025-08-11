import { onAuth } from "@/features/auth";
import { useRouter } from "expo-router";
import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function Index() {
  const navigation = useRouter();
  const [login, setLogin] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuth(getAuth(), (user) => {
      console.log("onAuthStateChanged --- ");
      if (user) {
        console.log("user -- ", user);
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        setLogin(true);
        navigation.replace("/(tabs)");
      } else {
        // User is signed out
        // ...
        setLogin(false);
        navigation.replace("/login");
      }
      return () => unsubscribe();
    });
  }, [login]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>index</Text>
    </View>
  );

  // if (login) {
  //   return <Redirect href="/(tabs)" />;
  // } else {
  //   return <Redirect href="/login" />;
  // }
}
