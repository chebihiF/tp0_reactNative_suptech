
import { 
  StyleSheet, 
  Text, 
  View,
  SafeAreaView,
  Platform,
  StatusBar
 } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello native</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0
  },
});
