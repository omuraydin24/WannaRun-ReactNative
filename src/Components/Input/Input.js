import React, { useState } from 'react';
import { TextInput, View, Text } from 'react-native';
import styles from "./Input.style";


const Input = ({ label, value, onChangeText, ...otherProps }) => {


  return (
    <View style={styles.container} >
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer} >
        <TextInput style={styles.input} value={value} {...otherProps} onChangeText={onChangeText}

        />
      </View>
    </View>
  );
};

export default Input;

