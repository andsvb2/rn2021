import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const App = () => {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const onPressHandler = () => {
    setSubmitted(!submitted);
  };
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Please write your name: </Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. John"
        /* A linha abaixo atualiza o estado de name com o que
         * for digitado. */
        onChangeText={value => setName(value)}
      />
      {/* <Button
        title={submitted ? 'Clear' : 'Submit'}
        onPress={onPressHandler}
        color='#00f'
      />*/}
      <TouchableOpacity
        style={styles.button}
        onPress={onPressHandler}
        activeOpacity={0.2} // valor padrão desse prop
      >
        {/* o título do botão está definido na linha abaixo */}
        <Text style={styles.text}>{submitted ? 'Clear' : 'Submit'}</Text>
      </TouchableOpacity>
      {submitted ? (
        <Text style={styles.text}>You are registered as {name}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 20,
    margin: 10,
  },
  input: {
    width: 200,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#00ff00',
    width: 150,
    height: 50,
    alignItems: 'center',
  },
});

export default App;
