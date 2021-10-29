import React from 'react';
import Styles from './Styles';
import { View } from 'react-native';
import GasolineText from './Text';
import Input from './Input';

export default function Gasoline({ clean, setGasoline }) {
    const sGasoline = (value) => {
        clean();
        setGasoline(value);
    };

    return (
        <View style={Styles.block}>
            <GasolineText />
            <Input sGasoline={sGasoline} />
        </View>
    );
};
