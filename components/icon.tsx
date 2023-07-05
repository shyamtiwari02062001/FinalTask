import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
const Icon = () => {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Image source={require('../assets/logo.png')} style={styles.img} />
      </View>
    </View>
  );
};
export default Icon;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5EFFD',
    height: '25%',
    width: '90%',
    alignSelf: 'center',
    marginVertical: 10,
    padding: 20,
    borderRadius: 20,
  },
  body: {
    backgroundColor: '#fff',
    borderRadius: 20,
  },
  img: {
    height: '100%',
    width: '100%',
  },
});
