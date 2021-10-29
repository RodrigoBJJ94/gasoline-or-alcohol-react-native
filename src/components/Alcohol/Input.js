import React from 'react';
import { TextInput } from 'react-native';
import Styles from './Styles';

export default function Input({ sAlcohol }) {
    return (
        <TextInput style={Styles.textInput} keyboardType='numeric' onChangeText={text => sAlcohol(text)} />
    );
};
