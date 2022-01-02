import { StyleSheet } from 'react-native';
import { Metrics } from '../../Components/styles/metrics';
import { colorNames } from '../../Components/styles/colors';


export default {
    default: StyleSheet.create({
        container: {
            margin: 5,
            padding: 10,
            backgroundColor: "blue",
            padding: 5,
            borderRadius: 10,
            alignItems: "center",
        },

        label: {
            fontWeight: "bold",
            color: "white"
        },

    }),
    outline: StyleSheet.create({
        container: {
            margin: 5,
            padding: 10,
            borderColor: "blue",
            borderWidth: 1,
            padding: 5,
            borderRadius: 10,
            alignItems: "center",
        },

        label: {
            fontWeight: "bold",
            color: "black"
        },
    }),

};

