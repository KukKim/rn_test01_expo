import CommonButton from "@/components/button/commonButton";
import CommonImage from "@/components/image/commonImage";
import { updateUserInfo } from "@/features/auth";
import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { useSelector } from "react-redux";

export default function AboutScreen() {
  const userInfo = useSelector((state) => state.user.info);
  const [userDisplayName, setUserDisplayName] = React.useState(
    userInfo?.displayName
  );
  const [userImgUrl, setUserImgUrl] = React.useState(userInfo?.photoURL);
  const [newUserDisplayName, setNewUserDisplayName] = React.useState(
    userInfo?.displayName
  );
  const [newUserImgUrl, setNewUserImgUrl] = React.useState(userInfo?.photoURL);

  const onUpdateUserInfo = React.useCallback(() => {
    setNewUserDisplayName("");
    setNewUserImgUrl("");
    updateUserInfo({
      displayName: newUserDisplayName,
      photoURL: newUserImgUrl,
    })
      .then((newInfo) => {
        setUserDisplayName(newInfo?.displayName);
        setUserImgUrl(newInfo?.photoURL);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [newUserDisplayName, newUserImgUrl]);

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
      <CommonImage
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
