import { Dimensions, Platform, StatusBar } from 'react-native';

const { width, height } = Dimensions.get('window');
const statusbarHeight = StatusBar.currentHeight;

const Metrics = {
  width,
  height,
  statusbarHeight,
  marginHorizontal: width * 0.05,
  marginHorizontalLarge: width * 0.1,
  marginVertical: width * 0.05,
  horizontalLineHeight: 1,
  navBarHeight: (Platform.OS === 'ios') ? 64 : 54,
  tabHeight: width * 0.15,
  borderRadiusFullRound: 1000,
  borderRadiusStandard: 10,
  borderRadiusSmall: 5,
  textMargin: width * 0.03,
  boxNormalHeight: width * 0.12,
  boxTallHeight: width * 0.2,
  drawerWidth:180,
};

export default Metrics;
