import React from 'react';
import Styles from './Styles';
import { View, Alert } from 'react-native';
import Button from './Button';

export default function ButtonCalculate({ gasoline, alcohol, setResult }) {
    const calculate = () => {
        if (!gasoline) {
            Alert.alert('Informe o preço da gasolina!');
            return;
        };

        if (!alcohol) {
            Alert.alert('Informe o preço do etanol!');
            return;
        };

        let res;
        let calc = ((alcohol / gasoline) * 100).toFixed(1);

        if (calc > 70) {
            res = 'Gasolina';
        } else {
            res = 'Etanol';
        };
        setResult(res);

        Alert.alert(`Melhor combustível`, `O Etanol está custando ${calc}% da Gasolina. ${res} está valendo mais a pena. `);
    };

    return (
        <View style={Styles.block}>
            <Button calculate={calculate} />
        </View>
    );
};
