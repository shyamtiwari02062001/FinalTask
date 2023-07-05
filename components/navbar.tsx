import React, {useState} from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
const Navbar = () => {
  const [selected, setSelected] = useState(0);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => setSelected(0)}
        style={{
          backgroundColor: selected === 0 ? '#fff' : '#F5EFFD',
          ...styles.button,
        }}>
        <Text style={styles.text}>Details</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setSelected(1)}
        style={{
          backgroundColor: selected === 1 ? '#fff' : '#F5EFFD',
          ...styles.button,
        }}>
        <Text style={styles.text}>Features</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setSelected(2)}
        style={{
          backgroundColor: selected === 2 ? '#fff' : '#F5EFFD',
          ...styles.button,
        }}>
        <Text style={styles.text}>Condition</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Navbar;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '90%',
    backgroundColor: '#F5EFFD',
    padding: 5,
    alignSelf: 'center',
    borderRadius: 10,
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  button: {
    padding: 10,
    flex: 1,
    borderRadius: 5,
  },
  text: {
    color: 'darkblue',
    fontSize: 24,
    textAlign: 'center',
  },
});
