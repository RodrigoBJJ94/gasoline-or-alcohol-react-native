import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import GasolineText from './GasolineText';

export default function Gasoline(props) {
    return (
        <View style={styles.block}>
            <GasolineText />
            <TextInput
                style={styles.textInput}
                keyboardType='numeric'
                onChangeText={text => props.modify(text)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    block: {
        marginBottom: 10,
    },
    textInput: {
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 4,
        height: 40,
    }
});
