import React, { useState } from 'react';
import { TextInput, View, Text } from 'react-native';
import styles from "./Input.style";


const Input = ({ label, ...otherProps}) => {


  return (
    <View style={styles.container} >
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer} >
        <TextInput style={styles.input} {...otherProps}
          
        />
      </View>
    </View>
  );
};

export default Input;

