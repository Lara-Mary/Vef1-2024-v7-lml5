/**
 * Verkefni 7 í Vefforritun 1, 2024.
 * Notar jsdoc til að skrifa lýsingu á föllum, inntaki og úttaki.
 * Kveikið á `Check JS` í Visual Studio Code til að sjá mögulegar villur.
 * Notar `console.assert` til að athuga hvort föll virki rétt.
 */

//------------------------------------------------------------------------------
// Fastar

/** Íslenskir samhljóðar */
const CONSONANTS = 'bcdfghjklmnpqrstvwxz'.split('');

/** Íslenskir sérhljóðar */
const VOWELS = 'aeiouyáéýúíóöæ'.split('');

//------------------------------------------------------------------------------
// Hjálparföll

/**
 * Athuga hvort óþekkt gildi sé strengur eða ekki.
 * @param {unknown} str Óþekkt gildi sem athuga á hvort sé strengur.
 * @returns `true` ef `str` er strengur, annars `false`.
 */
// Skilgreinum anonymous fall og bindum við breytuna `isString`
const isString = (str) => typeof str === 'string';

// Prófum fallið
console.assert(isString('hi') === true, 'isString: skilar `true` fyrir streng');
console.assert(isString(42) === false, 'isString: skilar `false` fyrir tölu');
console.assert(isString(null) === false, 'isString: skilar `false` fyrir null');

/**
 * Öruggt fall sem skilar fylki af strengjum úr gefnum streng, skipt upp með
 * gefnum afmkarkara (separator).
 * @param {string} str Hugsanlegur strengur sem skal skipta.
 * @returns {string[]} Fylki af strengjum eða tóma fylkið ef afmarkari kom
 * ekki fram.
 */
function split(str, separator = ' ') {
  if (!isString(str)) {
    return [];
  }

  return str.split(separator);
}

//------------------------------------------------------------------------------
// Grunnföll sem skilgreina á

/**
 * Fallið tekur inn streng og finnur lengsta orðið í strengnum.
 * @param {*} str Strengur sem fundið er lengsta orðið í.
 * @returns Lengsta orðið
 */
function longest(str) {
  if (!isString(str)) {
    return null;
  }
  if (str === '') {
    return '';
  }
  var setning = split(str);
  var lengsta = setning[0];
  for(var i = 1; i < setning.length; i++) {
    if(setning[i].length > lengsta.length) {
      lengsta = setning[i];
    }
  }
  return lengsta;
}

console.assert(longest('hæhæ ég heiti Lára') === 'heiti', 'longest: skilar `heiti` fyrir \'hæhæ ég heiti Lára\'');
console.assert(longest('') === '', 'longest: skilar `` fyrir \'\'');

/**
 * Fallið tekur inn streng og finnur stysta orðið í strengnum.
 * @param {*} str Strengur sem fundið er stysta orðið í.
 * @returns Stysta orðið.
 */
function shortest(str) {
  if (!isString(str)) {
    return null;
  }
  if (str === '') {
    return '';
  }
  var setning = split(str);
  var stysta = setning[0];
  for(var i = 1; i < setning.length; i++) {
    if(setning[i].length < stysta.length) {
      stysta = setning[i];
    }
  }
  return stysta;
}

console.assert(shortest('hæhæ ég heiti Lára') === 'ég', 'shortest: skilar `ég` fyrir \'hæhæ ég heiti Lára\'');
console.assert(shortest('') === '', 'shortest: skilar `` fyrir \'\'');

/**
 * Fallið tekur inn streng og snýr honum við.
 * @param {*} str Strengur sem snúið er við.
 * @returns Streng lesinn í öfugri röð.
 */
function reverse(str) {
  if (!isString(str)) {
    return null;
  }
  if (str === '') {
    return '';
  }
  const splits = split(str, '');
  const reversed = splits.reverse();
  
  return reversed.join('');
}

console.assert(reverse('halló') === 'óllah', 'reverse: skilar `óllah` fyrir \'halló\'');
console.assert(reverse('') === '', 'reverse: skilar `` fyrir \'\'');

/**
 * Fallið tekur inn streng og athugar hvort strengurinn lesist 
 * eins frá hægri til vinstri og frá vinstri til hægri.
 * @param {*} str Strengur sem er athugað hvort lesist eins í báðar áttir.
 * @returns True eða false eftir því hvort strengurinn lesist eins í báðar áttir eða ekki.
 */
function palindrome(str) {
  if (!isString(str)) {
    return false;
  }
  if (str === '') {
    return false;
  }
  
  const reversed = reverse(str);
  if(str === reversed) {
    return true;
  } else {
    return false;
  }
}

console.assert(palindrome('hah') === true, 'palindrome: skilar true fyrir \'hah\'');
console.assert(palindrome('') === false, 'palindrome: skilar false fyrir \'\'');

/**
 * Fallið tekur inn streng og finnur hversu margir sérhljóðar eru í strengnum.
 * @param {*} str Strengur sem fundið er sérhljóðana í.
 * @returns Fjöldi sérhljóða í streng.
 */
function vowels(str) {
  if (!isString(str)) {
    return 0;
  }
  if (str === '') {
    return 0;
  }
  
  str = str.toLowerCase();
  const setning = split(str, '');
  var fjoldiSerhljoda = 0;
  for(var i = 0; i < setning.length; i++) {
    if(VOWELS.includes(setning[i])) {
      fjoldiSerhljoda = fjoldiSerhljoda + 1; 
    } 
  }
  return fjoldiSerhljoda;
}

console.assert(vowels('Halló heimur') === 5, 'vowels: skilar 5 fyrir \'Halló heimur\'');
console.assert(vowels('') === 0, 'vowels: skilar 0 fyrir \'\'');

/**
 * Fallið tekur inn streng og finnur hversu margir samhljóðar eru í strengnum.
 * @param {*} str Strengur sem fundið er samhljóðana í.
 * @returns Fjöldi samhljóða í streng.
 */
function consonants(str) {
  if (!isString(str)) {
    return 0;
  }
  if (str === '') {
    return 0;
  }
  str = str.toLowerCase();
  const setning = split(str, '');
  var fjoldiSamhljoda = 0;
  for(var i = 0; i < setning.length; i++) {
    if(CONSONANTS.includes(setning[i])) {
      fjoldiSamhljoda = fjoldiSamhljoda + 1; 
    } 
  }
  return fjoldiSamhljoda;
}

console.assert(consonants('Halló heimur') === 6, 'consonants: skilar 6 fyrir \'Halló heimur\'');
console.assert(consonants('') === 0, 'consonants: skilar 0 fyrir \'\'');

//------------------------------------------------------------------------------
// Leiðbeint ferli

/**
 * Fallið lætur notenda vita hvernig fallið virkar og biður notenda um að slá inn setningu.
 * @returns Lengsta og stysta orðinu í setningunni, setningunni í öfugri röð, 
 * fjölda sérhljóða og samhljóða og true eða false eftir því hvort setning sé palindrome.
 */
function start() {

  alert('Forritið tekur inn streng og finnur ýmsa hluti útúr því');

  const setning = prompt('Sláðu inn setningu:');

  if(!isString(setning)) {
    return;
  } 

  const lengsta = longest(setning);
  const stysta = shortest(setning);
  const ofug = reverse(setning);
  const serhljoda = vowels(setning);
  const samhljoda = consonants(setning);
  const rod = palindrome(setning);

  const utkoma = 
    'Lengsta orðið: ' + lengsta +
    '\nStysta orðið: ' + stysta +
    '\nÖfug setning: ' + ofug +
    '\nFjöldi sérhljóða: ' + serhljoda +
    '\nFjöldi samhljóða: ' + samhljoda +
    '\nPalindrome: ' + rod;

  alert(utkoma);
}
