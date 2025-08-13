import { StyleSheet, Text, View } from "react-native";

export default function TestFCMScreen() {
  return (
    <View style={styles.container}>
      <Text>FCM</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
