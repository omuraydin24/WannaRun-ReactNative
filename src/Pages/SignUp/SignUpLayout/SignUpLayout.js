import React from 'react';
import { View } from 'react-native';
import Button from '../../../Components/Button';
import Input from "../../../Components/Input";

const SignUpLayout = ({ setText, onSubmit }) => {
  return (
    <View>
      <Input
        onChangeText={setText}
        placeholder='Search'
      />
      <Button
        onSubmit={onSubmit}
      />
    </View>
  );
}
export default SignUpLayout;
