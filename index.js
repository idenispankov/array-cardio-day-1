// Some data we can work with
const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 },
];

const people = [
  'Bernhard, Sandra',
  'Bethea, Erin',
  'Becker, Carl',
  'Bentsen, Lloyd',
  'Beckett, Samuel',
  'Blake, William',
  'Berger, Ric',
  'Beddoes, Mick',
  'Beethoven, Ludwig',
  'Belloc, Hilaire',
  'Begin, Menachem',
  'Bellow, Saul',
  'Benchley, Robert',
  'Blair, Robert',
  'Benenson, Peter',
  'Benjamin, Walter',
  'Berlin, Irving',
  'Benn, Tony',
  'Benson, Leana',
  'Bent, Silas',
  'Berle, Milton',
  'Berry, Halle',
  'Biko, Steve',
  'Beck, Glenn',
  'Bergman, Ingmar',
  'Black, Elk',
  'Berio, Luciano',
  'Berne, Eric',
  'Berra, Yogi',
  'Berry, Wendell',
  'Bevan, Aneurin',
  'Ben-Gurion, David',
  'Bevel, Ken',
  'Biden, Joseph',
  'Bennington, Chester',
  'Bierce, Ambrose',
  'Billings, Josh',
  'Birrell, Augustine',
  'Blair, Tony',
  'Beecher, Henry',
  'Biondo, Frank',
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const bornInFifteenth = inventors.filter(
  (inventor) => inventor.year >= 1500 && inventor.year < 1600
);
console.table(bornInFifteenth);

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const fullName = inventors.map(
  (inventor) => `${inventor.first} ${inventor.last}`
);
console.table(fullName);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const ordered = inventors.sort((a, b) => (a.year > b.year ? 1 : -1));
console.table(ordered);

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
const yearsTotalLived = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
}, 0);
console.log('Years total lived: ');
console.table(yearsTotalLived);

// 5. Sort the inventors by years lived
const oldest = inventors.sort((a, b) => {
  const lastPerson = a.passed - a.year;
  const nextPerson = b.passed - b.year;
  return lastPerson > nextPerson ? 1 : -1;
});
console.table(oldest);

// // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// const category = document.querySelector('.mw-category');

// // const links = category.querySelectorAll('a');
// // const de = links.map((link) => link.textContent); - CAN'T DO THAT - IT IS NODE LIST, NOT AN ARRAY - CONVERT TO AN ARRAY

// const links = Array.from(category.querySelectorAll('a'));
// const de = links
//   .map((link) => link.textContent)
//   .filter((streetName) => streetName.includes('de'));

// 7. sort Exercise
// Sort the people alphabetically by last name
const alpha = people.sort((lastOne, nextOne) => {
  const [aLast, aFirst] = lastOne.split(', ');
  const [bLast, bFirst] = nextOne.split(', ');
  return aLast > bLast ? 1 : -1;
});
console.log(alpha);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = [
  'car',
  'car',
  'truck',
  'truck',
  'bike',
  'walk',
  'car',
  'van',
  'bike',
  'walk',
  'car',
  'van',
  'car',
  'truck',
  'other transports',
];

const transportation = data.reduce((obj, item) => {
  if (!obj[item]) {
    obj[item] = 0;
  }
  obj[item]++;
  return obj;
}, {});
console.log(transportation);

/////////////////////////////////////////  PRACTICE  /////////////////////////////////////////

// 1. FILTER
const words = [
  'spray',
  'limit',
  'elite',
  'exuberant',
  'destruction',
  'present',
];
const result = words.filter((word) => word.length > 6);
console.log(result);

// 2. MAP
const peoplePractice = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
];

// Get last name and passed year
const lastNameAndPassed = peoplePractice.map((person) => {
  return `last-name: ${person.last}, passed: ${person.passed}`;
});
console.log(lastNameAndPassed);

// 3. Sort
const numbers = [
  2,
  19,
  6,
  57,
  99,
  46,
  33,
  84,
  3,
  7,
  1035,
  347,
  122,
  0,
  0,
  356,
  22,
  40,
  12,
];

const numbersSorted = numbers.sort((a, b) => {
  return a > b ? 1 : -1;
});
console.log(numbersSorted);

//  4. REDUCE
const sum = numbers.reduce((acc, cur) => {
  return acc + cur;
});
console.log(sum);
