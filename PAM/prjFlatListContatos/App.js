import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import {styles} from './components/styles.js';
import {DATA} from './components/data.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
      <StatusBar style="auto" />
    </View>
  );
};