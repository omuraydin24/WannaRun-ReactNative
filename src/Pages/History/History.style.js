import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 25,
    textAlign: "center",
    marginTop: 10,
    color: "#1a237e"
  },
});