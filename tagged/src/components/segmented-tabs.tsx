import * as Haptics from 'expo-haptics';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, { useAnimatedStyle, withSpring } from 'react-native-reanimated';

import { Colors, Fonts, Gradients, Radius } from '@/constants/theme';

type Props<T extends string> = {
  tabs: { id: T; label: string }[];
  value: T;
  onChange: (id: T) => void;
};

/** A pill-shaped switcher with a gradient highlight that slides between tabs. */
export function SegmentedTabs<T extends string>({ tabs, value, onChange }: Props<T>) {
  const [width, setWidth] = useState(0);
  const tabWidth = width / tabs.length;
  const activeIndex = tabs.findIndex((t) => t.id === value);

  const indicatorStyle = useAnimatedStyle(() => ({
    width: tabWidth,
    transform: [{ translateX: withSpring(activeIndex * tabWidth, { damping: 18, stiffness: 180 }) }],
  }));

  return (
    <View style={styles.container} onLayout={(e) => setWidth(e.nativeEvent.layout.width - 8)}>
      {width > 0 && (
        <Animated.View style={[styles.indicator, indicatorStyle]}>
          <LinearGradient
            colors={Gradients.hot}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={StyleSheet.absoluteFill}
          />
        </Animated.View>
      )}
      {tabs.map((tab) => (
        <Pressable
          key={tab.id}
          style={styles.tab}
          onPress={() => {
            if (tab.id !== value) Haptics.selectionAsync();
            onChange(tab.id);
          }}>
          <Text style={[styles.label, tab.id !== value && styles.labelIdle]}>{tab.label}</Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 4,
    borderRadius: Radius.pill,
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  indicator: {
    position: 'absolute',
    top: 4,
    bottom: 4,
    left: 4,
    borderRadius: Radius.pill,
    overflow: 'hidden',
  },
  tab: { flex: 1, paddingVertical: 10, alignItems: 'center' },
  label: { color: Colors.text, fontFamily: Fonts.heavy, fontSize: 14, letterSpacing: 0.3 },
  labelIdle: { color: Colors.textMuted },
});
