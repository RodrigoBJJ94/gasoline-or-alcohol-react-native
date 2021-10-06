import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function ModalTitle() {
    return (
        <Text style={styles.text}>Gasolina ou Etanol, qual abastecer?</Text>
    );
};

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 30,
        marginTop: 60
    }
});
