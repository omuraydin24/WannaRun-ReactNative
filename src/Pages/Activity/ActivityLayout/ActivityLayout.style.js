import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    position: "relative"
  },
  map: {
    height: height * 0.6,
    marginTop: -20,

  },
  mapContainer: {

  },
  infoContainer: {
    top: 0,
    height: 200,
    width: width,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: "#816cf9",
    zIndex: 10,
    alignItems: "center",
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
    color: "white",
    fontSize: 25,
  },
  innerContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  valueContainer: {
    alignItems: "center",
  },
  distance: {
    color: "white",
    fontSize: 25,
  },
  distanceText: {
    color: "white",
    fontSize: 20,
  },
  statusButtonContainer: {
    position: "absolute",
    bottom: 250,
    left: (width / 2) - (75 / 2),
    zIndex: 100,
    width: 75,
    height: 75,
    borderRadius: 100,
    backgroundColor: "coral",
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    marginVertical: 5,
    backgroundColor: 'white',
    borderRadius: 24,
    width: 100,
  },
  barChart: {
    marginVertical: 8,
    borderRadius: 16
  }
});