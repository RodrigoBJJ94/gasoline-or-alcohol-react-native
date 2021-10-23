import React from 'react';
import Styles from './Styles';
import { View, TextInput } from 'react-native';
import AlcoholText from './AlcoholText';

export default function Alcohol({ clean, setAlcohol }) {
    const sAlcohol = (value) => {
        clean();
        setAlcohol(value);
    };

    return (
        <View style={Styles.block}>
            <AlcoholText />
            <TextInput style={Styles.textInput} keyboardType='numeric' onChangeText={text => sAlcohol(text)} />
        </View>
    );
};
