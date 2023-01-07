import { StyleSheet, Image } from 'react-native';

export default function ImageViewer({ placeholderImageSource }) {
  return <Image source={placeholderImageSource} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 345,
    height: 480,
    borderRadius: 18,
  },
});
