import CommonButton from "@/components/button/commonButton";
import { Href, useRouter } from "expo-router";
import { FlatList, SafeAreaView, StyleSheet, Text } from "react-native";

type TestItemProps = {
  title: string;
  route: Href;
};

export default function TestScreen() {
  const router = useRouter();
  const testList: TestItemProps[] = [
    {
      title: "FCM",
      route: "/(tabs)/test/testFCM",
    },
    {
      title: "Animated",
      route: "/(tabs)/test/testAnimated",
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <Text>Test</Text>
      <FlatList
        data={testList}
        renderItem={({ item, index }) => {
          return (
            <TestItem
              title={item.title}
              onPress={() => {
                router.navigate(item.route);
              }}
            />
          );
        }}
      />
    </SafeAreaView>
  );
}

const TestItem = ({ title, onPress }: { title: string; onPress: any }) => {
  return (
    <CommonButton onPress={onPress}>
      <Text>{title}</Text>
    </CommonButton>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
