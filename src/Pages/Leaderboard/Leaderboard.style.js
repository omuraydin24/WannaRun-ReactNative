import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginHorizontal: 7,
    marginTop: 10,
  },
  header: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    color: "#1a237e",
    marginTop: 10,
  },
  title: {
    fontSize: 16,
    color: "#1a237e",
    fontWeight: "bold"

  }
});