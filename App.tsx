
import { StyleSheet, Text, View } from 'react-native';
import Main from './src/components/Main';

export default function App() {
  return (
    <View style={style.fondoApp}>
      <Main/>
    </View>
  );
}

const style= StyleSheet.create({
fondoApp: {
  backgroundColor: '#333E51',
  borderRadius: 50
}
})