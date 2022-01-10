import React, { useState } from 'react';
import { View, Text, SafeAreaView, KeyboardAvoidingView, TouchableOpacity, Keyboard, Alert } from 'react-native';
import Input from '../../../Components/Input';
import AuthButton from '../../../Components/Button';
import SignUpLayout from './SignUpLayout/SignUpLayout';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';


const SignUp = props => {
  const navigation = useNavigation();
  const [isLogin, setIsLogin] = useState(true);

  const handleReturnSignIn = () => {
    if (!navigation.canGoBack()) {
      return;
    }
    navigation.goBack();
  }

  const handleSignUp = (formValues) => {

    if (formValues.password !== formValues.passwordAgain) {
      Alert.alert('WannaRun', 'Mismatched password')
      return;
    }
    try {
      auth()
        .createUserWithEmailAndPassword(
          formValues.username, formValues.password
        )
      Alert.alert('WannaRun', 'User created. Now you can sign in.')

    } catch (err) {
      Alert.alert('WannaRun', 'An error occurred')
    }


  }

  return (
    <SignUpLayout onSubmit={handleSignUp} onPress={handleReturnSignIn} />
  )
}

export default SignUp;