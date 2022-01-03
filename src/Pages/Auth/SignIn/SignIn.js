import React from 'react';
import { View, Alert, Text } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import Input from '../../../Components/Input'
import Button from '../../../Components/Button'
import routes from '../../../Navigation/routes'
import auth from '@react-native-firebase/auth';
import SignInLayout from './SignInLayout';

import { ValidationScheme } from '../../../Components/utils/ValidationScheme'


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
      navigation.navigate(routes.DASHBOARD_PAGE)
      console.log("formvalues", formValues)

    } catch (err) {
      console.log(err)
      Alert.alert('WannaRun', 'An error occurred')
    }
  }

  return (
    <SignInLayout onSubmit={handleSignIn} onSignUpNavigate={handleNavigateSignUp} />
  );
}


export default SignIn;