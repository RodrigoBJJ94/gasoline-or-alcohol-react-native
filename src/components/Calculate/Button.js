import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Styles from './Styles';

export default function Button({calculate}) {
    return (
        <TouchableOpacity style={Styles.button} onPress={calculate}>
            <Text style={Styles.buttonText}>Calcular</Text>
        </TouchableOpacity>
    );
};
