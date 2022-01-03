import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './Button.style'

const Button = ({ onSubmit, onPress, label, theme = "default", ...otherProps }) => {
  return (
    <View style={styles[theme].container} >
      <TouchableOpacity {...otherProps} onPress={onPress}>
        <Text style={styles[theme].label} >{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
