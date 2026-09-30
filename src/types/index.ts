export type NavPage =
  | 'home'
  | 'stay'
  | 'experiences'
  | 'dining'
  | 'celebrations'
  | 'gallery'
  | 'about'
  | 'location'
  | 'contact';

export type SuiteTier = 'executive' | 'royal';

export interface Suite {
  id: string;
  name: string;
  tier: SuiteTier;
  tierLabel: string;
  bedType: string;
  space: string;
  shortDesc: string;
  fullDesc: string;
  imageUrl: string;
  imageAlt: string;
  featured?: boolean;
  tag?: string;
  amenities: string[];
  keySpecs: {
    space: string;
    bed: string;
    wifi: string;
    ac: string;
    breakfast: string;
    specialHighlight?: string;
  };
  tariffs?: {
    startingFrom: string;
    perNight: string;
  };
}

export interface Experience {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  icon: string;
  highlights: string[];
}

export interface MenuItem {
  name: string;
  category: 'starters' | 'mains' | 'desserts' | 'beverages';
  description: string;
  isChefSpecial?: boolean;
  origin?: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'resort' | 'suites' | 'dining' | 'experiences';
  imageUrl: string;
  imageAlt: string;
  span?: string;
  aspect?: string;
}

export interface TransitDistance {
  landmark: string;
  time: string;
  icon: string;
  distance: string;
}
