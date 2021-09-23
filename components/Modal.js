import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import { BannerAd, BannerAdSize, TestIds } from '@react-native-firebase/admob';

const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-3695136153697131/1664245625';

export default function ModalStart() {
    const [visible, setVisible] = useState(true);
    return (
        <View>
            <Modal
                animationType='slide'
                visible={visible}
            ><View>
                    <Text style={styles.text}>Gasolina ou Etanol, qual abastecer?</Text>
                    <TouchableOpacity
                        style={styles.touch}
                        color='rgb(120, 163, 173)'
                        onPress={() => setVisible(false)}
                    ><Text style={styles.textTouch}>COMEÇAR</Text>
                    </TouchableOpacity>
                    <View style={styles.ads}>
                        <BannerAd
                            unitId={adUnitId}
                            size={BannerAdSize.LARGE_BANNER}
                            requestOptions={{
                                requestNonPersonalizedAdsOnly: true,
                            }}
                        />
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 30,
        marginTop: 60
    },
    touch: {
        backgroundColor: 'rgb(120, 163, 173)',
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textTouch: {
        fontSize: 18,
    },
    ads: {
        alignItems: 'center',
        marginTop: 285,
    }
});
