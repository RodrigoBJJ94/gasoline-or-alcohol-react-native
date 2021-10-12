import React from 'react';
import Styles from './Styles';
import { View, Text, TouchableOpacity } from 'react-native';

export default function ButtonCalculate(props) {
    return (
        <View style={Styles.block}>
            <TouchableOpacity
                style={Styles.button}
                onPress={props.click}
            >
                <Text style={Styles.buttonText}>Calcular</Text>
            </TouchableOpacity>
        </View>
    );
};
