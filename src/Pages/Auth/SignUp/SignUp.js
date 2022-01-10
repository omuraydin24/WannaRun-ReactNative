import React from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SignUpLayout from './SignUpLayout/SignUpLayout';
import auth from '@react-native-firebase/auth';

const SignUp = () => {
  const navigation = useNavigation();

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