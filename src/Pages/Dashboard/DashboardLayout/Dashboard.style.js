import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    backgroundColor: "white",

  },
  activityImage: {
    width: 150,
    resizeMode: "contain"
  },
  topContainer: {
    flex: 1,
    backgroundColor: "#806bf8",
    height: height * 0.3,
    width: width * 0.93,
    borderRadius: 40,
    justifyContent: "space-around",
    alignItems: "center",
    margin: 15,
    paddingBottom: 20,
  },
  welcomeContainerTitle: {
  },
  bottomContainer: {
    flex: 1,
    paddingLeft: 10,

  },
  innerContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: width * 0.90,
    marginTop: 30,
    alignItems: "center",
  },
  subContainers: {
    position: "relative",
    width: width * 0.35,
    height: 200,
    borderRadius: 25,
    backgroundColor: "#ffbf87",
    marginHorizontal: 5,
    alignItems: "center",
    marginTop: 40,
  },

  // header: {
  //   position: "absolute",
  //   top: 0,
  //   flexDirection: "row",
  //   justifyContent: 'space-between',
  //   width: width * 0.95,
  // },
  headerText: {
    fontSize: 20,
    marginTop: 15,
  },
  leaderboardContainer: {
    width: width * 0.35,
    height: 200,
    backgroundColor: "#b1bffe",
    borderRadius: 30,

  },
  imageContainer: {
    // backgroundColor: "#c1e6ff",
  },
  mainTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",

  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: "white",
    margin: 15,
    textAlign: 'left',
    width: width * 0.35,
    padding: 5,
    textAlign: 'center',
  },
  activity: {
    backgroundColor: "#806af8",
  },
  activityLogo: {
    width: 100,
    height: 100,
    tintColor: "white",
    marginRight: 50,
  },
  history: {
    backgroundColor: "#ffbf87",
  },
  icon: {
    position: "absolute",
    bottom: 50,
  },
  leaderboard: {
    backgroundColor: "#fe7a59",

  }
});