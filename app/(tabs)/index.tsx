import CommonButton from "@/components/button/commonButton";
import { userSignOut } from "@/features/auth";
import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <CommonButton onPress={userSignOut}>
        <Text>SignOut</Text>
      </CommonButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
