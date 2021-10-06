import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function ModalButton(props) {
    return (
        <TouchableOpacity
            style={styles.touch}
            color='rgb(120, 163, 173)'
            onPress={() => props.setVisible(false)}
        >
            <Text style={styles.textTouch}>COMEÇAR</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    touch: {
        backgroundColor: 'rgb(120, 163, 173)',
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textTouch: {
        fontSize: 18,
    }
});
