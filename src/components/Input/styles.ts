
import { Dimensions, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    label: {
        fontSize: 20,
        marginBottom: 5,
    },
    input: {
        height: 50,
        fontSize: 15,
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 20,
        backgroundColor: '#fff',
        borderColor: '#fff',
        paddingHorizontal: 10,
        width: Dimensions.get('screen').width - 40,
        color: '#000'
    },
});