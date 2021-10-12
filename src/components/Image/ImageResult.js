import React from 'react';
import Styles from './Styles';
import { View, Image, Text } from 'react-native';

export default function ImageResult(props) {
    return (
        <View style={Styles.block}>
            {props.fuel === '' ?
                <Text></Text>
                :
                props.fuel === 'G' ?
                    <Image
                        source={require('../../assets/img/bombG.png')}
                        style={Styles.bomb}
                    />
                    :
                    <Image
                        source={require('../../assets/img/bombA.png')}
                        style={Styles.bomb}
                    />
            }
        </View>
    );
};
