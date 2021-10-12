import React from 'react';
import Styles from './Styles';
import { View, TextInput } from 'react-native';
import AlcoholText from './AlcoholText';

export default function Alcohol(props) {
    return (
        <View style={Styles.block}>
            <AlcoholText />
            <TextInput
                style={Styles.textInput}
                keyboardType='numeric'
                onChangeText={text => props.modify(text)}
            />
        </View>
    );
};
