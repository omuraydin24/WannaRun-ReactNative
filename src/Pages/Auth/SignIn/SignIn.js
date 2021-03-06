import React from 'react';
import { Alert } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import auth from '@react-native-firebase/auth';
import SignInLayout from './SignInLayout';
import routes from '../../../Navigation/routes'

const SignIn = () => {
  const navigation = useNavigation();

  const handleNavigateSignUp = () => {
    navigation.navigate(routes.SIGN_UP_PAGE)
  }

  const handleSignIn = (formValues) => {
    try {
      auth()
        .signInWithEmailAndPassword(formValues.username, formValues.password)
      Alert.alert('WannaRun', 'Logged In successfully.')

    } catch (err) {
      Alert.alert('WannaRun', 'Wrong user information')
    }
  }

  return (
    <SignInLayout onSubmit={handleSignIn} onSignUpNavigate={handleNavigateSignUp} />
  );
}
export default SignIn;