export interface CityData {
  slug: string;
  name: string;
  region: string;
  tagline: string;
  description: string;
  image: string;
  thingsToDo: { title: string; description: string }[];
  specialities: string[];
}

export const citiesData: CityData[] = [
  {
    slug: 'hanoi',
    name: 'Hanoi',
    region: 'Northern Vietnam',
    tagline: 'The Heart of Vietnam',
    description:
      'Hanoi, the capital city, is known for its ancient architecture, vibrant street life, and rich cultural heritage. Explore the Old Quarter, enjoy local cuisine, and relax at the serene Hoan Kiem Lake.',
    image: '/destinations/Hanoi.webp',
    thingsToDo: [
      { title: 'Old Quarter Walking Tour', description: 'Wander through 36 ancient streets filled with local shops, temples, and street food vendors.' },
      { title: 'Hoan Kiem Lake', description: 'Visit the iconic lake with Ngoc Son Temple on a small island, connected by the red Huc Bridge.' },
      { title: 'Temple of Literature', description: 'Explore Vietnam\'s first national university, built in 1070 with beautiful courtyards and pavilions.' },
      { title: 'Water Puppet Show', description: 'Watch the traditional Vietnamese water puppet performance at Thang Long Theatre.' },
      { title: 'Street Food Tour', description: 'Taste legendary Pho, Bun Cha, Egg Coffee, and Banh Mi from the best local stalls.' },
    ],
    specialities: [
      'Pho Bo (Beef Noodle Soup)',
      'Egg Coffee (Ca Phe Trung)',
      'Bun Cha (Grilled Pork Noodles)',
      'French Colonial Architecture',
      'Traditional Craft Villages',
    ],
  },
  {
    slug: 'ha-long-bay',
    name: 'Ha Long Bay',
    region: 'Northern Coast',
    tagline: 'A UNESCO World Heritage Wonder',
    description:
      'Ha Long Bay is famous for its emerald waters and thousands of towering limestone islands topped with rainforests. It offers breathtaking views, cruising, kayaking, and cave exploration.',
    image: '/destinations/Halong_Bay.webp',
    thingsToDo: [
      { title: 'Overnight Cruise', description: 'Sail through emerald waters on a luxury junk boat with sunset dinners and sunrise Tai Chi.' },
      { title: 'Kayaking to Luon Cave', description: 'Paddle through hidden lagoons surrounded by towering karst formations.' },
      { title: 'Surprising Cave', description: 'Explore the largest and most beautiful cave in Ha Long Bay with stunning stalactites.' },
      { title: 'Ti Top Island', description: 'Climb to the viewpoint for a panoramic view of the bay, then swim at the beach below.' },
      { title: 'Floating Fishing Village', description: 'Visit traditional fishing communities living on the water for generations.' },
    ],
    specialities: [
      'Emerald Waters & Limestone Karsts',
      'Luxury Overnight Cruises',
      'Fresh Seafood on Deck',
      'Sunrise Tai Chi Sessions',
      'UNESCO World Heritage Site',
    ],
  },
  {
    slug: 'da-nang',
    name: 'Da Nang',
    region: 'Central Vietnam',
    tagline: 'Coastal City of Wonders',
    description:
      'Da Nang is a vibrant coastal city known for its beautiful beaches, the iconic Dragon Bridge, and proximity to cultural and natural attractions like Ba Na Hills and Marble Mountains.',
    image: '/destinations/Da_Nang_City_Tour.webp',
    thingsToDo: [
      { title: 'Ba Na Hills & Golden Bridge', description: 'Ride the cable car to the mountain top and walk across the iconic bridge held by giant stone hands.' },
      { title: 'Marble Mountains', description: 'Explore five marble hills with caves, temples, and panoramic viewpoints.' },
      { title: 'My Khe Beach', description: 'Relax on one of the most beautiful beaches in Vietnam with soft white sand.' },
      { title: 'Dragon Bridge', description: 'Watch the bridge breathe fire and water every weekend night — a spectacular show.' },
      { title: 'Lady Buddha Statue', description: 'Visit the 67-meter tall statue at Linh Ung Pagoda with sweeping ocean views.' },
    ],
    specialities: [
      'Golden Bridge at Ba Na Hills',
      'My Khe Beach',
      'Mi Quang (Turmeric Noodles)',
      'Banh Trang Cuon (Rice Paper Rolls)',
      'Dragon Bridge Fire Show',
    ],
  },
  {
    slug: 'hoi-an',
    name: 'Hoi An',
    region: 'Central Coast',
    tagline: 'Ancient Town of Lanterns',
    description:
      'Hoi An Ancient Town is a UNESCO World Heritage site known for its well-preserved historical architecture, iconic lanterns, and charming riverside setting blending Vietnamese, Chinese, and Japanese influences.',
    image: '/destinations/Hoi_An_Ancient_Town.webp',
    thingsToDo: [
      { title: 'Ancient Town Walking Tour', description: 'Explore centuries-old merchant houses, temples, and the iconic Japanese Covered Bridge.' },
      { title: 'Lantern Boat Ride', description: 'Float down the Thu Bon River at night surrounded by hundreds of glowing lanterns.' },
      { title: 'Cooking Class', description: 'Learn to make authentic Vietnamese dishes starting with a market tour for fresh ingredients.' },
      { title: 'Custom Tailoring', description: 'Get bespoke suits, dresses, and shoes made by skilled tailors within 24 hours.' },
      { title: 'An Bang Beach', description: 'Enjoy a quieter beach experience with seafood restaurants and laid-back vibes.' },
    ],
    specialities: [
      'Cao Lau (Local Noodle Dish)',
      'White Rose Dumplings',
      'Silk Lanterns & Handicrafts',
      'Custom Tailoring in 24 Hours',
      'UNESCO World Heritage Architecture',
    ],
  },
  {
    slug: 'ho-chi-minh-city',
    name: 'Ho Chi Minh City',
    region: 'Southern Vietnam',
    tagline: 'The Vibrant Metropolis',
    description:
      'Ho Chi Minh City (formerly Saigon) is the largest city in Vietnam — a vibrant economic and cultural hub known for its history, French colonial architecture, bustling markets, and incredible street food.',
    image: '/destinations/Ho_Chi_Minh_City.webp',
    thingsToDo: [
      { title: 'Cu Chi Tunnels', description: 'Crawl through the underground tunnel network used during the Vietnam War.' },
      { title: 'War Remnants Museum', description: 'Learn about the Vietnam War through powerful exhibits and photographs.' },
      { title: 'Ben Thanh Market', description: 'Shop for souvenirs, textiles, and local delicacies in the city\'s most famous market.' },
      { title: 'Notre Dame Cathedral & Post Office', description: 'Admire French colonial architecture including the stunning Central Post Office designed by Gustave Eiffel.' },
      { title: 'Mekong Delta Day Trip', description: 'Cruise through floating markets and coconut-lined canals in the delta region.' },
    ],
    specialities: [
      'Banh Mi (Vietnamese Baguette)',
      'Com Tam (Broken Rice)',
      'French Colonial Architecture',
      'Vibrant Night Markets',
      'Cu Chi Tunnels History',
    ],
  },
  {
    slug: 'phu-quoc',
    name: 'Phu Quoc',
    region: 'Southern Islands',
    tagline: 'Tropical Island Paradise',
    description:
      'Phu Quoc is a beautiful island in the Gulf of Thailand known for its stunning beaches, clear waters, lush tropical landscapes, and exciting attractions like Vinpearl Safari and VinWonders.',
    image: '/destinations/Phu_Quoc_Island.webp',
    thingsToDo: [
      { title: 'Vinpearl Safari', description: 'Visit Vietnam\'s first open-zoo safari park with wildlife from around the world.' },
      { title: 'VinWonders Amusement Park', description: 'Enjoy themed zones, roller coasters, aquariums, and water parks.' },
      { title: '3-Island Boat Tour', description: 'Hop between islands for snorkeling, swimming, and beach relaxation.' },
      { title: 'Sao Beach', description: 'Visit the island\'s most beautiful beach with powdery white sand and turquoise water.' },
      { title: 'Night Market', description: 'Browse local crafts and feast on fresh seafood at Dinh Cau Night Market.' },
    ],
    specialities: [
      'Pristine White Sand Beaches',
      'Fish Sauce Production (Famous Worldwide)',
      'Pearl Farms',
      'Fresh Seafood & Grilled Oysters',
      'Sunset Views from Long Beach',
    ],
  },
  {
    slug: 'ninh-binh',
    name: 'Ninh Binh',
    region: 'Red River Delta',
    tagline: 'Ha Long Bay on Land',
    description:
      'Ninh Binh is known for its stunning karst landscapes, ancient temples, and river systems. The Trang An Scenic Landscape Complex is a UNESCO World Heritage site with beautiful caves, mountains, and rivers.',
    image: '/destinations/Ninh_Binh.webp',
    thingsToDo: [
      { title: 'Trang An Boat Tour', description: 'Cruise through caves and along rivers surrounded by towering limestone karsts (UNESCO site).' },
      { title: 'Mua Cave Viewpoint', description: 'Climb 500 steps to the top for a breathtaking panoramic view of Tam Coc valley.' },
      { title: 'Hoa Lu Ancient Capital', description: 'Explore the historic temples and ruins of Vietnam\'s former capital.' },
      { title: 'Bai Dinh Pagoda', description: 'Visit the largest Buddhist complex in Southeast Asia with hundreds of statues.' },
      { title: 'Tam Coc Boat Ride', description: 'Glide through rice paddies and under natural cave tunnels on a sampan boat.' },
    ],
    specialities: [
      'Karst Landscape (Like Ha Long on Land)',
      'Goat Meat Dishes (Local Specialty)',
      'Com Chay (Burnt Rice)',
      'Ancient Capital History',
      'UNESCO Trang An Complex',
    ],
  },
  {
    slug: 'mekong-delta',
    name: 'Mekong Delta',
    region: 'Southern Vietnam',
    tagline: 'Vietnam\'s Rice Bowl',
    description:
      'The Mekong Delta is a vast fertile region known for its unique landscapes, floating markets, vibrant waterways, and tropical fruit orchards. Experience life on the river with boat rides through coconut-lined canals.',
    image: '/destinations/Mekong_Delta.webp',
    thingsToDo: [
      { title: 'Floating Markets', description: 'Visit Cai Rang or Cai Be floating markets where vendors sell produce from their boats.' },
      { title: 'Coconut Canal Boat Ride', description: 'Paddle through serene canals shaded by coconut palms on a traditional sampan.' },
      { title: 'Fruit Orchards', description: 'Visit tropical gardens and taste exotic fruits fresh from the tree.' },
      { title: 'Princess Dinner Cruise', description: 'Enjoy a scenic evening cruise on the Saigon River with dinner and live music.' },
      { title: 'Local Village Visit', description: 'Experience daily life, taste local honey tea, and watch traditional candy-making.' },
    ],
    specialities: [
      'Floating Markets at Sunrise',
      'Tropical Fruits (Mangosteen, Rambutan)',
      'Coconut Candy & Honey Tea',
      'Elephant Ear Fish',
      'River Life & Sampan Culture',
    ],
  },
  {
    slug: 'ba-na-hills',
    name: 'Ba Na Hills',
    region: 'Da Nang Area',
    tagline: 'The Golden Bridge Awaits',
    description:
      'Ba Na Hills is a hilltop resort destination famous for the iconic Golden Bridge held by giant stone hands, Fantasy Park, alpine coaster rides, and stunning views of Da Nang city and bay.',
    image: '/destinations/Ba_Na_Hills_Golden_Bridge.webp',
    thingsToDo: [
      { title: 'Golden Bridge', description: 'Walk across the world-famous bridge cradled by two giant stone hands in the clouds.' },
      { title: 'Cable Car Ride', description: 'Take one of the longest cable car systems in the world with stunning mountain views.' },
      { title: 'Fantasy Park', description: 'Enjoy Asia\'s most modern indoor game center with rides, games, and VR experiences.' },
      { title: 'Alpine Coaster', description: 'Race down the mountain on a thrilling gravity-powered roller coaster.' },
      { title: 'French Village & Temples', description: 'Explore the replica French village and visit Linh Chua Linh Tu Temple.' },
    ],
    specialities: [
      'Golden Bridge (Iconic Landmark)',
      'World-Record Cable Car System',
      'Cool Mountain Climate Year-Round',
      'French Village Architecture',
      'Panoramic Views of Da Nang Bay',
    ],
  },
  {
    slug: 'marble-mountain',
    name: 'Marble Mountains',
    region: 'Da Nang Area',
    tagline: 'Five Elemental Hills',
    description:
      'The Marble Mountains are a group of five marble and limestone hills near Da Nang, named after the five elements. Discover mysterious caves, sacred Buddhist temples, and masterful stone sculptures.',
    image: '/destinations/Marble_Mountain.webp',
    thingsToDo: [
      { title: 'Cave Exploration', description: 'Discover mysterious caves with sacred Buddhist atmospheres and hidden shrines.' },
      { title: 'Tam Thai Pagoda', description: 'Visit the ancient pagoda perched on the mountainside with peaceful gardens.' },
      { title: 'Linh Ung Pagoda', description: 'See the beautiful temple with intricate carvings and panoramic views.' },
      { title: 'Stone Sculpture Village', description: 'Watch artisans carve masterpieces from marble at the base of the mountains.' },
      { title: 'Viewpoint Climb', description: 'Hike to the summit for sweeping views of the coastline and surrounding area.' },
    ],
    specialities: [
      'Named After Five Elements (Metal, Water, Wood, Fire, Earth)',
      'Ancient Buddhist Cave Temples',
      'Handcrafted Marble & Stone Art',
      'Panoramic Coastal Views',
      'Spiritual Sacred Atmosphere',
    ],
  },
  {
    slug: 'monkey-mountain',
    name: 'Monkey Mountain',
    region: 'Da Nang Area',
    tagline: 'Son Tra Peninsula',
    description:
      'Monkey Mountain (Son Tra Peninsula) is a lush green mountain near Da Nang known for its wildlife, panoramic ocean views, and cultural sites. A peaceful escape offering nature trails and the iconic Linh Ung Pagoda.',
    image: '/destinations/Monkey_Mountain.webp',
    thingsToDo: [
      { title: 'Linh Ung Pagoda', description: 'Visit the pagoda housing the tallest Lady Buddha statue in Vietnam (67m).' },
      { title: 'Wildlife Spotting', description: 'See the endangered red-shanked douc langurs in their natural habitat.' },
      { title: 'Scenic Drive', description: 'Take a motorbike or jeep along winding mountain roads with ocean panoramas.' },
      { title: 'Beaches', description: 'Discover secluded beaches at the base of the peninsula with crystal-clear water.' },
      { title: 'Sunrise Viewing', description: 'Wake early for spectacular sunrise views over the East Sea from the summit.' },
    ],
    specialities: [
      'Red-Shanked Douc Langur (Rare Primates)',
      'Tallest Lady Buddha in Vietnam',
      'Secluded Pristine Beaches',
      'Panoramic Ocean Viewpoints',
      'Lush Tropical Rainforest',
    ],
  },
  {
    slug: 'cu-chi-tunnels',
    name: 'Cu Chi Tunnels',
    region: 'Ho Chi Minh Area',
    tagline: 'Vietnam War History Underground',
    description:
      'The Cu Chi Tunnels are an extensive underground tunnel network used during the Vietnam War. This important historical landmark provides insights into the resilience and ingenuity of the Vietnamese people.',
    image: '/destinations/Cu_Chi_Tunnels.webp',
    thingsToDo: [
      { title: 'Tunnel Exploration', description: 'Crawl through sections of the actual tunnel network used during the war.' },
      { title: 'War History Exhibition', description: 'Learn about guerrilla warfare tactics, booby traps, and daily life underground.' },
      { title: 'Shooting Range', description: 'Try firing historical weapons at the on-site shooting range (optional).' },
      { title: 'Underground Kitchen', description: 'See how soldiers cooked without detection using ingenious smoke-dispersal systems.' },
      { title: 'War Remnants & Artifacts', description: 'View original tanks, weapons, and artifacts from the conflict era.' },
    ],
    specialities: [
      'Over 250km of Underground Tunnels',
      'Vietnam War History',
      'Ingenious Guerrilla Engineering',
      'Living History Experience',
      'Located Just 70km from HCMC',
    ],
  },
  {
    slug: 'sapa',
    name: 'SaPa',
    region: 'Northern Highlands',
    tagline: 'Mountain Paradise',
    description:
      'SaPa is a stunning mountain town in northwest Vietnam known for terraced rice fields, ethnic minority cultures, and trekking through misty valleys with breathtaking views of Fansipan — the highest peak in Indochina.',
    image: '/destinations/Ninh_Binh.webp',
    thingsToDo: [
      { title: 'Fansipan Summit', description: 'Ride the cable car or trek to the top of the highest mountain in Indochina at 3,143m.' },
      { title: 'Rice Terrace Trekking', description: 'Hike through stunning cascading rice terraces in Muong Hoa Valley.' },
      { title: 'Ethnic Village Visits', description: 'Meet the Hmong, Dao, and Tay communities and learn about their traditions.' },
      { title: 'Cat Cat Village', description: 'Walk through this picturesque Hmong village with waterfalls and traditional crafts.' },
      { title: 'Ham Rong Mountain', description: 'Climb for panoramic views of SaPa town and the surrounding valleys.' },
    ],
    specialities: [
      'Terraced Rice Fields (UNESCO candidate)',
      'Fansipan — Roof of Indochina',
      'Ethnic Minority Cultures',
      'Thang Co (Traditional Horse Meat Soup)',
      'Cool Mountain Climate Year-Round',
    ],
  },
  {
    slug: 'dalat',
    name: 'Da Lat',
    region: 'Central Highlands',
    tagline: 'City of Eternal Spring',
    description:
      'Da Lat is a charming highland city known for its cool climate, French colonial architecture, flower gardens, and pine-covered hills. Often called the "City of Eternal Spring," it offers a romantic escape from Vietnam\'s tropical heat.',
    image: '/destinations/Da_Nang_City_Tour.webp',
    thingsToDo: [
      { title: 'Crazy House', description: 'Explore the whimsical guesthouse designed like a giant tree with surreal architecture.' },
      { title: 'Datanla Waterfall', description: 'Ride the alpine coaster down to the waterfall and enjoy the natural scenery.' },
      { title: 'Xuan Huong Lake', description: 'Stroll or cycle around the central lake surrounded by pine trees and gardens.' },
      { title: 'Flower Gardens', description: 'Visit the famous Da Lat Flower Park with hundreds of flower species in bloom.' },
      { title: 'Night Market', description: 'Browse local crafts, try grilled corn, soy milk, and Da Lat pizza at the bustling night market.' },
    ],
    specialities: [
      'Cool Climate (15-24°C Year-Round)',
      'French Colonial Villas',
      'Strawberry & Artichoke Farms',
      'Da Lat Wine & Coffee',
      'Flower Capital of Vietnam',
    ],
  },
  {
    slug: 'hue',
    name: 'Hue',
    region: 'Central Vietnam',
    tagline: 'The Imperial City',
    description:
      'Hue is the former imperial capital of Vietnam, home to the magnificent Citadel, royal tombs, and pagodas along the Perfume River. A UNESCO World Heritage city rich in history, culture, and some of the best cuisine in Vietnam.',
    image: '/destinations/Hoi_An_Ancient_Town.webp',
    thingsToDo: [
      { title: 'Imperial Citadel', description: 'Explore the vast walled fortress with palaces, temples, and the Forbidden Purple City.' },
      { title: 'Thien Mu Pagoda', description: 'Visit the iconic 7-story pagoda overlooking the Perfume River — symbol of Hue.' },
      { title: 'Royal Tombs', description: 'Tour the elaborate tombs of emperors Khai Dinh, Tu Duc, and Minh Mang.' },
      { title: 'Perfume River Cruise', description: 'Take a sunset boat ride along the river passing pagodas and countryside.' },
      { title: 'Hue Street Food Tour', description: 'Taste Bun Bo Hue, Banh Khoai, and Nem Lui — Hue is Vietnam\'s food capital.' },
    ],
    specialities: [
      'UNESCO Imperial Citadel',
      'Bun Bo Hue (Spicy Beef Noodle Soup)',
      'Royal Cuisine Tradition',
      'Perfume River',
      'Ao Dai (Traditional Dress) Heritage',
    ],
  },
];

export function getCityBySlug(slug: string): CityData | undefined {
  return citiesData.find((city) => city.slug === slug);
}
