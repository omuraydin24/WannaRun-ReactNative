import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
    padding: 10,
    justifyContent: 'space-between',
    backgroundColor: "#f0fcfc",
    borderRadius: 10,

  },
  values: {
    fontWeight: 'bold',
    fontSize: 20,
    margin: 5,
    color: "black",
  },
  username: {
    fontWeight: 'bold',
    fontSize: 12,
    margin: 5,
    color: "black",

  },
  distance: {
    fontWeight: 'bold',
    fontSize: 20,
    margin: 5,
  },
  duration: {
    fontWeight: 'bold',
    fontSize: 20,
    margin: 5,
  },
  valuesContainer: {
    flex: 1,
    justifyContent: 'space-between'
  },
});