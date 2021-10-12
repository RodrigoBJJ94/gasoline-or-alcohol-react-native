import React from 'react';
import Styles from './Styles';
import { Text, View } from 'react-native';

export default function Result(props) {
    return (
        <View style={Styles.block}>
            <Text style={Styles.text}>Melhor combustível: {props.result}</Text>
        </View>
    );
};
