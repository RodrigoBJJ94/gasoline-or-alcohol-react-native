import React, { useState } from 'react';
import Styles from './Styles';
import { View } from 'react-native';
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

  const clean = () => {
    setResult('');
  };

  return (
    <View style={Styles.body}>
      <StatusBarMain />
      <ModalMain />
      <Gasoline clean={clean} setGasoline={setGasoline} />
      <Alcohol clean={clean} setAlcohol={setAlcohol} />
      <ButtonCalculate gasoline={gasoline} alcohol={alcohol} setResult={setResult} />
      <Result result={result} />
      <ImageResult fuel={result.charAt(0)} />
      <Banner />
    </View>
  );
};
