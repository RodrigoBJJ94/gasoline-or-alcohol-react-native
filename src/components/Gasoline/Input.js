import React from 'react';
import { TextInput } from 'react-native';
import Styles from './Styles';

export default function Input({ sGasoline }) {
    return (
        <TextInput style={Styles.textInput} keyboardType='numeric' onChangeText={text => sGasoline(text)} />
    );
};
