import { onAuth } from "@/features/auth";
import { setUserInfo } from "@/reducers/user";
import { useRouter } from "expo-router";
import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { useDispatch } from "react-redux";

export default function Index() {
  const dispatch = useDispatch();
  const navigation = useRouter();
  const [login, setLogin] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuth(getAuth(), (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        dispatch(
          setUserInfo({
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
          })
        );
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
