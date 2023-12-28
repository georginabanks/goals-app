import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

export default function App() {
  return (
    <View style={ styles.appContainer }>
      <View style={ styles.inputContainer }>
        <TextInput placeholder={'Enter goal...'} style={ styles.textContainer } />
        <Button title={'+'} />
      </View>
      
      <View>
        <Text>List of goals</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: '10%'
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textContainer: {
    borderWidth: 1,
    borderColor: '#bcc8c4',
    padding: '2%',
    width: '80%',
    marginRight: '2%'
  }
});
