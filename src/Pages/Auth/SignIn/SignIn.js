import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import Input from '../../../Components/Input'
import Button from '../../../Components/Button'
import routes from '../../../Navigation/routes'


import styles from "./SignIn.style";

const SignIn = () => {
  const navigation = useNavigation();

  const handleNavigateSignUp = () => {
    navigation.navigate(routes.SIGN_UP_PAGE)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>🏃‍♂️</Text>
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={formValues => console.log(formValues)}>
        {({ handleChange, handleSubmit, values }) => (
          <View>
            <Input label="Email" value={values.username} onChangeText={handleChange('username')} />
            <Input label="Password" value={values.password} onChangeText={handleChange('password')} />
            <Button label="Sign In" onPress={handleSubmit} />
          </View>
        )}
      </Formik>
      <Button label="Sign Up" theme="outline" onPress={handleNavigateSignUp} />
    </View>
  );
}


export default SignIn;