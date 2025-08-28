import { Image, ImageProps, StyleSheet } from "react-native";

const CommonImage = (props: ImageProps) => {
  return <Image style={styles.container} {...props} />;
};

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    margin: 5,
    padding: 5,
    borderWidth: 1,
    borderRadius: 3,
  },
});

export default CommonImage;
