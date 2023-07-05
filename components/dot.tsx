import React from 'react';
import {StyleSheet, View} from 'react-native';
const Dot = (props: {center: boolean}) => {
  return <View style={[styles.dot, {opacity: props.center ? 1 : 0.2}]} />;
};

export default Dot;
const styles = StyleSheet.create({
  dot: {
    height: 15,
    width: 15,
    backgroundColor: '#fff',

    borderRadius: 20,
    marginHorizontal: 5,
  },
});
