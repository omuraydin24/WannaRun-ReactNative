import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Input from '../../../Components/Input'
import Button from '../../../Components/Button'

const SignIn = () => {
  return (
    <View>
      <Text>SignIn</Text>
      <Input label="Email" />
      <Input label="Password" />
      <Button label="Sign In" />
      <Button label="Sign Up" theme="outline" />
    </View>
  );
}


export default SignIn;