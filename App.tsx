import { useRef, type ElementRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { WebView, type WebViewProps } from 'react-native-webview';

const WEB_URL = process.env.EXPO_PUBLIC_WEB_URL;

function AppContent() {
  const insets = useSafeAreaInsets();
  const webViewRef = useRef<ElementRef<typeof WebView>>(null);

  const injectedJs = `
    document.documentElement.style.setProperty('--native-safe-top', '${insets.top}px');
    document.documentElement.style.setProperty('--native-safe-bottom', '${insets.bottom}px');
    true;
  `;

  // 카카오 로그인 리다이렉트처럼 웹뷰 안에서 실제 페이지 이동(리로드)이 일어나면
  // injectedJavaScriptBeforeContentLoaded는 다시 실행되지 않아서, 로드/네비게이션이 바뀔 때마다 재주입함.
  // onLoadEnd 하나만으로는 리다이렉트 체인에서 타이밍이 안 맞는 경우가 있어 이중으로 건다.
  const reinject = () => {
    webViewRef.current?.injectJavaScript(injectedJs);
  };
  const handleLoadEnd: WebViewProps['onLoadEnd'] = reinject;
  const handleNavigationStateChange: WebViewProps['onNavigationStateChange'] =
    reinject;

  return (
    <View style={styles.container}>
      {WEB_URL ? (
        <WebView
          ref={webViewRef}
          style={styles.webview}
          source={{ uri: WEB_URL }}
          bounces={false}
          overScrollMode="never"
          cacheEnabled={false}
          injectedJavaScriptBeforeContentLoaded={injectedJs}
          onLoadEnd={handleLoadEnd}
          onNavigationStateChange={handleNavigationStateChange}
        />
      ) : (
        <View style={styles.message}>
          <Text>
            EXPO_PUBLIC_WEB_URL 환경변수가 설정되지 않았습니다. .env 파일을 확인해 주세요.
          </Text>
        </View>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <AppContent />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  webview: {
    flex: 1,
  },
  message: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
});
