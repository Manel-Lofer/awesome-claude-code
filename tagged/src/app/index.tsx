import { useState } from 'react';
import { ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import Animated, { FadeIn, FadeInUp } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

import { FilterChips } from '@/components/filter-chips';
import { GradientBackground } from '@/components/gradient-background';
import { MasonryFeed } from '@/components/masonry-feed';
import { SegmentedTabs } from '@/components/segmented-tabs';
import { Colors, Fonts, Radius, Spacing } from '@/constants/theme';
import { getFeed, priceRanges, seasons, styles as outfitStyles, type FeedFilters } from '@/lib/data';
import type { Season, Style } from '@/types';

type HomeTab = 'general' | 'shops';

const capitalise = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

export default function HomeScreen() {
  const { width } = useWindowDimensions();
  const [tab, setTab] = useState<HomeTab>('general');
  const [filters, setFilters] = useState<FeedFilters>({ priceRange: null, style: null, season: null });

  const feed = getFeed(filters);
  const hasFilters = Object.values(filters).some(Boolean);

  return (
    <View style={styles.screen}>
      <GradientBackground />
      <SafeAreaView edges={['top']} style={styles.screen}>
        <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
          <Animated.View entering={FadeInUp.duration(500)} style={styles.header}>
            <Text style={styles.logo}>
              TAGGED<Text style={styles.logoDot}>.</Text>
            </Text>
            <Text style={styles.tagline}>Every piece tagged. Copy the whole look.</Text>
          </Animated.View>

          <View style={styles.padded}>
            <SegmentedTabs
              tabs={[
                { id: 'general', label: 'General' },
                { id: 'shops', label: 'Shops' },
              ]}
              value={tab}
              onChange={setTab}
            />
          </View>

          {tab === 'general' ? (
            <Animated.View entering={FadeIn} key="general">
              <View style={styles.chips}>
                <FilterChips
                  groups={[
                    {
                      key: 'price',
                      options: priceRanges.map((r) => ({ id: r.id, label: r.label })),
                      selected: filters.priceRange,
                      onSelect: (id) => setFilters((f) => ({ ...f, priceRange: id })),
                    },
                    {
                      key: 'style',
                      options: outfitStyles.map((s) => ({ id: s, label: capitalise(s) })),
                      selected: filters.style,
                      onSelect: (id) => setFilters((f) => ({ ...f, style: id as Style | null })),
                    },
                    {
                      key: 'season',
                      options: seasons.map((s) => ({ id: s, label: capitalise(s) })),
                      selected: filters.season,
                      onSelect: (id) => setFilters((f) => ({ ...f, season: id as Season | null })),
                    },
                  ]}
                />
              </View>

              <View style={styles.padded}>
                <Text style={styles.count}>
                  {feed.length} {feed.length === 1 ? 'look' : 'looks'}
                  {hasFilters ? ' match your filters' : ''}
                </Text>
                {feed.length > 0 ? (
                  // The key makes cards re-animate whenever the filters change.
                  <MasonryFeed key={JSON.stringify(filters)} outfits={feed} width={width - Spacing.lg * 2} />
                ) : (
                  <View style={styles.empty}>
                    <Text style={styles.emptyTitle}>NOTHING HERE YET</Text>
                    <Text style={styles.emptyText}>Try removing a filter or two.</Text>
                  </View>
                )}
              </View>
            </Animated.View>
          ) : (
            <Animated.View entering={FadeIn} key="shops" style={styles.padded}>
              <View style={styles.empty}>
                <Text style={styles.emptyTitle}>SHOPS — COMING IN PHASE 2</Text>
                <Text style={styles.emptyText}>Browse every look by the shop it came from.</Text>
              </View>
            </Animated.View>
          )}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1 },
  scroll: { paddingBottom: Spacing.xxl * 2 },
  padded: { paddingHorizontal: Spacing.lg },
  header: { paddingHorizontal: Spacing.lg, paddingTop: Spacing.md, paddingBottom: Spacing.lg },
  logo: { color: Colors.text, fontFamily: Fonts.display, fontSize: 56, lineHeight: 64, letterSpacing: 1 },
  logoDot: { color: Colors.pink },
  tagline: { color: Colors.textMuted, fontFamily: Fonts.body, fontSize: 15, marginTop: -2 },
  chips: { marginTop: Spacing.lg, marginBottom: Spacing.md },
  count: {
    color: Colors.textMuted,
    fontFamily: Fonts.bodyBold,
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: 1.2,
    marginBottom: Spacing.md,
  },
  empty: {
    marginTop: Spacing.xl,
    padding: Spacing.xl,
    borderRadius: Radius.lg,
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.border,
    alignItems: 'center',
    gap: Spacing.sm,
  },
  emptyTitle: { color: Colors.text, fontFamily: Fonts.display, fontSize: 22, textAlign: 'center' },
  emptyText: { color: Colors.textMuted, fontFamily: Fonts.body, fontSize: 14, textAlign: 'center' },
});
