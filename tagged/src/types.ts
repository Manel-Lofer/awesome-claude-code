// The shape of our data. These match the tables we'll create in Supabase later,
// so swapping fake data for real data should be painless.

export type Style = 'casual' | 'street' | 'smart' | 'sporty' | 'minimal' | 'vintage';
export type Season = 'spring' | 'summer' | 'autumn' | 'winter';
export type ItemType =
  | 'jacket'
  | 'coat'
  | 'top'
  | 'shirt'
  | 'hoodie'
  | 'knit'
  | 'jeans'
  | 'trousers'
  | 'shorts'
  | 'skirt'
  | 'dress'
  | 'shoes'
  | 'bag'
  | 'accessory';

export type Shop = {
  id: string;
  name: string;
  logo: string | null; // image URL, or null to show the shop's initials
  colour: string; // brand colour, used for badges and banners
  website: string;
};

export type User = {
  id: string;
  username: string;
  avatar: string;
};

export type Outfit = {
  id: string;
  user_id: string;
  photo: string;
  photo_aspect: number; // height ÷ width, so the masonry feed can lay out cards before images load
  style: Style;
  season: Season;
  created_at: string; // ISO date
};

export type Item = {
  id: string;
  outfit_id: string;
  shop_id: string;
  type: ItemType;
  name: string;
  price: number; // in euros
  link: string;
  // Where the tag sits on the photo, from 0 to 1 (used on the outfit page in phase 3)
  tag_x: number;
  tag_y: number;
};

export type Like = { user_id: string; outfit_id: string };
export type Save = { user_id: string; outfit_id: string };
export type Follow = { follower_id: string; following_id: string };
