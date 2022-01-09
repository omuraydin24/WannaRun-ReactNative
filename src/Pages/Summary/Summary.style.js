import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#816cf9",
    width: width * 0.9,
    alignSelf: 'center',
    alignItems: 'center',
    marginVertical: 15,
    borderRadius: 20,

  },
  valuesContainer: {
    margin: 10,
    flex: 1,
  },

  scrollView: {
    flex: 1,
    position: "relative"
  },
  shareText: {
    fontWeight: "bold",
    color: "white",
    margin: 10,
    fontSize: 16,
  },
  shareContainer: {
    margin: 10,
    alignItems: "center",
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
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 40,
    color: "white",
    textAlign: "center",
  },
  value: {
    fontWeight: 'bold',
    fontSize: 30,
    color: "white",
    textAlign: "center",

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