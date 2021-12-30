import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const Button = ({ onSubmit }) => {
  return (
    <View>
      <TouchableOpacity
        onPress={onSubmit}
      >
        <Text>Tekst</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
