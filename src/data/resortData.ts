import { Suite, Experience, GalleryPhoto, TransitDistance, MenuItem } from '../types';

export const RESORT_INFO = {
  name: 'Crown Pavilion Resort',
  fullName: 'Crown Pavilion Resort Agra',
  tagline: 'Where Heritage Meets Modern Indulgence',
  subtag: 'Sanctuary of Agra',
  locationBrief: 'Fatehabad Road, Dauki, Agra, Uttar Pradesh 283111, India',
  phone: '+91 562 200 0000',
  phoneRaw: '+915622000000',
  whatsappNumber: '919876543210',
  whatsappDisplay: '+91 98765 43210',
  email: 'concierge@crownpavilionagra.com',
  reservationsEmail: 'reservations@crownpavilionresort.com',
  handles: {
    instagram: '@crownpavilionresort',
    x: '@cpragra',
    facebook: 'Crown Pavilion Resort'
  },
  ratings: {
    google: '4.8',
    googleReviews: '2,345 verified reviews',
    tripAdvisor: '4.7',
    tripAdvisorReviews: '1,234 reviews • Traveler Choice',
    facebookFollowers: '1M+',
    instagramFollowers: '2M+'
  },
  // Hotlinked brand logo from HTML
  crestLogo: 'https://lh3.googleusercontent.com/aida/AEtjO1XRQPv4XM8H8yQA3f_NhtfQUJPICfD6scLWqkM3-zuNME6A5ivwwgMlyohu1gZ6iZT6UtgUJ-fI6MPl7s6L643Hhf63CxKhI6-AMuwQWI3X5uP0sxysEdY5ZW83kYdtSM6nQlVVnT9hJ8mpMfsY9zYpqSHKBJEnzJN5uybckUHijiRY4EnuMzHODbaDn9l5f3q6Oy9BxmtUKrJggKiZrlvi5dsPBRWvpPnVfCd2DAxandK2G2285zJjh5aG',
  crestLogoAlt: 'https://lh3.googleusercontent.com/aida/AEtjO1WapBisKUJd-D_IKvZCJxrI9yBco6l6V2c5bjZNvZthVRnW1VBsxPWfiBfhf-qoY1q-Bylj0bNjEtP2mtiIZ0-rlxP4Tvyb-zkKDQFz8TpW4IVuN0Xs3Fv8uCNQ5A5kWS7kMtkZwUdSWVwACIBhLg-L8TJkKi_IrU-6q0DDtLZrUwk0F-Mvk5bh6aguSZmdwNZiU6gXDk7fJNmvIjUaqRgK7RDdc64vYncKN5I2zq-djaZ3NrhT5_LwA6Q',
  // Hero background image
  heroBgImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCMyUdYfRQPLsQzpweyo83rUtdD3cq85pPy1XZW36-rSgMBYksdG_PBunuNgMFieOHcKKaHyIV-bUVKai7xi-_v8ZXPAzcMrijpFQalTTbO19-iKOBITkrh-J5Ag2Q9SwIiaf0MTrEDx-b5S22rRcEgPc5YZh6B0uAc5yipMbCaaFUy75KuZ1JlAVYGucOjQ2ppyGDSe8Grn6wAItOBM08HJxCS6SUYoXB9JuwQErE4qSjG-7Eeiy_4XA',
  // Courtyard & Architecture
  courtyardImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAcmrt0AHUD9i19OTFKj5H6m7yLAeXbWS0__UBvPKprMylfB9xR__hzAGUP6okTI6fYPb_rQMgoSHktyzY71XzVKFhI1QKn3l-yjmgV61-NQsHfecKCPg-33ZXlygNMmSDgQHCQcTr13on3SZd3Me_0xtfJX-XaecKusSjMzhD49yUZuwqeeCGeHfJxjwSNKQud2BoX4dDdHZYhvx_x6WPgreX2y4VJWPEwyjO4MyC8CVSiiF1scVOSbg',
  sandstoneDetailImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJ3EFRaUb_bKMxWjnizlConipMY0234NkmOVEpQGClH-bW8lhIQQs10w8La-S2c5G6-sO1zseGGDJFx5wJV0lOuuuFiLd1Cd436M767hOw8tPgGDt9TATQBQQYP1U3SmZE8lRy3L1rvpFwYZd4HBYc82X7jEHHJOST495ueA_KxufSMxPGL2XfNWa6qb1VdJvXUmF1EyEvukhfv47K6vMd9AGi-gfp2ynR21haR_kjsr2wr_1zBFLWCA',
  weddingImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDenDs2-QlIjJmLe7AXhfROujWw5y-msJOUhAtXR6Jpbw8YTsaoC8aOiQao_HoN98iCOVLohhiqqdc4zug-_x2RKgfXNisBBW-sDxMulb3aLz8SJuMRs4vGK9Bg6ZTOa-6rj3lW5YrKL3Z_jpwTsZQtlL0Re0Y0rA9TtktdIrR7cgR8kNv1LbaE5uQeJlHMtLJm7i_rDbAeQYwljX1f0qNKoRsW1Hq8eKywbU9lIKoI4JmNEDhQ2n3mtQ',
  mapImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCot5A152NuhtKnOXbQ9MdoW_nAN9XXQokApnBjRe8FAuESR1Z6Qzq2bGuZG-36BvG2-8jUv1-AP6RrF4Kqc--6fITDJFyJbBeZtrQ-krWcq1bT8CFSRE_k6qIZGh9SE7u0KeNklH6Ws7tra20Nf4K92VSksxPyxso9-f9SsryUSj5rbzNJtLsqjuivGmmTAqkVowas-kUmBiDeerD5OmVCTJuzn9ddcPyUV1s26aTXnsVGAkXcB8VEOw'
};

export const SUITES_DATA: Suite[] = [
  {
    id: 'deluxe-room',
    name: 'Deluxe Room',
    tier: 'executive',
    tierLabel: 'Executive Tier',
    bedType: 'King Bed',
    space: '20 M² Space',
    shortDesc: 'Our Deluxe Rooms provide a perfect blend of comfort and style, featuring elegant decor and well-appointed amenities. Designed for relaxation, these rooms offer spacious layouts, plush bedding, and modern conveniences to ensure a restful stay.',
    fullDesc: 'Our Deluxe Rooms provide a perfect blend of comfort and style, featuring elegant decor and well-appointed amenities. Designed for relaxation, these rooms offer spacious layouts, plush bedding, and modern conveniences to ensure a restful stay. Ideal for guests seeking a cozy yet refined retreat amidst peaceful courtyard surroundings.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCtTvnKj0Ek0A4CU3T-w0irgtpTTIkhif-cbgRL5JPFPNo7UUA1HwyCnCGz_0l-i42S6NOCAg7CT5PKk6qqnly4nuKm2jaR9AulDumyChqoHldi4IGsffO8v0zdbLElg-PApR2FZApauLPRD3U7bHlBqNdJmVBT5uawqGUygnqe4HEtvmgwRU_qtOknEw-XP0RZm3-Onf_W5Te3nAdNA21Y9ZRr78AfeMS5iNVU9OmOTQvJockRHXxTjA',
    imageAlt: 'Deluxe Room at Crown Pavilion Resort with king-size plush bedding, custom Agra sandstone wall panel, warm bedside task lamps, linen drapery, and polished wooden flooring.',
    amenities: [
      '20 M² space',
      'King size bed',
      'Free high-speed wifi',
      'Free breakfast included',
      'Silent air conditioner',
      'Daily royal turndown housekeeping',
      'Courtyard garden view access',
      'En-suite rain shower & artisan toiletries',
      'In-room coffee & organic tea caddy',
      'Electronic room safe & minibar'
    ],
    keySpecs: {
      space: '20 M² space',
      bed: 'King size bed',
      wifi: 'Free wifi',
      ac: 'Air conditioner',
      breakfast: 'Free breakfast included',
      specialHighlight: 'Instant Inquiry'
    },
    tariffs: {
      startingFrom: '₹9,500',
      perNight: 'plus taxes'
    }
  },
  {
    id: 'super-deluxe-room',
    name: 'Super Deluxe Room',
    tier: 'executive',
    tierLabel: 'Executive Tier',
    bedType: 'King Bed',
    space: '20 M² Space',
    shortDesc: 'Step up to the Super Deluxe Room for an elevated experience with additional space and enhanced amenities. These rooms boast tasteful furnishings, premium linens, and thoughtful touches that add to your comfort.',
    fullDesc: 'Step up to the Super Deluxe Room for an elevated experience with additional space and enhanced amenities. These rooms boast tasteful furnishings, premium linens, and thoughtful touches that add to your comfort. Perfect for travelers who desire extra room to unwind in understated luxury with a dedicated seating alcove overlooking tranquil resort greens.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBNnggVPxAu1651CRFSgvdVmNG7j8NfRdQO3upQSWOzUhVKJQLyY8x4fKktYet0l5UJHnXrfrazf9fIet5gsqPTRbaJJGL1XTYrXlDk5pSOMw7hmW7jD4vzGeZ7CagWe11xeXaflvGbgsTW3Xjhtya7cKyCS67-puqw6UDQdChwap4eWm2ETriFbpxK2u6Nxpa1OP_H4TBs2ulSwLcI24mlZaZnihTVnslMzVbpjFBsiJbULhO5lLEUsw',
    imageAlt: 'Super Deluxe Room at Crown Pavilion Resort featuring elevated aesthetic, private seating nook overlooking the resort garden pavilion, warm earth tones, and king bed.',
    amenities: [
      '20 M² space',
      'King size bed',
      'Free high-speed wifi',
      'Free gourmet breakfast included',
      'Whisper-quiet air conditioning',
      'Private seating alcove with divan',
      'Premium linen ensemble & feather pillows',
      'Luxury marble vanity with magnifying mirror',
      'Smart 50-inch 4K HD display',
      'Complimentary evening tea service'
    ],
    keySpecs: {
      space: '20 M² space',
      bed: 'King size bed',
      wifi: 'Free wifi',
      ac: 'Air conditioner',
      breakfast: 'Free breakfast included',
      specialHighlight: 'Instant Inquiry'
    },
    tariffs: {
      startingFrom: '₹12,000',
      perNight: 'plus taxes'
    }
  },
  {
    id: 'executive-suite',
    name: 'Executive Suite',
    tier: 'executive',
    tierLabel: 'Executive Tier',
    bedType: 'Separate Living Area',
    space: '20 M² Space',
    shortDesc: 'The Executive Suite offers a sophisticated sanctuary featuring separate living and sleeping areas for added privacy and comfort. With luxurious interiors, upscale amenities, and refined decor, this suite is designed to meet the needs of discerning guests.',
    fullDesc: 'The Executive Suite offers a sophisticated sanctuary featuring separate living and sleeping areas for added privacy and comfort. With luxurious interiors, upscale amenities, and refined decor, this suite is designed to meet the needs of discerning guests looking for a spacious and stylish stay. Features custom teak furnishings and an intimate parlor.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDNOFS9hC54sfibxlK1csTJdP2EIIxx7tnwQNqVq7WTbwTIsby7CP1nqNxFY6eV_d-RD5QYGpV08HEgjpiRCf5uSK5ZrhxEBXg5yILx4kECdfBe8rNk35VpPCZVZ78eEtV3_oOCZZ0eTWtkA43Fqre46OFZcgOEpG6DsHArpSbL3NR48Ykak2MowdO7yCssFAXwqeExma9iGa_QeF-YTjjc48-Qg3c7m5ahm50-1Uuz5NjYxjp9dJT1OQ',
    imageAlt: 'Executive Suite showing separate living and sleeping sanctuary with curated handcrafted velvet divan, bespoke Agra marble coffee table, and regal warm accents.',
    amenities: [
      '20 M² space',
      'King size bed & separate parlor',
      'Free high-speed wifi',
      'Complimentary chef breakfast',
      'Dual zone climate control',
      'Bespoke marble bathroom with deep tub',
      'Express priority check-in courtesy',
      'Curated welcome basket of Agra petha & nuts',
      'Work desk with universal international sockets',
      'Personalized concierge assistance'
    ],
    keySpecs: {
      space: '20 M² space',
      bed: 'King size bed',
      wifi: 'Free wifi',
      ac: 'Air conditioner',
      breakfast: 'Free breakfast included',
      specialHighlight: 'Instant Inquiry'
    },
    tariffs: {
      startingFrom: '₹15,500',
      perNight: 'plus taxes'
    }
  },
  {
    id: 'deluxe-executive-room',
    name: 'Deluxe Executive Room',
    tier: 'executive',
    tierLabel: 'Executive Tier',
    bedType: 'Upscale Finishes',
    space: '20 M² Space',
    shortDesc: 'Our Deluxe Executive Rooms combine the best of elegance and functionality, providing a spacious environment with upscale finishes. Ideal for business or leisure travelers, these rooms include enhanced workspaces and calming ambiance.',
    fullDesc: 'Our Deluxe Executive Rooms combine the best of elegance and functionality, providing a spacious environment with upscale finishes. Ideal for business or leisure travelers, these rooms include enhanced workspaces, premium amenities, and a calming ambiance to support both productivity and relaxation, overlooking landscaped gardens.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBTeEHMiy5BIAE9DeB3IrJ4BO8V-sMPp6rYc5cR_XX6VeDF38fGr6o-1iBJ3IdaWTsBrZuOFpNClffkQ8NI3wR-S8OrHP8Gi9Jvu7FdkdA0AJyoDq3iF6ts5kqu8BDxl9IuQ9xmuAa_hpnp_O4c92P2LHe2xdVJmLHza44WarDYgaJ8ndFfbrjCflK5X7b3Ep-KlkRBJRbDi6Iir9n_jj-cEX-z94zE1uNCJ9XthB3jf6LO7at82FnebA',
    imageAlt: 'Deluxe Executive Room at Crown Pavilion Resort with contemporary executive desk, arched headboard with Mughal fretwork, warm brass task lighting, and serene courtyard view.',
    amenities: [
      '20 M² space',
      'King size bed',
      'Dedicated ergonomic teak workstation',
      'High-bandwidth dual band Wi-Fi',
      'Free breakfast included',
      'Air conditioner',
      'Complimentary morning national press',
      'Nespresso artisan coffee machine',
      'Fluffy bathrobes & slippers',
      'Direct WhatsApp concierge line'
    ],
    keySpecs: {
      space: '20 M² space',
      bed: 'King size bed',
      wifi: 'Free wifi',
      ac: 'Air conditioner',
      breakfast: 'Free breakfast included',
      specialHighlight: 'Instant Inquiry'
    },
    tariffs: {
      startingFrom: '₹14,000',
      perNight: 'plus taxes'
    }
  },
  {
    id: 'royal-suite',
    name: 'Royal Suite',
    tier: 'royal',
    tierLabel: 'Royal Tier • Signature',
    tag: '50 M² PALATIAL',
    bedType: 'King Bed',
    space: '50 M² Space',
    featured: true,
    shortDesc: 'Experience regal luxury in the Royal Suite, where grandeur meets unparalleled comfort. This expansive suite features lavish interiors, exquisite furnishings, and elegant décor inspired by royal heritage.',
    fullDesc: 'Experience regal luxury in the Royal Suite, where grandeur meets unparalleled comfort. This expansive suite features lavish interiors, exquisite furnishings, and elegant décor inspired by royal heritage. Enjoy spacious living and sleeping areas, premium amenities, private sunlit terrace, and personalized butler services that make every stay truly majestic.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC2YaUaAp3lYOT8jyPI7ZxAfCqtfUA_HJGr1a8qfnEWk8_EGt4lK1T2kHtQxKnelPKoFt-DQ7I0etKdzuGM_ce1P6J1I5dri10TkVlzfhdN5VoRT7mzJE74aGBm7Mo5IDerWlrVZaa_Mqa6I4T1aVKZaz_YwaBF1wqi-ALs9R3OGNZ4ukghfSGo9AUQ7yIQMcZgBuAYLjnr4Vw1uC-bRcUfAlNxfiRokWZIILp2XIlTF3GQJtkMxvy0Yg',
    imageAlt: 'Opulent Royal Suite at Crown Pavilion Resort with 50 square meters of grandeur, royal four-poster king bed, gold foil ceiling accents, silk cushions, and private terrace.',
    amenities: [
      '50 M² expansive palatial domain',
      'Imperial four-poster King bed',
      'Dedicated 24-hour Royal Butler service',
      'Complimentary gourmet breakfast banquet',
      'Private terrace with scenic pavilion outlook',
      'Free high-speed wifi & premium streaming',
      'Individual climate zoning control',
      'Deep freestanding stone soaking tub with rose petals',
      'VIP airport / Agra station transfer courtesy',
      'Complimentary daily sundowner cocktail hour'
    ],
    keySpecs: {
      space: '50 M² space',
      bed: 'King size bed',
      wifi: 'Free wifi',
      ac: 'Air conditioner',
      breakfast: 'Free breakfast included',
      specialHighlight: 'Butler Service'
    },
    tariffs: {
      startingFrom: '₹26,000',
      perNight: 'plus taxes'
    }
  },
  {
    id: 'heritage-suite',
    name: 'Heritage Suite',
    tier: 'royal',
    tierLabel: 'Royal Tier • Heritage',
    tag: '50 M² HERITAGE',
    bedType: 'King Bed',
    space: '50 M² Space',
    featured: true,
    shortDesc: 'The Heritage Suite offers a unique blend of historic charm and modern sophistication. Decorated with traditional artistry and timeless details, this suite immerses guests in the rich cultural legacy of the region.',
    fullDesc: 'The Heritage Suite offers a unique blend of historic charm and modern sophistication. Decorated with traditional artistry and timeless details, this suite immerses guests in the rich cultural legacy of the region while providing all contemporary comforts. Perfect for those seeking a distinctive and memorable accommodation experience with museum-grade craftsmanship.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCr4LA0uC41oCPQf9zcGuDJFn49-Aa87ZWDB_6tPgD4Mq9cFmoZyhDrRV6xhSYnH_FmuFv7vEjUzyy7-Jk_Mm_xcSdjO4Kqw5z9cHdssFYZRAOibzq4rdGT_tei2V2kHTM4QxGY3ijkvbjNz5GGcnfewSboMrbhNmHIQCSYs2wRviG_3z3pDM7owxazNSzW-WiwkeVb4BiYhLPg6REfbLf0-kd3jkMuMCPTzA4Da-5K-7M7AdfNAhIiOw',
    imageAlt: 'Heritage Suite showcasing traditional Indian mythology murals, authentic antique timber chests, deep soaking stone tub with rose petals, and panoramic resort garden outlook.',
    amenities: [
      '50 M² heritage master suite',
      'Handcrafted antique wooden canopy King bed',
      'Pietra Dura marble inlay art motifs',
      'Private Jharokha window with garden views',
      'Artisan courtyard breakfast service',
      'Free high-speed wifi & air conditioner',
      'Hand-carved red sandstone vanity & clawfoot tub',
      'Dedicated heritage butler & packing assistance',
      'Authentic Ayurvedic bath salts & copper ware',
      'Complimentary guided resort architectural tour'
    ],
    keySpecs: {
      space: '50 M² space',
      bed: 'King size bed',
      wifi: 'Free wifi',
      ac: 'Air conditioner',
      breakfast: 'Free breakfast included',
      specialHighlight: 'Artisan Suite'
    },
    tariffs: {
      startingFrom: '₹28,500',
      perNight: 'plus taxes'
    }
  }
];

export const EXPERIENCES_DATA: Experience[] = [
  {
    id: 'immersive-view',
    number: '01',
    title: 'IMMERSIVE VIEW',
    subtitle: 'Panoramic Vistas of Agra Countryside',
    description: "Panoramic views of Agra's tranquil landscapes and serene royal pavilion vistas stretching across serene natural horizons.",
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAI3MSqevjD8Etyd3NUJ74p47oMEUaGLWEjOSv6vcmuIVAI_8_zyqSSWbmqlhnkw24RHJuWnu3KlVa9SsGoSF708Bd2B1Pw6uE_bO8uxrKMwCNSoIFimmXSrXy0PfGS9-DRlSLW66-NR0vvf6MksXL2dNFTvTHHwX3eIWEZOSfdl3ydLEiyoDMCXaEBVh9EvcpJvAPE2z3sXpKnFIUb2hwTSPSNqhTGm2k3j70mgg1T5JYEFAO5UOO4JQ',
    imageAlt: "A panoramic vista from Crown Pavilion Resort rooftop pavilion watching the golden sunset over peaceful Agra countryside and heritage flora.",
    icon: 'panorama',
    highlights: ['Sunset golden hour pavilion', 'Uninterrupted horizon views', 'Binocular viewing decks', 'Rooftop high tea service']
  },
  {
    id: 'exquisite-suite',
    number: '02',
    title: 'EXQUISITE SUITE',
    subtitle: 'Handcrafted Comfort & Royal Touch',
    description: 'Handcrafted comfort, palatial furnishings, and curated heritage touches echoing the opulent living style of royalty.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDewHcYlubD-bOxW7JFSksEyR1SV5eP-ktY16x-AER0IIPW47cwwdyZ4O_UnrWCvy4-259_OiLGjfe8hWzvuRW93XuKFvmxD_y7e4zoOBCZB5M1I857oIJp5DLD8sT3CD0_HUL1b9OV8hyj8v7FcndaGA29Xi3tDJgnpWyDO6xueP_Silo8VylExLLrYsQVZmS0MZm6gsBUL-egUHAnk3r5XePn_UIkWTvClC6Guhiny8TnYWLHQqKzkw',
    imageAlt: 'Exquisite royal bedroom suite with bespoke embroidered tapestries, handcrafted teakwood mirrors, and fresh marigold arrangements.',
    icon: 'bed',
    highlights: ['Handmade silk brocades', 'Antique brass filigree lamps', 'Custom rose-scented linens', 'In-suite private dining']
  },
  {
    id: 'dine-under-stars',
    number: '03',
    title: 'DINE UNDER STARS',
    subtitle: 'Candlelit Alfresco Courtyard Feasts',
    description: 'Candlelit alfresco feasts, authentic culinary traditions, and majestic starlit evenings served on private courtyards.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAO3opghnBFcrW4DvpSF32jxVHrs0r4iUvbyAWPy0rGCoK1gX0knQ6dI1RY5ngl4snRIX4aFC417BpAR_d-Yz98i33n4d2HWOW36qrF8aWtFvlhYqR66582c_9HdRrSotZdwlqnB16AnuNEv2fi8yDEMImX_a3TPSZV7LnILnZtVO0m-fMPlz_vDuQ-4x1ICZmu6bU-9iAd3h8d74KW1vZ3uD4R4_1tfXv00vYpthPrWTwOn6Q2IC4mfQ',
    imageAlt: 'An intimate candlelit dining table set upon an open-air sandstone pavilion terrace at night with glowing brass lanterns and starry Agra sky.',
    icon: 'nightlight',
    highlights: ['Live charcoal barbecue', 'Silver and brass tableware', 'Floating candle water court', 'Personal sommelier pairing']
  },
  {
    id: 'traditional-touch',
    number: '04',
    title: 'TRADITIONAL TOUCH',
    subtitle: 'Classical Sitar & Sacred Welcomes',
    description: 'Mythology-inspired artistry, cultural evening sitar recitals, and authentic warm Indian welcome rituals.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDdLHMBS7EOQiF-4IFaXZIoOU4AxxO0j-3ggG5Slghwgf5oQ9rTBUmfaK_0WrVdfTRJTrrk_v3lGqv7wWsc2zJVFA54PvRnpYXiwNRfUr841B89Xnr7vt_EGb7Q3-e_s2o_7qO_WYoIzv7jfD11WtW-wKCvyYzb5BGErF5u90QO0cuYFEVp6uXc74QZRXDi5xPfzcxScXQ35KJDY1aU6DS04Frb_XayvZsOilm5nDmJmKfFsldV1Nwsaw',
    imageAlt: 'A classical Indian musician playing the sitar beside a warm glowing water fountain in an ornate resort hall with rose petal decorations.',
    icon: 'palette',
    highlights: ['Aarti and tikka welcome', 'Sundown Kathak and sitar', 'Rangoli floral artistry', 'Artisan stone carving demos']
  }
];

export const DINING_HIGHLIGHTS: MenuItem[] = [
  {
    name: 'Awadhi Murgh Dum Biryani',
    category: 'mains',
    description: 'Aged basmati rice sealed in earthen handi with tender chicken, saffron, rose water, and royal kewra essence.',
    isChefSpecial: true,
    origin: 'Royal Awadh'
  },
  {
    name: 'Melt-in-Mouth Galouti Kebab',
    category: 'starters',
    description: 'Smoked minced lamb infused with 32 secret spices, served on warm saffron sheermal bread.',
    isChefSpecial: true,
    origin: 'Lucknow Nizami'
  },
  {
    name: 'Dal Crown Pavilion (Black Lentil)',
    category: 'mains',
    description: 'Whole urad slow-simmered over charcoal embers for 24 hours with country butter and vine tomatoes.',
    isChefSpecial: true,
    origin: 'House Specialty'
  },
  {
    name: 'Shahi Paneer Pasanda',
    category: 'mains',
    description: 'Layered cottage cheese stuffed with dry fruits and mint, simmered in a velvety cashew and saffron gravy.',
    origin: 'Mughal Durbar'
  },
  {
    name: 'Bhatti Da Murgh Tikka',
    category: 'starters',
    description: 'Boneless chicken steeped in mustard oil, roasted gram flour, crushed pomegranate and cooked in clay tandoor.',
    origin: 'North Frontier'
  },
  {
    name: 'Zafrani Shahi Tukda',
    category: 'desserts',
    description: 'Crisp ghee-fried brioche soaked in cardamom syrup, topped with thick rabri, slivered almonds and 24k silver vark.',
    isChefSpecial: true,
    origin: 'Imperial Feast'
  }
];

export const GALLERY_ITEMS: GalleryPhoto[] = [
  {
    id: 'gal-1',
    title: 'The Royal Colonnades',
    category: 'resort',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDPAf8TfT3Kn9wPdqzFgH-wCeId-jh-Bno4c-Yhvagj22rmTYXy4BS9JIPSkawfdnuYplgCdj1_M1Gp_F4K9XkUbVTSGk_Q3umirRe3W-UWhENnrepL9jTVrBiifXeD7lGTMtWkwnpbbn3k8yen8Viw0rDDj3psInuILmNit8o2FLMh6Ue186zRqk-Iad1HLHmuRIaK2WanFWNh0zQCdUEbEp-LjgD7fAqtFi4NarjeD4aJdnATjCgm4A',
    imageAlt: 'Sweeping facade of Crown Pavilion Resort featuring monumental Mughal arches, reflection fountains, and manicured royal palms.',
    span: 'md:col-span-2'
  },
  {
    id: 'gal-2',
    title: 'Heritage Suite Details',
    category: 'suites',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAIPwNBQcqCkHu6C5PLFwq53XbIWGVRNJn4GB6P7AkkObDxFPtKuSyjYCZGmdUJDT3XHoMM8oD_GTRmLnoX6z5g_tsnFWHsYdjtKmZwFmhK5j3w2otVRxkOkFk-NkAJqhrI1j_O0yxiRiO8ZthEoetWrPa-yv1quVDT-7CTJ6aTBwZ3IWOFCNdt7cv5i_g4B8KJt6MXqAX8eZK1Les1bpmwO4-_tebc4o_gsxHiiz4E0uFsZpD68QXPaA',
    imageAlt: 'Heritage Suite luxury bedroom with silk bolster cushions, warm bedside pendants, and antique teakwood wardrobe.'
  },
  {
    id: 'gal-3',
    title: 'Royal Tableware & Goblets',
    category: 'dining',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3OHKliNSnc-Qf5gEXScz7WK-bb2hge7Noh416oNTAl-usCzpvcFhrRBnh2-6WfiWH9c8zAiFhw0gur0362gwcD9sl5MfW2cUBN7xmf9sNW6x9MbSrq4P7KXTD2ycxzphzLrDO1kErmNE72vJRrxAb8XuQz1_2v3fuQh9OHjLAKNom02ozAJaQN8nXH6OnUqvfpYqhEhKMzrdXqOD6G25CDQgjb7Ikt1wdRYcDAIiVLFg7DOIAhToI4g',
    imageAlt: 'Traditional Indian copper tableware service set for alfresco banquet under starlight.'
  },
  {
    id: 'gal-4',
    title: 'Night Courtyard Lanterns',
    category: 'dining',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAqxBYULUrY9Mi5CZHQDV_nDoKt2DQWiEcE1Lu4mfbIa9y99KL4DGAHJ6SQdKUw0pKjgU1c7zx713MoU14QEpnIhtgWd-6JGiFRnFxNWKosvxn7YrUSXMAxRcSbCIwB4ydoPwgXlcWDbqFfDs0ZmZMUmSZuHhftlTxhO7C9zwaTte5PovM34kuoSXi8kTMTd-_VpuISywFOzS95KSM_aY6h8asNrMWlJeez3MOT8VEStyb3fVSPDm4uaw',
    imageAlt: 'Outdoor dining terrace with illuminated hanging lamps and fire torches reflecting over water.'
  },
  {
    id: 'gal-5',
    title: 'Sundown Kathak & Music Ritual',
    category: 'experiences',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAlKuPYdkFYqffz63KQFR3YBFsoh2F_9KVmhQStipam91wA7doPaT3Ms7YLdz3zFAuLNPvMz0iBl4qmKmapcUCeSt25KYcYhh2ly7B7WAhpqeroZSMVF12mvcxQiDHQA28A8PkWDGE9zkY2WDB8-wPo41Ze68BlTH1Ktrsni6f6WCvfAgQ8nblqy-s2qxQUtaDYh4N-nhcPDqZoEO4WHKU-TuR1dYZ2PrPLpG2KtCqQeN8K-bn3NmCPlw',
    imageAlt: 'Evening cultural dancers and sitar maestro performing in the open resort court against illuminated sandstone pavilion.',
    span: 'md:col-span-2'
  },
  {
    id: 'gal-6',
    title: 'Poolside Pavilion',
    category: 'resort',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQeUO8CYeHVLm_NtAkuarWVC2Trj80p7zy4Bi-iuW9bvop8EuD6DF7zqtinwMUKFtnKNXXtzwU_dk-6j_ubPcH2HSYZ7-ya7imvk2xh6mHb5YzBMe2unenAxcCFVpqzcMhchSQFcYwcN2txzJIzYSlaXwk6lN3r1p0jmwQxzsGSV38ZhJsj10W4n7ZssnMTPdUDTnIA7OD8uWVhWBNDKuei9xP_9BETF4wPm5q2_veXyb3YAu-9feIKA',
    imageAlt: 'Serene morning poolside overlooking tranquil greens and landscaped royal gardens at Crown Pavilion Resort Agra.'
  },
  {
    id: 'gal-7',
    title: 'Royal Wedding Mandap Lawn',
    category: 'resort',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDenDs2-QlIjJmLe7AXhfROujWw5y-msJOUhAtXR6Jpbw8YTsaoC8aOiQao_HoN98iCOVLohhiqqdc4zug-_x2RKgfXNisBBW-sDxMulb3aLz8SJuMRs4vGK9Bg6ZTOa-6rj3lW5YrKL3Z_jpwTsZQtlL0Re0Y0rA9TtktdIrR7cgR8kNv1LbaE5uQeJlHMtLJm7i_rDbAeQYwljX1f0qNKoRsW1Hq8eKywbU9lIKoI4JmNEDhQ2n3mtQ',
    imageAlt: 'A lavish Indian destination wedding setup at Crown Pavilion Resort with grand mandap adorned with marigolds and tuberose.'
  },
  {
    id: 'gal-8',
    title: 'Handcrafted Sandstone Jaali',
    category: 'resort',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJ3EFRaUb_bKMxWjnizlConipMY0234NkmOVEpQGClH-bW8lhIQQs10w8La-S2c5G6-sO1zseGGDJFx5wJV0lOuuuFiLd1Cd436M767hOw8tPgGDt9TATQBQQYP1U3SmZE8lRy3L1rvpFwYZd4HBYc82X7jEHHJOST495ueA_KxufSMxPGL2XfNWa6qb1VdJvXUmF1EyEvukhfv47K6vMd9AGi-gfp2ynR21haR_kjsr2wr_1zBFLWCA',
    imageAlt: 'Close up architectural detail of artisanal hand-carved floral sandstone frieze and vintage brass filigree hanging lantern.'
  }
];

export const TRANSIT_DISTANCES: TransitDistance[] = [
  {
    landmark: 'Taj Mahal Monument',
    time: '~25 mins',
    icon: 'navigation',
    distance: '14 km'
  },
  {
    landmark: 'Agra Fort',
    time: '~28 mins',
    icon: 'fort',
    distance: '16 km'
  },
  {
    landmark: 'Agra Cantt Railway Station',
    time: '~30 mins',
    icon: 'train',
    distance: '18 km'
  },
  {
    landmark: 'Agra Domestic Airport',
    time: '~35 mins',
    icon: 'flight',
    distance: '21 km'
  },
  {
    landmark: 'Lucknow Expressway Interchange',
    time: '10 mins',
    icon: 'route',
    distance: '7 km'
  },
  {
    landmark: 'Yamuna Expressway (Delhi Corridor)',
    time: '20 mins',
    icon: 'directions_car',
    distance: '15 km'
  }
];

export const ARCHITECTURAL_PILLARS = [
  {
    number: '01',
    title: 'Mythological Artistry',
    description: 'Intricate reliefs and motifs depicting classic Indian celestial epics and regal Mughal filigree.'
  },
  {
    number: '02',
    title: 'Tranquil Outskirts',
    description: 'Away from urban bustle yet minutes from the revered Taj Mahal corridor on Fatehabad Road.'
  },
  {
    number: '03',
    title: 'Bespoke Hospitality',
    description: 'Dedicated royal curations, private butlers, and tailored itineraries crafted for discerning voyagers.'
  },
  {
    number: '04',
    title: 'Palatial Craft',
    description: 'Dressed red sandstone, antique brass accents, and serene lotus reflecting pools.'
  }
];
