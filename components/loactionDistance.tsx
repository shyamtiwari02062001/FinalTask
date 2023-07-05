import React from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';
const LocationDistance = () => {
  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <Image source={require('../assets/marker.png')} style={styles.img} />
        <Text style={styles.text}>Westfield</Text>
      </View>
      <View style={styles.view}>
        <Image
          source={require('../assets/speedometer.png')}
          style={styles.img}
        />
        <Text style={styles.text}> 92,930 mi</Text>
      </View>
    </View>
  );
};
export default LocationDistance;
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
  view: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  img: {
    height: 30,
    width: 30,
    tintColor: 'darkviolet',
  },
  text: {
    color: 'darkviolet',
    alignItems: 'center',
    opacity: 0.5,
    fontSize: 28,
  },
});
