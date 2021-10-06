import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function ButtonCalculate(props) {
    return (
        <View style={styles.block}>
            <TouchableOpacity
                style={styles.button}
                onPress={props.click}
            >
                <Text style={styles.buttonText}>Calcular</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    block: {
        marginBottom: 10,
    },
    button: {
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: 'rgb(120, 163, 173)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 7,
        padding: 15,
    },
    buttonText: {
        textTransform: 'uppercase',
        color: 'white',
        fontSize: 16,
    }
});
