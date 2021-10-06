import React from 'react';
import { View, StyleSheet } from 'react-native';
import { BannerAd, BannerAdSize, TestIds } from '@react-native-firebase/admob';

const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-3695136153697131/9998617943';

export default function Banner() {
    return (
        <View style={styles.ads}>
            <BannerAd
                unitId={adUnitId}
                size={BannerAdSize.LARGE_BANNER}
                requestOptions={{ requestNonPersonalizedAdsOnly: true, }} />
        </View>
    );
};

const styles = StyleSheet.create({
    ads: {
        alignItems: 'center',
        marginTop: 159,
    }
});
