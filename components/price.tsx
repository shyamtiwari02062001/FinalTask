import React from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';
const Price = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>$12,500</Text>
      <Image source={require('../assets/heart.png')} style={styles.img} />
    </View>
  );
};
export default Price;
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    paddingVertical: 10,
    alignItems: 'center',
  },
  text: {
    color: 'darkblue',
    fontSize: 40,
  },
  img: {
    height: 30,
    width: 30,
  },
});
