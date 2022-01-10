import { StyleSheet } from 'react-native';

export default {
    default: StyleSheet.create({
        container: {
            margin: 10,
            backgroundColor: "blue",
            padding: 5,
            borderRadius: 10,
            alignItems: "center",
            borderWidth: 1,
            borderColor: "blue"
        },

        label: {
            fontWeight: "bold",
            color: "white"
        },

    }),
    outline: StyleSheet.create({
        container: {
            margin: 10,
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

