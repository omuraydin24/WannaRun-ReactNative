import React from 'react';
import { View, Text, Image } from 'react-native';
import { Formik } from "formik"
import Button from '../../../../Components/Button';
import Input from "../../../../Components/Input";
import auth from '@react-native-firebase/auth';

import styles from "./SignUpLayout.style";
// import { SignUpScheme } from "../../../../Components/utils/ValidationScheme";

const SignUpLayout = ({ onSubmit, onPress }) => {

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../../../../assets/images/logo.png')} />
      <Formik
        initialValues={{ username: '', password: '' }}
        // validationSchema={SignUpScheme}
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
            <Input
              label="Password Again"
              secureTextEntry
              value={values.passwordAgain}
              onChangeText={handleChange('passwordAgain')}
              onBlur={handleBlur('passwordAgain')}
            />
            <Text style={styles.validationText}>{touched.password && errors.password}</Text>
            <Button label="Sign Up" onPress={handleSubmit} />
          </View>
        )}
      </Formik>
      <Button label="Back" theme="outline" onPress={onPress} />
    </View >
  );
}
export default SignUpLayout;

