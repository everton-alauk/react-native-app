import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 10,
        padding: 10,
    },
    name: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        textAlign: 'center'
    },
    card: {
        padding: 10,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'white',
        shadowColor: '#30C1DD',
        shadowRadius: 10,
        shadowOpacity: 0.6,
        elevation: 8,
        shadowOffset: {
          width: 0,
          height: 4
        },
        borderRadius: 5,
        margin: 10,
    },
    price: {
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center'
    },
});