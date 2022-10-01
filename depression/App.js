import {
  StyleSheet,Text,TextInput,View,Image,TouchableOpacity,Alert, ScrollView,} 
from 'react-native';
import Cartilha from './componente/Cartilha';
export default function App() {
  return (
    <View style={{ flex: 2, backgroundColor: 'yellow', padding: 15 }}>
      <Cartilha />
    </View>
  );
}
const styles = StyleSheet.create({
    imagem2: {
    width:200,
    height:200   
  },
  container: {
    paddingTop: 50,
      imagem2: {
    width:200,
    height:200   
  }
  },
  stretch: {
    width: 50,
    height: 200,
    resizeMode: 'stretch',
  },
});
const DisplayAnImageWithStyle = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.stretch}
        source={require('@expo/snack-static/react-native-logo.png')}
      />
    </View>
  );
};

