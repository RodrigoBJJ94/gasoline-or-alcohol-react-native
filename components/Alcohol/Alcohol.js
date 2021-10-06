import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import AlcoholText from './AlcoholText';

export default function Alcohol(props) {
    return (
        <View style={styles.block}>
            <AlcoholText />
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
