import React from 'react';
import Styles from './Styles';
import { View } from 'react-native';
import Text from './Text';
import Input from './Input';

export default function Alcohol({ clean, setAlcohol }) {
    const sAlcohol = (value) => {
        clean();
        setAlcohol(value);
    };

    return (
        <View style={Styles.block}>
            <Text />
            <Input sAlcohol={sAlcohol} />
        </View>
    );
};
