import React from 'react';
import { StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { backgroundGradient } from '../theme';

export function ScreenBackground({ children }: { children: React.ReactNode }) {
  return (
    <LinearGradient
      colors={backgroundGradient}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={local.background}
    >
      {children}
    </LinearGradient>
  );
}

const local = StyleSheet.create({ background: { flex: 1 } });
