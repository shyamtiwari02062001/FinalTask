import React from 'react';
import {
  ImageBackground,
  TouchableOpacity,
  Image,
  View,
  StyleSheet,
} from 'react-native';
import Dot from './dot';
const TopImage = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/car.jpg')}
        style={styles.bgImage}>
        <TouchableOpacity style={styles.backButton}>
          <Image
            source={require('../assets/back.png')}
            style={styles.buttonImage}
          />
        </TouchableOpacity>
        <View style={styles.dot}>
          <Dot center={false} />
          <Dot center={true} />
          <Dot center={false} />
        </View>
      </ImageBackground>
    </View>
  );
};
export default TopImage;
const styles = StyleSheet.create({
  container: {
    height: '30%',
    width: '100%',
  },
  bgImage: {
    height: '100%',
    width: '100%',
  },
  backButton: {
    paddingTop: 15,
    paddingLeft: 5,
  },
  buttonImage: {
    height: 60,
    width: 60,
  },
  dot: {
    position: 'absolute',
    flexDirection: 'row',
    alignSelf: 'center',
    bottom: 15,
  },
});
