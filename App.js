
import { 
  StyleSheet, 
  Text,
  Image, 
  Button,
  View,
  Alert,
  SafeAreaView,
  Platform,
  StatusBar,
  TouchableWithoutFeedback,
  TouchableOpacity
 } from 'react-native';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={2} onPress={()=>console.log("text tapped")}>A React component for displaying text.
            Text supports nesting, styling, and touch handling.
            In the following example, the nested title and body 
            text will inherit the fontFamily from styles.baseText, 
            but the title provides its own additional styles. 
            The title and body will stack on top of each other on 
            account of the literal newlines</Text>
      <TouchableOpacity  onPress={()=>console.log("Image tapped")}>
        <Image 
          source={{
          uri: "https://picsum.photos/200",
          width: 200,
          height: 200
        }} />
      </TouchableOpacity>
      <Image style={styles.myImage} source={require('./assets/favicon.png')} /> 
      <Button 
        title='Click me' 
        color='orange' 
        onPress={()=>Alert.alert('My title', 'My Message', [
          {text: 'YES', onPress: ()=>console.log("Yes Pressed")},
          {text: 'No', onPress: ()=>console.log("No Pressed")}
        ])} />


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0
  }, myImage: {
    width: 100,
    height: 100
  }
});
