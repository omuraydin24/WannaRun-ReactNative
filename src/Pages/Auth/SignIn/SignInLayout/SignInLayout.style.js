import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    justifyContent: "center",
    marginTop: 100,
  },
  logo: {
    resizeMode: 'contain',
    marginBottom: 10,
    alignSelf: 'center',
    height: 100,
  },
  validationText: {
    color: "crimson",
    fontWeight: "bold",
    marginHorizontal: 10,
  }
})