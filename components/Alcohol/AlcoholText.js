import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function AlcoholText() {
    return (
        <Text style={styles.text}>Digite o preço do Etanol:</Text>
    );
};

const styles = StyleSheet.create({
    text: {
        marginBottom: 10,
    }
});
