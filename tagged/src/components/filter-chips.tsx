import * as Haptics from 'expo-haptics';
import { LinearGradient } from 'expo-linear-gradient';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import { Colors, Fonts, Gradients, Radius, Spacing } from '@/constants/theme';

export type ChipOption = { id: string; label: string };
export type ChipGroup = {
  key: string;
  options: ChipOption[];
  selected: string | null;
  onSelect: (id: string | null) => void;
};

/**
 * One scrollable row of chips, split into groups (price, style, season).
 * You can pick one chip per group; tap it again to clear it.
 */
export function FilterChips({ groups }: { groups: ChipGroup[] }) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.row}>
      {groups.map((group, g) => (
        <View key={group.key} style={styles.group}>
          {g > 0 && <View style={styles.divider} />}
          {group.options.map((option) => {
            const active = group.selected === option.id;
            return (
              <Pressable
                key={option.id}
                onPress={() => {
                  Haptics.selectionAsync();
                  group.onSelect(active ? null : option.id);
                }}>
                {active ? (
                  <LinearGradient
                    colors={Gradients.hot}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={[styles.chip, styles.chipActive]}>
                    <Text style={styles.label}>{option.label}</Text>
                  </LinearGradient>
                ) : (
                  <View style={styles.chip}>
                    <Text style={[styles.label, styles.labelIdle]}>{option.label}</Text>
                  </View>
                )}
              </Pressable>
            );
          })}
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  row: { paddingHorizontal: Spacing.lg, gap: Spacing.sm },
  group: { flexDirection: 'row', alignItems: 'center', gap: Spacing.sm },
  divider: { width: 1, height: 20, backgroundColor: Colors.border, marginHorizontal: Spacing.xs },
  chip: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: Radius.pill,
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  chipActive: { borderColor: 'transparent' },
  label: { color: Colors.text, fontFamily: Fonts.bodyBold, fontSize: 13 },
  labelIdle: { color: Colors.textMuted },
});
