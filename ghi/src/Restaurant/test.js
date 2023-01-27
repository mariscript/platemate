function filterTest() {
  let dietRestrictEntries = [
    ["id", 8],
    ["vegan", false],
    ["vegetarian", true],
    ["halal", false],
    ["account_id", 48],
  ];
  let dietRestrictions = dietRestrictEntries.filter(
    (entry) => entry[1] === true
  );
}

filterTest();

function openHours(hours) {
  let final = [];
  let days = {
    0: "Monday",
    1: "Tuesday",
    2: "Wednesday",
    3: "Thursday",
    4: "Friday",
    5: "Saturday",
    6: "Sunday",
  };
  for (let hour in hours) {
    let details = Object.values(hour);
    let start = details[0];
    let close = details[2];
    let day = days[details[3]];
    let formattedDay = `${day} ${start}-${close}`;
    final.push(formattedDay);
  }
  return final;
}

let hours = [
  { 0: { is_overnight: false, start: "1100", end: "2330", day: 0 } },
  { 1: { is_overnight: false, start: "1100", end: "2330", day: 1 } },
  { 2: { is_overnight: false, start: "1100", end: "2330", day: 2 } },
  { 3: { is_overnight: false, start: "1100", end: "2330", day: 3 } },
  { 4: { is_overnight: false, start: "1100", end: "2330", day: 4 } },
  { 5: { is_overnight: false, start: "1100", end: "2330", day: 5 } },
  { 6: { is_overnight: false, start: "1100", end: "2330", day: 6 } },
];

openHours(hours);

let photos = [
  "https://s3-media4.fl.yelpcdn.com/bphoto/28fWPRXg_2gFJFYmi6oPJQ/o.jpg",
  "https://s3-media3.fl.yelpcdn.com/bphoto/qh396htu8MgtIRtws_9CjQ/o.jpg",
  "https://s3-media4.fl.yelpcdn.com/bphoto/YzQ9u0aQwx4isR1wYgJd3A/o.jpg",
];
photos.map((photo) => photo);

const data = [
  {
    id: "_7BGw3YFNOTzP1Www3zB7g",
    alias: "mughlai-grill-new-york",
    name: "Mughlai Grill",
    image_url:
      "https://s3-media3.fl.yelpcdn.com/bphoto/R0MIGOkyV5I4sDlZLRVK3A/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/mughlai-grill-new-york?adjust_creative=RgSZtwz_1emwRYvPD5DiCw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=RgSZtwz_1emwRYvPD5DiCw",
    review_count: 489,
    categories: [
      {
        alias: "indpak",
        title: "Indian",
      },
    ],
    rating: 4.5,
    coordinates: {
      latitude: 40.7210905,
      longitude: -73.9840446,
    },
    transactions: ["delivery", "restaurant_reservation", "pickup"],
    price: "$$",
    location: {
      address1: "6 Clinton St",
      address2: "",
      address3: null,
      city: "New York",
      zip_code: "10002",
      country: "US",
      state: "NY",
      display_address: ["6 Clinton St", "New York, NY 10002"],
    },
    phone: "+12125332828",
    display_phone: "(212) 533-2828",
    distance: 1621.796017619103,
  },
  {
    id: "zyQpS4QrYYB0VKXf7JPUlQ",
    alias: "atithi-indian-cuisine-brooklyn",
    name: "Atithi Indian Cuisine",
    image_url:
      "https://s3-media3.fl.yelpcdn.com/bphoto/ZUBeEb5-a-XisknvoeVwUA/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/atithi-indian-cuisine-brooklyn?adjust_creative=RgSZtwz_1emwRYvPD5DiCw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=RgSZtwz_1emwRYvPD5DiCw",
    review_count: 165,
    categories: [
      {
        alias: "indpak",
        title: "Indian",
      },
    ],
    rating: 5,
    coordinates: {
      latitude: 40.714765,
      longitude: -73.961606,
    },
    transactions: ["delivery", "restaurant_reservation", "pickup"],
    price: "$$",
    location: {
      address1: "159 Grand St",
      address2: null,
      address3: "",
      city: "Brooklyn",
      zip_code: "11249",
      country: "US",
      state: "NY",
      display_address: ["159 Grand St", "Brooklyn, NY 11249"],
    },
    phone: "+17186849192",
    display_phone: "(718) 684-9192",
    distance: 1721.4056144725282,
  },
  {
    id: "x0k5kFArHLijdY8-NEQ7Xg",
    alias: "bengal-tiger-indian-food-new-york",
    name: "Bengal Tiger Indian Food",
    image_url:
      "https://s3-media3.fl.yelpcdn.com/bphoto/EUNmQqtz3KqB8LFX19pyRA/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/bengal-tiger-indian-food-new-york?adjust_creative=RgSZtwz_1emwRYvPD5DiCw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=RgSZtwz_1emwRYvPD5DiCw",
    review_count: 2253,
    categories: [
      {
        alias: "indpak",
        title: "Indian",
      },
    ],
    rating: 4.5,
    coordinates: {
      latitude: 40.763167,
      longitude: -73.977131,
    },
    transactions: ["delivery", "pickup"],
    price: "$$",
    location: {
      address1: "58 W 56th St",
      address2: "Fl 2",
      address3: "",
      city: "New York",
      zip_code: "10019",
      country: "US",
      state: "NY",
      display_address: ["58 W 56th St", "Fl 2", "New York, NY 10019"],
    },
    phone: "+12122652703",
    display_phone: "(212) 265-2703",
    distance: 6250.358046760276,
  },
];

function getData(data) {
  let result = data.map((business) => business);
  return result;
}
getData(data);
