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
  midContainer: {
    flex: 1,
    backgroundColor: "#806bf8",
    height: height * 0.3,
    width: width * 0.93,
    borderRadius: 40,
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 25,
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
  },
  infoContainer: {
    backgroundColor: "coral",
    width: width * 0.93,
    padding: 10,
    borderRadius: 25,
    marginTop: 10,
  },
  infoTitle: {
    color: "white",
    fontSize: 17,
    textAlign: "center",
  },
  infoValue:{
    fontWeight: "bold"
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
    backgroundColor: "#fe7a59",
  },
  icon: {
    position: "absolute",
    bottom: 50,
  },
  leaderboard: {
    backgroundColor: "#ffbf87",
    
  },
  signout: {
    backgroundColor: "#f44336"
  }
});