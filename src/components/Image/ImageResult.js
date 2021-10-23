import React from 'react';
import Styles from './Styles';
import { View, Image, Text } from 'react-native';

export default function ImageResult({ fuel }) {
    return (
        <View style={Styles.block}>
            {fuel === '' ? <Text></Text>
                : fuel === 'G'
                    ? <Image
                        source={require('../../assets/img/bombG.png')}
                        style={Styles.bomb} />
                    : <Image
                        source={require('../../assets/img/bombA.png')}
                        style={Styles.bomb} />
            }
        </View>
    );
};
