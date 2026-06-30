export const SHOP_CATALOG = {
  bookshop: {
    id: 'bookshop',
    label: '書店 文房 · Bunbou Books',
    emoji: '📚',
    items: [
      { id: 'townMap',   name: '町の地図',     nameEn: 'Town Map',      price: 200, emoji: '🗺️',  desc: 'A hand-drawn map of every alley.' },
      { id: 'novel',     name: '小説',         nameEn: 'Novel',         price: 350, emoji: '📖',  desc: 'A quiet seaside tale.',
        reward: { type: 'journal', title: '小説を読んだ', body: 'A slow story about a lighthouse keeper. You feel calm.' } },
      { id: 'postcard',  name: 'ポストカード', nameEn: 'Postcard Set',  price: 150, emoji: '💌',  desc: 'Cherry blossom illustrations.' },
    ],
  },

  ramen: {
    id: 'ramen',
    label: '麺処 山田 · Yamada Ramen',
    emoji: '🍜',
    items: [
      { id: 'ramen',   name: 'ラーメン', nameEn: 'Ramen Bowl',  price: 800, emoji: '🍜',
        desc: 'Rich tonkotsu broth. Gives a short speed boost!',
        reward: { type: 'speedBoost', amount: 1.6, duration: 14, message: '🍜 Energy surges through you!' } },
      { id: 'gyoza',   name: '餃子',     nameEn: 'Gyoza',       price: 400, emoji: '🥟', desc: 'Crispy pan-fried dumplings.' },
      { id: 'greentea',name: '緑茶',     nameEn: 'Green Tea',   price: 150, emoji: '🍵', desc: 'A calming cup.' },
    ],
  },

  florist: {
    id: 'florist',
    label: '花屋 はな · Hana Florist',
    emoji: '🌸',
    items: [
      { id: 'sakura',     name: '桜の花束', nameEn: 'Sakura Bouquet', price: 600, emoji: '🌸', desc: 'Delicate cherry blossoms.' },
      { id: 'wildflowers',name: '野花',    nameEn: 'Wildflowers',    price: 300, emoji: '💐', desc: 'A mix of local wildflowers.' },
      { id: 'potplant',   name: '観葉植物', nameEn: 'Potted Plant',   price: 480, emoji: '🪴', desc: 'A small fern to carry home.' },
    ],
  },

  cafe: {
    id: 'cafe',
    label: '喫茶 木漏れ · Komorebi Cafe',
    emoji: '☕',
    items: [
      { id: 'matcha',  name: '抹茶ラテ', nameEn: 'Matcha Latte', price: 550, emoji: '🍵', desc: 'Velvety and sweet.' },
      { id: 'coffee',  name: 'コーヒー', nameEn: 'Coffee',       price: 450, emoji: '☕', desc: 'A smooth morning cup.' },
      { id: 'wagashi', name: '和菓子',   nameEn: 'Wagashi',      price: 300, emoji: '🍡', desc: 'Traditional mochi sweets.' },
    ],
  },

  market: {
    id: 'market',
    label: '朝市 · Morning Market',
    emoji: '🛒',
    items: [
      { id: 'onigiri',  name: 'おにぎり',   nameEn: 'Onigiri',       price: 180, emoji: '🍙', desc: 'Rice ball with pickled plum.' },
      { id: 'mikan',    name: 'みかん',     nameEn: 'Mikan Oranges', price: 200, emoji: '🍊', desc: 'Sweet local oranges.' },
      { id: 'yakitori', name: '焼き鳥',     nameEn: 'Yakitori',      price: 250, emoji: '🍢', desc: 'Skewered grilled chicken.' },
    ],
  },

  fishmarket: {
    id: 'fishmarket',
    label: '魚屋 水樹 · Mizuki Fish',
    emoji: '🐟',
    items: [
      { id: 'taiyaki',  name: 'たい焼き',       nameEn: 'Taiyaki',       price: 250, emoji: '🐟', desc: 'Fish-shaped cake with sweet bean.' },
      { id: 'ikayaki',  name: 'イカ焼き',       nameEn: 'Grilled Squid', price: 350, emoji: '🦑', desc: 'Fresh off the harbor grill.' },
      { id: 'kanikama', name: '蟹かまぼこ',     nameEn: 'Crab Stick',    price: 200, emoji: '🦀', desc: 'Local catch from the bay.' },
    ],
  },

  vending: {
    id: 'vending',
    label: '自動販売機 · Vending Machine',
    emoji: '🥤',
    items: [
      { id: 'cola',   name: 'コーラ', nameEn: 'Cola',   price: 120, emoji: '🥤', desc: 'Ice-cold soda.' },
      { id: 'juice',  name: 'ジュース',nameEn: 'Juice', price: 120, emoji: '🧃', desc: 'Sweet fruit juice.' },
      { id: 'water',  name: '水',     nameEn: 'Water',  price: 80,  emoji: '💧', desc: 'Pure mineral water.' },
    ],
  },
};
