import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, View } from 'react-native';

import { Colors, Gradients } from '@/constants/theme';

/** The deep violet backdrop with soft coloured glows behind every screen. */
export function GradientBackground() {
  return (
    <View style={StyleSheet.absoluteFill} pointerEvents="none">
      <LinearGradient colors={Gradients.background} style={StyleSheet.absoluteFill} />
      <View style={[styles.glow, styles.glowPink]} />
      <View style={[styles.glow, styles.glowBlue]} />
    </View>
  );
}

const styles = StyleSheet.create({
  glow: {
    position: 'absolute',
    width: 320,
    height: 320,
    borderRadius: 160,
    opacity: 0.22,
  },
  glowPink: { backgroundColor: Colors.pink, top: -140, right: -120 },
  glowBlue: { backgroundColor: Colors.blue, top: 180, left: -200, opacity: 0.14 },
});
