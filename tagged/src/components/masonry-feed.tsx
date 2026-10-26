import { StyleSheet, View } from 'react-native';

import { OutfitCard } from '@/components/outfit-card';
import { Spacing } from '@/constants/theme';
import type { FeedOutfit } from '@/lib/data';

type Props = { outfits: FeedOutfit[]; width: number; onPressOutfit?: (outfit: FeedOutfit) => void };

/**
 * A Pinterest-style two-column layout. Each card goes into whichever
 * column is currently shorter, so the columns stay roughly even.
 */
export function MasonryFeed({ outfits, width, onPressOutfit }: Props) {
  const columnWidth = (width - Spacing.md) / 2;
  const columns: { outfit: FeedOutfit; index: number }[][] = [[], []];
  const heights = [0, 0];

  outfits.forEach((outfit, index) => {
    const col = heights[0] <= heights[1] ? 0 : 1;
    columns[col].push({ outfit, index });
    heights[col] += outfit.photo_aspect + 0.1;
  });

  return (
    <View style={styles.row}>
      {columns.map((column, c) => (
        <View key={c} style={{ width: columnWidth }}>
          {column.map(({ outfit, index }) => (
            <OutfitCard
              key={outfit.id}
              outfit={outfit}
              index={index}
              width={columnWidth}
              onPress={() => onPressOutfit?.(outfit)}
            />
          ))}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', justifyContent: 'space-between' },
});
