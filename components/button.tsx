import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
const LastButton = (props: {data: {texts: string; dark: boolean}}) => {
  console.log(props.data.texts);
  return (
    <TouchableOpacity
      style={{
        ...styles.body,
        backgroundColor: props.data.dark ? 'darkblue' : '#fff',
      }}>
      <Text
        style={{
          color: props.data.dark ? '#fff' : 'darkblue',
          ...styles.text,
        }}>
        {props.data.texts}
      </Text>
    </TouchableOpacity>
  );
};
export default LastButton;
const styles = StyleSheet.create({
  body: {
    borderColor: 'darkblue',
    padding: 20,
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    alignItems: 'center',
  },
});
