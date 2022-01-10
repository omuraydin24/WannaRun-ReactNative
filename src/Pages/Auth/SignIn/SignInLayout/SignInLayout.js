import React from 'react';
import { View, Image, Text } from 'react-native';
import { Formik } from "formik";
import { SignInScheme } from '../../../../Components/utils/ValidationScheme'
import Input from '../../../../Components/Input'
import Button from '../../../../Components/Button'

import styles from "./SignInLayout.style";

const SignIn = ({ onSubmit, onSignUpNavigate }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../../../../assets/images/logo.png')} />
      <Formik
        initialValues={{ username: '', password: '' }}
        validationSchema={SignInScheme}
        onSubmit={onSubmit}
      >
        {({ handleChange, handleSubmit, values, errors, touched, handleBlur }) => (
          <View>
            <Input
              label="Email"
              value={values.username}
              onChangeText={handleChange('username')}
              onBlur={handleBlur('username')}
            />
            <Text style={styles.validationText} >{touched.username && errors.username}</Text>
            <Input
              label="Password"
              secureTextEntry
              value={values.password}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
            />
            <Text style={styles.validationText}>{touched.password && errors.password}</Text>
            <Button label="Sign In" onPress={handleSubmit} />
          </View>
        )}
      </Formik>
      <Button label="Sign Up" theme="outline" onPress={onSignUpNavigate} />
    </View>
  );
}
export default SignIn;