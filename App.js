import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Gasoline from './components/Gasoline/Gasoline';
import Alcohol from './components/Alcohol/Alcohol';
import ButtonCalculate from './components/Calculate/ButtonCalculate';
import Result from './components/Result/Result';
import ImageResult from './components/Image/ImageResult';
import ModalMain from './components/Modal/ModalMain';
import StatusBarMain from './components/StatusBar/StatusBarMain';
import Banner from './components/Banner/Banner';

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
      <StatusBarMain />
      <ModalMain />
      <Gasoline modify={sGasoline} />
      <Alcohol modify={sAlcohol} />
      <ButtonCalculate click={calculate} />
      <Result result={result} />
      <ImageResult fuel={result.charAt(0)} />
      <Banner />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    padding: 10,
    backgroundColor: 'white'
  }
});
