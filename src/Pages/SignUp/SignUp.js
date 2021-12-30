import React, { useState } from 'react';
import { View, Text, SafeAreaView, KeyboardAvoidingView, TouchableOpacity, Keyboard, TextInput } from 'react-native';
import AuthInput from '../../Components/Input';
import AuthButton from '../../Components/Button';
import SignUpLayout from './SignUpLayout/SignUpLayout';

const SignUp = props => {

  const [isLogin, setIsLogin] = useState(true);

  const handleButtonPress = () => {
    
  }

  return (
    <SafeAreaView>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        keyboardVerticalOffset={0}>
        <View>
          <SignUpLayout
            setText={getTextFromInput}
            onPress={handleButtonPress}
          />
        </View>
      </KeyboardAvoidingView >
    </SafeAreaView >
  )
}

export default SignUp;