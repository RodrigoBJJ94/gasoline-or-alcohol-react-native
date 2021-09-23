import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

export default props => {
    return (
        <View style={styles.block}>
            {props.fuel === '' ?
                <Text></Text>
                :
                props.fuel === 'G' ?
                    <Image
                        source={require('../assets/img/bombG.png')}
                        style={styles.bomb}
                    />
                    :
                    <Image
                        source={require('../assets/img/bombA.png')}
                        style={styles.bomb}
                    />
            }
        </View>
    );
};

const styles = StyleSheet.create({
    block: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    bomb: {
        resizeMode: 'stretch',
    }
});