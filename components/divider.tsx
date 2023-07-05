import React from 'react';
import {StyleSheet, View} from 'react-native';
const Divider = () => {
  return <View style={styles.divider} />;
};

export default Divider;
const styles = StyleSheet.create({
  divider: {
    width: '90%',
    height: 0.5,
    backgroundColor: '#000',
    alignSelf: 'center',
    marginTop: 10,
  },
});
