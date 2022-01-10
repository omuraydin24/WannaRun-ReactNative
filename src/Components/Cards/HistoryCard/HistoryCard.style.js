import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#5c6bc0",
    borderRadius: 10,
    marginTop: 10,
    marginHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  bottomContainer: {
    flexDirection: "row",

  },
  title: {
    fontWeight: "bold",
    fontSize: 25,
    textAlign: "center",
    marginTop: 10,
    color: "#1a237e"
  },

  goBack: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 10,
  },
  infoContainer: {
    flex: 1,
  },
  thumbnail: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },

  date: {
    fontSize: 15,
    color: "white",
    fontWeight: "bold",
  },
  durationText: {
    fontSize: 15,
    color: "white",
    fontWeight: "bold",
  },
  subContainer: {
    alignItems: "center",
    justifyContent: "space-around",
    flex: 1,
  },
  distanceText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
  },
  distanceNumber: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },



});