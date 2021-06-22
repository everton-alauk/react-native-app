import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 10,
        padding: 10,
    },
    logo: {
        marginTop: 20,
        padding: 10,
        height: 350,
        width: Dimensions.get('window').width - 50,
        borderRadius: 20
    },
    button: {
        borderWidth: 2,
        borderColor: "thistle",
        borderRadius: 50,
        padding: 10,

    },
});