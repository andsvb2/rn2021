import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const App: () => Node = () => {
  const [name, setName] = useState('Anderson');
  const [session, setSession] = useState({number: 6, title: 'State'});
  const [current, setCurrent] = useState(true);

  const onClickHandler = () => {
    setName('Anderson Vieira');
    setSession({number: 7, title: 'Style'});
    setCurrent(false);
  };

  return (
    <View style={styles.body}>
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.text}>
        Esta é a sessão de número {session.number} e é sobre {session.title}
      </Text>
      <Text style={styles.text}>
        {current ? 'sessão atual' : 'próxima sessão'}
      </Text>
      <Button title={'Atualiza State'} onPress={onClickHandler} />
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
