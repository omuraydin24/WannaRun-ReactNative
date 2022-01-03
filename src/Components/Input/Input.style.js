import { StyleSheet, Dimensions } from 'react-native';
import { Metrics } from '../../Components/styles/metrics';
import { colorNames } from '../../Components/styles/colors';
const { width, height } = Dimensions.get('window');


export default StyleSheet.create({
  container: {
    margin: 5,
    padding: 5,
  },
  inputContainer: {
    backgroundColor: "blue",
    borderRadius: 5,
  },
  label: {
    fontWeight: "bold",
    color: "black"
  },
  input: {
    backgroundColor: "#eceff1",
    margin: 2,
    padding: 5,
    borderRadius: 5,
  },
});

