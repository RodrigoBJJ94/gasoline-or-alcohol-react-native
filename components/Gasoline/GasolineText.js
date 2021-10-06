import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function GasolineText() {
    return (
        <Text style={styles.text}>Digite o preço da Gasolina:</Text>
    );
};

const styles = StyleSheet.create({
    text: {
        marginBottom: 10,
    }
});
