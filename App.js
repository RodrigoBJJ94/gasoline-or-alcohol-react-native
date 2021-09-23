import React, { useState } from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import Gasoline from './components/Gasoline';
import Alcohol from './components/Alcohol';
import ButtonCalculate from './components/ButtonCalculate';
import Result from './components/Result';
import ImageResult from './components/ImageResult';
import Modal from './components/Modal';
import { BannerAd, BannerAdSize, TestIds } from '@react-native-firebase/admob';

const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-3695136153697131/9998617943';

export default function App() {
  const [gasoline, setGasoline] = useState(0);
  const [alcohol, setAlcohol] = useState(0);
  const [result, setResult] = useState('');

  const calculate = () => {
    if (!gasoline) {
      alert('Informe o preço da gasolina!');
      return;
    }
    if (!alcohol) {
      alert('Informe o preço do etanol!');
      return;
    }

    let res;
    let calc = ((alcohol / gasoline) * 100).toFixed(1);

    if (calc > 70) {
      res = 'Gasolina';
    } else {
      res = 'Etanol';

    };
    setResult(res);
    alert(`O Etanol está custando ${calc}% da Gasolina. ${res} está valendo mais a pena. `);
  };

  const clean = () => {
    setResult('');
  };

  const sGasoline = (value) => {
    clean();
    setGasoline(value);
  };

  const sAlcohol = (value) => {
    clean();
    setAlcohol(value);
  };

  return (
    <View style={styles.body}>
      <Modal />
      <Gasoline modify={sGasoline} />
      <Alcohol modify={sAlcohol} />
      <ButtonCalculate click={calculate} />
      <Result result={result} />
      <ImageResult fuel={result.charAt(0)} />
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
  )
}

const styles = StyleSheet.create({
  body: {
    padding: 10,
    backgroundColor: 'white'
  },
  ads: {
    alignItems: 'center',
    marginTop: 159,
  }
});

