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
photos.map((photo) => photo)
