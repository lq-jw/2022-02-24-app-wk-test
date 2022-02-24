import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>I am going banana!!!</Text>
      <Text style={styles.text3}>110919020 數位二甲</Text>
      <Text style={styles.text3}>賴芊綺</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text1: {
    fontSize: 20,
    color: '#D8B1A5',
  },
  text2: {
    fontSize: 30,
    color: '#fff',
  },
  text3: {
    fontSize: 30,
    color: '#D8B1A5'
  }
});
