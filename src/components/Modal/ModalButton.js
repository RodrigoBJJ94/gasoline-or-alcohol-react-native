import React from 'react';
import Styles from './Styles';
import { TouchableOpacity, Text } from 'react-native';

export default function ModalButton({ setVisible }) {
    return (
        <TouchableOpacity
            style={Styles.touch}
            color='rgb(120, 163, 173)'
            onPress={() => setVisible(false)}>
            <Text style={Styles.textTouch}>COMEÇAR</Text>
        </TouchableOpacity>
    );
};
