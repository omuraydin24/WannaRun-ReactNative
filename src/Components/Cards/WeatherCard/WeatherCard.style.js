import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: "row",
    width: 120,
    justifyContent: "space-between",
    marginTop: 10,
  },
  weatherText: {
    color: "white",
    fontSize: 15,
  },
  conditionImage: {
    width: 35,
    height: 35,
  },
  subContainer: {
    alignItems: "center",
  }
});