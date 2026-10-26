import { Image } from 'expo-image';
import { StyleSheet, Text, View } from 'react-native';

import { Fonts } from '@/constants/theme';
import type { Shop } from '@/types';

/** A small round shop logo, or the shop's initials in its brand colour. */
export function ShopBadge({ shop, size = 22 }: { shop: Shop; size?: number }) {
  const box = { width: size, height: size, borderRadius: size / 2 };
  if (shop.logo) {
    return <Image source={shop.logo} style={[styles.badge, box]} contentFit="cover" />;
  }
  return (
    <View style={[styles.badge, box, { backgroundColor: shop.colour }]}>
      <Text style={[styles.initials, { fontSize: size * 0.5, color: textOn(shop.colour) }]}>
        {shop.name.charAt(0).toUpperCase()}
      </Text>
    </View>
  );
}

// Pick black or white text depending on how light the background is.
function textOn(hex: string) {
  const n = parseInt(hex.slice(1), 16);
  const brightness = ((n >> 16) & 255) * 0.299 + ((n >> 8) & 255) * 0.587 + (n & 255) * 0.114;
  return brightness > 150 ? '#111' : '#fff';
}

const styles = StyleSheet.create({
  badge: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: 'rgba(18, 0, 43, 0.9)',
    overflow: 'hidden',
  },
  initials: { fontFamily: Fonts.heavy },
});
