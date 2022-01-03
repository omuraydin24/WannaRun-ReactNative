import React from 'react';
import { View, Text } from 'react-native';
import { Formik } from "formik"
import Button from '../../../../Components/Button';
import Input from "../../../../Components/Input";

import styles from "./SignUpLayout.style";

const SignUpLayout = ({ setText, onSubmit, onPress }) => {

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>🏃‍♂️</Text>
      <Input label="Email" />
      <Input label="Password" />
      <Input label="Password Again" />
      <Button label="Sign In" />
      <Button label="Back" theme="outline" onPress={onPress} />
    </View>
  );
}
export default SignUpLayout;
