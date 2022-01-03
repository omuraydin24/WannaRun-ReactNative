import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  logo: {
    fontSize: 100,
textAlign: "center",
marginBottom: 50,
  }
})