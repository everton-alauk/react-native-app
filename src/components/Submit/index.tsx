import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import { styles } from './styles';

interface Props {
    text: string;
    onPress: () => void;
}

export default function Submit(props: Props) {
    const { text, onPress } = props;

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress} style={styles.button}>
                <Text style={styles.text}>{text}</Text>
            </TouchableOpacity>
        </View>
    );
}