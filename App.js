import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const App: () => Node = () => {
  const [name, setName] = useState('Style Test');

  const onClickHandler = () => {
    setName('Style Test is Done!');
  };

  return (
    <View style={styles.body}>
      <Text style={styles.text}>{name}</Text>
      <View style={styles.button}>
        <Button title={'Atualiza State'} onPress={onClickHandler} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    width: '100%',
    height: '50%',
    backgroundColor: '#ffff00',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 10,
    borderColor: '#ff00ff',
    borderRadius: 10,
  },
  text: {
    color: '#000000',
    fontStyle: 'italic',
    fontSize: 40,
    margin: 10,
    textTransform: 'uppercase',
  },
  button: {
    width: 200,
    height: 60,
  },
});

export default App;
