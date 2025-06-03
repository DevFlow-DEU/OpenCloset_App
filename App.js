import { WebView } from 'react-native-webview';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <WebView
      style={styles.container}
      source={{ uri: 'http://113.198.229.158:6199/' }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
});
