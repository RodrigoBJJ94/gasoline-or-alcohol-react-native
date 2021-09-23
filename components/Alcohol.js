import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

export default props => {
    return (
        <View style={styles.block}>
            <Text style={styles.text}>Digite o preço do Etanol:</Text>
            <TextInput
                style={styles.textInput}
                keyboardType='numeric'
                onChangeText={text => props.modify(text)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    block: {
        marginBottom: 10,
    },
    textInput: {
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 4,
        height: 40,
    },
    text: {
        marginBottom: 10,
    }
});