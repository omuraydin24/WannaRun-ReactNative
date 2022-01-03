import React, { useState } from 'react';
import { View, Text, SafeAreaView, KeyboardAvoidingView, TouchableOpacity, Keyboard, TextInput } from 'react-native';
import Input from '../../../Components/Input';
import AuthButton from '../../../Components/Button';
import SignUpLayout from './SignUpLayout/SignUpLayout';
import { useNavigation } from '@react-navigation/native';

const SignUp = props => {
  const navigation = useNavigation();
  const [isLogin, setIsLogin] = useState(true);

  const handleReturnSignIn = () => {
    if (!navigation.canGoBack()) {
      return;
    }
    navigation.goBack();
  }

  return (
    <SignUpLayout onPress={handleReturnSignIn} />
  )
}

export default SignUp;