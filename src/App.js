import React, { useState } from 'react';
import Styles from './Styles';
import { Alert, View } from 'react-native';
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
    <View style={Styles.body}>
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
