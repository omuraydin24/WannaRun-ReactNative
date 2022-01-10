import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({

  map: {
    height: height * 0.65,
    marginTop: -20,
    borderWidth: 2,
    borderColor: "#816cf9",
    borderRadius: 20,
  },
  mapContainer: {
  },
  goBack: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 10,
  },
  valuesContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  innerContainer: {
    alignItems: "center",
  },
  text: {
    fontSize: 23,
    color: "#616161"
  },
  value: {
    fontSize: 28,
    fontWeight: "bold",
    color: "black"
  },

  date: {
    fontSize: 18,
    textAlign: "center",
    color: "black",
    marginTop: 20,
  },
  

});