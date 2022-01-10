import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './Button.style'

const Button = ({ onSubmit, onPress, label, theme = "default", ...otherProps }) => {
  return (
    <TouchableOpacity {...otherProps} onPress={onPress}>
      <View style={styles[theme].container} >
        <Text style={styles[theme].label} >{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
