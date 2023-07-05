import React from 'react';
import {StatusBar, StyleSheet, View, Text} from 'react-native';
import TopImage from './components/topImage';
import Divider from './components/divider';
import LocationDistance from './components/loactionDistance';
import Price from './components/price';
import Navbar from './components/navbar';
import Icon from './components/icon';
import LastButton from './components/button';
const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'darkorange'} />
      <TopImage />
      <Text style={styles.text}>2013 Lincoln MKX</Text>
      <Divider />
      <LocationDistance />
      <Price />
      <Navbar />
      <Icon />
      <View style={styles.button}>
        <LastButton data={{texts: 'Ask a Question', dark: false}} />
        <LastButton data={{texts: 'Make an Offer', dark: true}} />
      </View>
    </View>
  );
};
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    color: 'darkblue',
    fontSize: 32,
    width: '90%',
    alignSelf: 'center',
    paddingVertical: 30,
  },
  button: {
    flexDirection: 'row',
    width: '80%',
    alignSelf: 'center',
    justifyContent: 'space-around',
    marginTop: 10,
  },
});
