import React from 'react';
import Styles from './Styles';
import { Text, View } from 'react-native';

export default function Result({ result }) {
    return (
        <View style={Styles.block}>
            <Text style={Styles.text}>{result > 0 || result !== '' ? `Melhor combustível: ${result}` : ''}</Text>
        </View>
    );
};
