import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import CommonButton from "../../components/button/commonButton";

export default function LoginScreen() {
  const [id, setId] = React.useState("");
  const [pwd, setPwd] = React.useState("");
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../../assets/images/testLogo.png")}
        />
      </View>
      <View style={styles.loginContainer}>
        <View style={styles.txtInputContainer}>
          <TextInput
            style={styles.txtInput}
            placeholder="Email"
            onChangeText={setId}
            value={id}
          />
        </View>
        <View style={styles.txtInputContainer}>
          <TextInput
            placeholder="Password"
            style={styles.txtInput}
            onChangeText={setPwd}
            value={pwd}
          />
        </View>
        <CommonButton
          onPress={() => {
            console.log("Login");
          }}
        >
          <Text>Login</Text>
        </CommonButton>
      </View>
      <View>
        <TouchableOpacity style={styles.socialLoginBtn}>
          <Text>Social Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialLoginBtn}>
          <Text>Social Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialLoginBtn}>
          <Text>Social Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  logoContainer: {
    alignItems: "center",
    padding: 5,
  },
  logo: {
    width: 100,
    height: 100,
  },
  loginContainer: {},
  txtInputContainer: {
    padding: 5,
    margin: 5,
  },
  txtInput: {
    paddingBottom: 5,
    borderBottomWidth: 1,
  },
  socialLoginBtn: {
    margin: 5,
    padding: 5,
    backgroundColor: "green",
  },
});
