// FAKE DATA so we can build and test the app before connecting Supabase.
// Photos are random placeholder images from picsum.photos, not real outfits.

import type { Follow, Item, ItemType, Like, Outfit, Save, Season, Shop, Style, User } from '@/types';

export const shops: Shop[] = [
  { id: 'zara', name: 'Zara', logo: null, colour: '#E8E8E8', website: 'https://www.zara.com' },
  { id: 'hm', name: 'H&M', logo: null, colour: '#E50010', website: 'https://www2.hm.com' },
  { id: 'uniqlo', name: 'Uniqlo', logo: null, colour: '#FF0000', website: 'https://www.uniqlo.com' },
  { id: 'nike', name: 'Nike', logo: null, colour: '#FF6A00', website: 'https://www.nike.com' },
  { id: 'mango', name: 'Mango', logo: null, colour: '#C9A27E', website: 'https://shop.mango.com' },
  { id: 'cos', name: 'COS', logo: null, colour: '#9AA3AD', website: 'https://www.cos.com' },
  { id: 'pullbear', name: 'Pull&Bear', logo: null, colour: '#3D7BFF', website: 'https://www.pullandbear.com' },
  { id: 'asos', name: 'ASOS', logo: null, colour: '#2D2D2D', website: 'https://www.asos.com' },
];

const avatar = (seed: string) => `https://i.pravatar.cc/150?u=${seed}`;

export const users: User[] = [
  { id: 'u1', username: 'lunaonfriday', avatar: avatar('luna') },
  { id: 'u2', username: 'marc.fits', avatar: avatar('marc') },
  { id: 'u3', username: 'noa_style', avatar: avatar('noa') },
  { id: 'u4', username: 'theo.wears', avatar: avatar('theo') },
  { id: 'u5', username: 'iris.k', avatar: avatar('iris') },
  { id: 'u6', username: 'deshawn.drip', avatar: avatar('deshawn') },
];

// The logged-in user, until we have real login in phase 5.
export const currentUserId = 'u1';

// A compact way to describe an outfit and its items. Turned into the
// real `outfits` and `items` lists below.
type SeedItem = [ItemType, string, string, number, number, number]; // type, name, shop_id, price, tag_x, tag_y
type SeedOutfit = {
  user: string;
  style: Style;
  season: Season;
  aspect: number;
  daysAgo: number;
  items: SeedItem[];
};

const seedOutfits: SeedOutfit[] = [
  {
    user: 'u1', style: 'casual', season: 'autumn', aspect: 1.5, daysAgo: 0,
    items: [
      ['jacket', 'Oversized denim jacket', 'zara', 49.95, 0.5, 0.3],
      ['top', 'Ribbed white tank', 'hm', 9.99, 0.45, 0.45],
      ['jeans', 'Wide-leg straight jeans', 'zara', 39.95, 0.5, 0.68],
      ['shoes', 'Air Force 1 ’07', 'nike', 119.99, 0.4, 0.93],
    ],
  },
  {
    user: 'u2', style: 'street', season: 'winter', aspect: 1.25, daysAgo: 1,
    items: [
      ['hoodie', 'Tech Fleece hoodie', 'nike', 109.99, 0.5, 0.35],
      ['trousers', 'Tech Fleece joggers', 'nike', 99.99, 0.5, 0.7],
      ['shoes', 'Air Max 90', 'nike', 149.99, 0.55, 0.94],
    ],
  },
  {
    user: 'u3', style: 'minimal', season: 'spring', aspect: 1.6, daysAgo: 1,
    items: [
      ['shirt', 'Relaxed poplin shirt', 'cos', 69, 0.5, 0.3],
      ['trousers', 'Pleated wide trousers', 'cos', 89, 0.5, 0.65],
      ['bag', 'Quilted crossbody bag', 'cos', 79, 0.75, 0.5],
    ],
  },
  {
    user: 'u4', style: 'smart', season: 'autumn', aspect: 1.35, daysAgo: 2,
    items: [
      ['coat', 'Wool-blend overcoat', 'mango', 199.99, 0.5, 0.35],
      ['knit', 'Merino crew-neck jumper', 'uniqlo', 39.9, 0.5, 0.42],
      ['trousers', 'Slim tailored trousers', 'mango', 59.99, 0.5, 0.7],
      ['shoes', 'Leather derby shoes', 'asos', 75, 0.45, 0.94],
    ],
  },
  {
    user: 'u5', style: 'casual', season: 'summer', aspect: 1.2, daysAgo: 3,
    items: [
      ['dress', 'Linen midi dress', 'mango', 49.99, 0.5, 0.45],
      ['bag', 'Raffia tote', 'hm', 24.99, 0.25, 0.55],
      ['shoes', 'Leather flat sandals', 'zara', 35.95, 0.5, 0.95],
    ],
  },
  {
    user: 'u6', style: 'street', season: 'spring', aspect: 1.55, daysAgo: 3,
    items: [
      ['jacket', 'Varsity bomber', 'pullbear', 59.99, 0.5, 0.32],
      ['top', 'Boxy graphic tee', 'pullbear', 19.99, 0.5, 0.42],
      ['jeans', 'Baggy cargo jeans', 'pullbear', 39.99, 0.5, 0.7],
      ['shoes', 'Dunk Low', 'nike', 119.99, 0.5, 0.94],
      ['accessory', 'Beanie', 'asos', 12, 0.5, 0.08],
    ],
  },
  {
    user: 'u1', style: 'minimal', season: 'winter', aspect: 1.3, daysAgo: 4,
    items: [
      ['coat', 'Ultra Light Down parka', 'uniqlo', 99.9, 0.5, 0.38],
      ['knit', 'Cashmere turtleneck', 'uniqlo', 99.9, 0.5, 0.25],
      ['trousers', 'Smart ankle pants', 'uniqlo', 39.9, 0.5, 0.7],
    ],
  },
  {
    user: 'u3', style: 'vintage', season: 'autumn', aspect: 1.45, daysAgo: 5,
    items: [
      ['jacket', 'Suede trucker jacket', 'asos', 85, 0.5, 0.3],
      ['shirt', 'Corduroy overshirt', 'zara', 45.95, 0.4, 0.45],
      ['jeans', 'Straight vintage-wash jeans', 'hm', 29.99, 0.5, 0.7],
      ['shoes', 'Chelsea boots', 'asos', 65, 0.5, 0.94],
    ],
  },
  {
    user: 'u2', style: 'sporty', season: 'summer', aspect: 1.15, daysAgo: 6,
    items: [
      ['top', 'Dri-FIT running tee', 'nike', 34.99, 0.5, 0.35],
      ['shorts', 'Challenger shorts', 'nike', 39.99, 0.5, 0.62],
      ['shoes', 'Pegasus 41', 'nike', 139.99, 0.5, 0.93],
    ],
  },
  {
    user: 'u4', style: 'casual', season: 'spring', aspect: 1.5, daysAgo: 7,
    items: [
      ['shirt', 'Oxford shirt', 'uniqlo', 29.9, 0.5, 0.3],
      ['trousers', 'Chino trousers', 'hm', 27.99, 0.5, 0.65],
      ['shoes', 'Canvas trainers', 'asos', 32, 0.5, 0.94],
    ],
  },
  {
    user: 'u5', style: 'smart', season: 'winter', aspect: 1.4, daysAgo: 8,
    items: [
      ['coat', 'Tailored check coat', 'zara', 129, 0.5, 0.35],
      ['knit', 'Fine-knit polo', 'zara', 29.95, 0.5, 0.28],
      ['skirt', 'Satin midi skirt', 'zara', 35.95, 0.5, 0.65],
      ['bag', 'Leather shoulder bag', 'zara', 49.95, 0.8, 0.5],
      ['shoes', 'Heeled ankle boots', 'zara', 59.95, 0.5, 0.95],
    ],
  },
  {
    user: 'u6', style: 'street', season: 'autumn', aspect: 1.25, daysAgo: 9,
    items: [
      ['hoodie', 'Heavyweight zip hoodie', 'hm', 34.99, 0.5, 0.35],
      ['trousers', 'Parachute trousers', 'pullbear', 35.99, 0.5, 0.68],
      ['shoes', 'Air Jordan 1 Mid', 'nike', 129.99, 0.5, 0.94],
    ],
  },
  {
    user: 'u3', style: 'casual', season: 'summer', aspect: 1.6, daysAgo: 10,
    items: [
      ['top', 'Linen-blend shirt', 'hm', 24.99, 0.5, 0.32],
      ['shorts', 'Denim shorts', 'hm', 19.99, 0.5, 0.6],
      ['bag', 'Canvas tote', 'hm', 12.99, 0.2, 0.5],
      ['shoes', 'Espadrilles', 'hm', 22.99, 0.5, 0.95],
    ],
  },
  {
    user: 'u1', style: 'smart', season: 'spring', aspect: 1.35, daysAgo: 12,
    items: [
      ['jacket', 'Linen blazer', 'mango', 89.99, 0.5, 0.32],
      ['top', 'Silk-feel camisole', 'mango', 25.99, 0.5, 0.4],
      ['trousers', 'Straight suit trousers', 'mango', 49.99, 0.5, 0.68],
      ['shoes', 'Slingback heels', 'mango', 45.99, 0.5, 0.95],
    ],
  },
  {
    user: 'u2', style: 'minimal', season: 'autumn', aspect: 1.5, daysAgo: 13,
    items: [
      ['knit', 'Chunky wool jumper', 'cos', 115, 0.5, 0.32],
      ['trousers', 'Relaxed twill trousers', 'uniqlo', 39.9, 0.5, 0.66],
      ['shoes', 'Leather sneakers', 'cos', 135, 0.5, 0.94],
    ],
  },
  {
    user: 'u4', style: 'vintage', season: 'summer', aspect: 1.2, daysAgo: 15,
    items: [
      ['shirt', 'Cuban-collar shirt', 'asos', 28, 0.5, 0.32],
      ['trousers', 'Pleated cream trousers', 'asos', 38, 0.5, 0.66],
      ['shoes', 'Leather loafers', 'zara', 59.95, 0.5, 0.94],
      ['accessory', 'Round sunglasses', 'pullbear', 12.99, 0.5, 0.12],
    ],
  },
];

const shopById = new Map(shops.map((s) => [s.id, s]));

export const outfits: Outfit[] = [];
export const items: Item[] = [];

seedOutfits.forEach((o, index) => {
  const outfitId = `o${index + 1}`;
  const created = new Date(Date.UTC(2026, 9, 26) - o.daysAgo * 86_400_000);
  outfits.push({
    id: outfitId,
    user_id: o.user,
    photo: `https://picsum.photos/seed/tagged-${outfitId}/600/${Math.round(600 * o.aspect)}`,
    photo_aspect: o.aspect,
    style: o.style,
    season: o.season,
    created_at: created.toISOString(),
  });
  o.items.forEach(([type, name, shopId, price, tagX, tagY], itemIndex) => {
    const shop = shopById.get(shopId)!;
    items.push({
      id: `${outfitId}-i${itemIndex + 1}`,
      outfit_id: outfitId,
      shop_id: shopId,
      type,
      name,
      price,
      link: `${shop.website}/search?q=${encodeURIComponent(name)}`,
      tag_x: tagX,
      tag_y: tagY,
    });
  });
});

export const likes: Like[] = [
  { user_id: 'u2', outfit_id: 'o1' },
  { user_id: 'u3', outfit_id: 'o1' },
  { user_id: 'u4', outfit_id: 'o1' },
  { user_id: 'u1', outfit_id: 'o2' },
  { user_id: 'u5', outfit_id: 'o3' },
  { user_id: 'u1', outfit_id: 'o6' },
  { user_id: 'u2', outfit_id: 'o6' },
  { user_id: 'u1', outfit_id: 'o11' },
];

export const saves: Save[] = [
  { user_id: 'u1', outfit_id: 'o3' },
  { user_id: 'u1', outfit_id: 'o6' },
  { user_id: 'u1', outfit_id: 'o11' },
];

export const follows: Follow[] = [
  { follower_id: 'u2', following_id: 'u1' },
  { follower_id: 'u3', following_id: 'u1' },
  { follower_id: 'u5', following_id: 'u1' },
  { follower_id: 'u1', following_id: 'u3' },
  { follower_id: 'u1', following_id: 'u6' },
];
