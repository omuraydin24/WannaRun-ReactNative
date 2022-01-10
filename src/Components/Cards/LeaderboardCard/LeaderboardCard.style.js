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
    backgroundColor: "#5c6bc0",
    borderRadius: 10,

  },
  values: {
    fontSize: 20,
    margin: 5,
    color: "white",
    textAlign: "right",
    flex: 1,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 17,
    margin: 5,
    color: "white",
    flex: 1,
  },
  
});