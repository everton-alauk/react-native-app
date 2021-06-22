
import { Dimensions, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    button: {
        backgroundColor: 'white',
        padding: 10,
        width: Dimensions.get('window').width - 50,
        borderColor: 'black',
        borderRadius: 5,
        shadowColor: '#30C1DD',
        shadowRadius: 10,
        shadowOpacity: 0.6,
        elevation: 8,
        shadowOffset: {
          width: 0,
          height: 4
        },
    },
    text: {
        textAlign: 'center',
        fontSize: 16,
    }
});
