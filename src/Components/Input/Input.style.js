import { StyleSheet } from 'react-native';
import { Metrics } from '../../Components/styles/metrics';
import { colorNames } from '../../Components/styles/colors';


const styles = (Colors) => StyleSheet.create({
  inputContainer: {
    flex: 1,
    paddingHorizontal: Metrics.textMargin,
    backgroundColor: Colors[colorNames.auth.inputBackground]
  },
  input: {
    flex: 1,
    fontSize: Fonts.size(15),
    color: Colors[colorNames.auth.inputText]
  },
});

export default styles;
