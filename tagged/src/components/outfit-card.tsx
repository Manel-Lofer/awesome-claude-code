import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, { FadeInDown, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

import { CountUpPrice } from '@/components/count-up';
import { ShopBadge } from '@/components/shop-badge';
import { Colors, Fonts, Gradients, Radius, Spacing } from '@/constants/theme';
import type { FeedOutfit } from '@/lib/data';

type Props = { outfit: FeedOutfit; width: number; index: number; onPress?: () => void };

export function OutfitCard({ outfit, width, index, onPress }: Props) {
  const scale = useSharedValue(1);
  const pressStyle = useAnimatedStyle(() => ({ transform: [{ scale: scale.value }] }));

  return (
    <Animated.View
      entering={FadeInDown.delay(Math.min(index, 8) * 70).springify().damping(16)}
      style={[styles.wrapper, { width }]}>
      <Pressable
        onPress={onPress}
        onPressIn={() => (scale.value = withSpring(0.96))}
        onPressOut={() => (scale.value = withSpring(1))}>
        <Animated.View style={[styles.card, pressStyle]}>
          <Image
            source={outfit.photo}
            style={{ width, height: width * outfit.photo_aspect }}
            contentFit="cover"
            transition={300}
          />

          {/* Shops used, top-left */}
          <View style={styles.shops}>
            {outfit.shops.slice(0, 4).map((shop, i) => (
              <View key={shop.id} style={{ marginLeft: i === 0 ? 0 : -5 }}>
                <ShopBadge shop={shop} />
              </View>
            ))}
          </View>

          {/* Dark fade at the bottom so the text is readable */}
          <LinearGradient colors={Gradients.cardShade} style={styles.shade}>
            <View style={styles.userRow}>
              <Image source={outfit.user.avatar} style={styles.avatar} />
              <Text style={styles.username} numberOfLines={1}>
                @{outfit.user.username}
              </Text>
            </View>
            <LinearGradient
              colors={Gradients.hot}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.pricePill}>
              <CountUpPrice value={outfit.total} delay={Math.min(index, 8) * 70} style={styles.price} />
            </LinearGradient>
          </LinearGradient>
        </Animated.View>
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  wrapper: { marginBottom: Spacing.md },
  card: {
    borderRadius: Radius.md,
    overflow: 'hidden',
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  shops: { position: 'absolute', top: Spacing.sm, left: Spacing.sm, flexDirection: 'row' },
  shade: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    paddingTop: Spacing.xxl,
    paddingHorizontal: Spacing.sm,
    paddingBottom: Spacing.sm,
    gap: Spacing.xs + 2,
  },
  userRow: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  avatar: { width: 18, height: 18, borderRadius: 9 },
  username: { color: Colors.text, fontFamily: Fonts.bodyBold, fontSize: 12, flexShrink: 1 },
  pricePill: {
    alignSelf: 'flex-start',
    borderRadius: Radius.pill,
    paddingHorizontal: 10,
    paddingVertical: 3,
  },
  price: { color: Colors.text, fontFamily: Fonts.display, fontSize: 16, letterSpacing: 0.5 },
});
