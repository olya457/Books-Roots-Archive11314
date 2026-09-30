import React, { useCallback, useState } from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StorageProvider, useStorage } from './src/state/Storage';
import { Loader, Onboarding } from './src/screens/Welcome';
import { Navigation } from './src/navigation/Navigation';
import { ScreenBackground } from './src/components/ScreenBackground';
import { colors } from './src/theme';
function Application() {
  const [loaded, setLoaded] = useState(false);
  const { data, ready } = useStorage();
  const finish = useCallback(() => setLoaded(true), []);
  if (!loaded || !ready) {
    return <Loader onFinish={finish} />;
  }
  return (
    <ScreenBackground>
      <SafeAreaView
        style={{ flex: 1 }}
        edges={['top', 'bottom', 'left', 'right']}
      >
        {data.onboarded ? <Navigation /> : <Onboarding />}
      </SafeAreaView>
    </ScreenBackground>
  );
}
export default function App() {
  return (
    <SafeAreaProvider>
      <StorageProvider>
        <StatusBar
          barStyle="light-content"
          backgroundColor={colors.background}
        />
        <Application />
      </StorageProvider>
    </SafeAreaProvider>
  );
}
