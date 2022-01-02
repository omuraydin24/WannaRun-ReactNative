import { StyleSheet } from 'react-native';
import { Metrics } from '../../Components/styles/metrics';
import { colorNames } from '../../Components/styles/colors';


export default StyleSheet.create({
  container: {
    margin: 5,
    padding: 5,
  },
  inputContainer: {
    backgroundColor: "#e0e0e0",
    padding: 5,
    borderRadius: 5,
  },
  label: {
    fontWeight: "bold",
    color: "black"
  },
  input: {
    flex: 1,
  },
});

