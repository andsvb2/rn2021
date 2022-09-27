import React from 'react';
import {Button, Linking, StyleSheet, Text, View} from 'react-native';

const App: () => Node = () => {
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Teste qualquer</Text>
      <Button
        title={'Botão que abre o tutorial no youtube'}
        onPress={() => {
          Linking.openURL('https://youtu.be/ANdSdIlgsEw');
        }}
      />
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
