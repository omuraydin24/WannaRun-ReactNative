import React, { useState } from 'react';
import { TextInput, View } from 'react-native';

const AuthInput = ({ ...otherProps }) => {


  return (
    <View>
      <TextInput
        {...otherProps}
      />
    </View>
  );
};

export default AuthInput;

