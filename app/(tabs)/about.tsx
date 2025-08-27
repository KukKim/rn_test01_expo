import CommonButton from "@/components/button/commonButton";
import { auth, updateUserInfo } from "@/features/auth";
import React from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";

export default function AboutScreen() {
  const [userDisplayName, setUserDisplayName] = React.useState("");
  const [userImgUrl, setUserImgUrl] = React.useState("");
  const [newUserDisplayName, setNewUserDisplayName] = React.useState("");
  const [newUserImgUrl, setNewUserImgUrl] = React.useState("");

  React.useEffect(() => {
    const myAuth = auth();
    const userInfo = myAuth().currentUser;
    setUserDisplayName(userInfo?.displayName);
    setUserImgUrl(userInfo?.photoURL);
  }, []);

  const onUpdateUserInfo = () => {
    updateUserInfo({
      displayName: newUserDisplayName,
      photoURL: newUserImgUrl,
    });
  };

  return (
    <View style={styles.container}>
      <Text>About</Text>

      <TextInput
        style={styles.txtInput}
        placeholder="new displayName"
        onChangeText={setNewUserDisplayName}
        value={newUserDisplayName}
      />
      <TextInput
        style={styles.txtInput}
        placeholder="new userImgUrl"
        onChangeText={setNewUserImgUrl}
        value={newUserImgUrl}
      />
      <Text>{userDisplayName}</Text>
      <Image
        style={styles.userImg}
        source={{
          uri: userImgUrl,
        }}
      />
      <CommonButton onPress={onUpdateUserInfo}>
        <Text>Update user info</Text>
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
  userImg: {
    width: 100,
    height: 100,
  },
  txtInput: {
    paddingBottom: 5,
    borderBottomWidth: 1,
  },
});
