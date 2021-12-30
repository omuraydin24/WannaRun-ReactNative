import {StyleSheet} from 'react-native';
import { Fonts } from '../../../StylingConstants';
import {colorNames } from '../../Theming'

const styles = (Colors)=> StyleSheet.create({
    touchable: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },  
    text: {
        fontSize: 18,
        color: Colors[colorNames.auth.coloredButtonText],
        fontFamily: Fonts.type.bold
    },
});

export default styles;
