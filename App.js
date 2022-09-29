import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const App: () => Node = () => {
  const [sum, setSum] = useState(0);
  const [clickCounter, setClickCounter] = useState(0);

  const onClickHandler = () => {
    setSum(sum + 5);
    setClickCounter(clickCounter + 1);
  };

  return (
    <View style={styles.body}>
      <Text style={styles.text}>{sum}</Text>
      <Button title={'Adiciona'} onPress={onClickHandler} />
      <Text style={styles.text}>Você clicou {clickCounter} vezes.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0000ff',
  },
  text: {
    color: '#ffffff',
    fontStyle: 'italic',
    fontSize: 20,
    margin: 10,
  },
});

export default App;
