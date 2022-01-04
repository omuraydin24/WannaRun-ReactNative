import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#eaeaea",
    borderRadius: 10,
    marginTop: 10,
    marginHorizontal: 10,
    flexDirection: "row",
  },
  bottomContainer: {
    flexDirection: "row",

  },
  infoContainer: {
    flex: 1,
  },
  thumbnail: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },

  durationNumber: {
    fontSize: 27,
    color: "black",
  },
  durationText: {
    fontSize: 15,
    color: "black",
  },
  subContainer: {
    alignItems: "center",
    justifyContent: "space-around",
    flex: 1,
  },
  distanceText: {
    color: "black",
    fontSize: 14,
  },
  distanceNumber: {
    color: "black",
    fontSize: 20,
  },
  paceText: {
    color: "black",
    fontSize: 14,
  },
  paceNumber: {
    color: "black",
    fontSize: 20,
  },

});