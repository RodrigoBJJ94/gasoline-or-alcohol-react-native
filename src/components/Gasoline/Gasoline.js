import React from 'react';
import Styles from './Styles';
import { View, TextInput } from 'react-native';
import GasolineText from './GasolineText';

export default function Gasoline(props) {
    return (
        <View style={Styles.block}>
            <GasolineText />
            <TextInput
                style={Styles.textInput}
                keyboardType='numeric'
                onChangeText={text => props.modify(text)}
            />
        </View>
    );
};
