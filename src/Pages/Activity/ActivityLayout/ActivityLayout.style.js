import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 40,
  },
  timer: {
    marginVertical: 10,
  },
  timerText: {
    fontSize: 20,
  },
  button: {
    marginVertical: 5,
    backgroundColor: 'white',
    borderRadius: 24,
    width: 100,
  },
});