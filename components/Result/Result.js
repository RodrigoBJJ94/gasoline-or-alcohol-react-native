import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Result(props) {
    return (
        <View style={styles.block}>
            <Text style={styles.text}>Melhor combustível: {props.result}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    block: {
        marginBottom: 10,
    },
    text: {
        fontSize: 18,
    }
});
