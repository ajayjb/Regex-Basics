const text = "Its time to leave the planet!. 1 2 3 4 5 6 7 8 9";

// i - flag for case sensitive
// g - flag for global search
// test - regex method to test a sentence
// match - string method to print matched patteren

// Without case sensitive
{
  const regex = /Its/;
  // console.log(regex.test(text));
}

// With case sensitive
{
  const regex = /its/gi;
  // console.log(regex.test(text));
}

// Without g flag it will stop at the first match. to search globally we need to use g flag
{
  const regex = /its/gi;
  // console.log(text.match(regex));
}

// Matching multiple words
{
  const regex = /its|leave|planet/gi;
  // console.log(text.match(regex));
}

// All the above search by word, case sensitive or in-sensitive. In order to search by part we need to use . notation
// Find anything starts with me or ends with me
{
  const regex = /me./gi;
  // console.log(text.match(regex));
}

// Search by character
// Find ovels
{
  const regex = /[aeiou]/gi;
  // Prints all letters exists in the sentence matched
  // console.log(text.match(regex));
}

// Search by character a-z
{
  const regex = /[a-z]/gi;
  // Prints all letters exists in the sentence matched
  // console.log(text.match(regex));
}

// Match numbers
{
  const regex1 = /[01234]/gi;
  const regex2 = /[0-9]/gi;

  // Prints all letters exists in the sentence matched
  // console.log(text.match(regex1));
  // console.log(text.match(regex2));
}

// Match numbers
{
  const regex = /[2-5h-z]/gi;
  // console.log(text.match(regex));
}

// Negated character set (I don't want match some character), we do this using carrot symbol
{
  const regex = /[^a-z0-9]/gi; // It will match all except a to z and 0 to 9, case sensitive
  // console.log(text.match(regex));
}
{
  const regex = /[^aeiou]/gi; // It will match all except aeiou, case sensitive
  // console.log(text.match(regex));
}

// Match letter accur more than one time together, use +. (does not include empty string)
{
  const regex = /si+/gi; // Match s and match i one or more time
  const text = "Missiiiiissiiiiiiiiiiiipisss";
  // console.log(text.match(regex));
}

{
  const regex1 = /gio*/gi; // Match gi and match o zero or more times (includers empty string if not matches)
  const text1 = "Gioooooooooal";
  // console.log(text1.match(regex1));

  const regex2 = /13*/gi; // Match g and match o zero or more times
  const text2 = "1333333133333";
  // console.log(text2.match(regex2));
}

// const regex = /t[a-z]m/gi;
// const regex = /t[a-z]*m/gi;
// console.log(text.match(regex))

// Lazy patteren match and greedy patteren match
// Greedy match means searching through all
{
  {
    // Greedy match as long as possible
    const string = "titanic";
    const regex = /t[a-z]*i/gi;
    // console.log(string.match(regex));
  }
  {
    // Lazy (?) just smallest match
    const string = "titanic";
    const regex = /t[a-z]*?i/gi;
    // console.log(string.match(regex));
  }

  {
    // Greedy match as long as possible
    const string = "<h1>This is H! tag</h1>";
    const regex = /<.*>/gi;
    // console.log(string.match(regex));
  }
  {
    // Lazy (?) just smallest match
    const string = "<h1>This is H! tag</h1>";
    const regex = /<.*?>/i;
    // console.log(string.match(regex));
  }
}
// Lazy match means stops at the first match

// const regex = /[a-z]*/gi
// console.log(text.match(regex))

// To check at the begining of the string (^ without character set)
{
  const regex1 = /^it/i; // Matches starting string
  // console.log(text.match(regex1));

  const regex2 = /^leave/i; // Does not match since its not at the begining of the string
  // console.log(text.match(regex2));
}

// To match ending string pattern ($ symbol is used)
{
  const regex1 = /1 2 3 4 5 6 7 8 9$/i; // Matches ending string
  // console.log(text.match(regex1));
}

{
  const regex1 = /\w/g; // Matches a-z, A-Z, 0-9, _
  // console.log(text.match(regex1));

  // Opposite to this one is \W
  const regex2 = /\W/g; // Matches other than a-z, A-Z, 0-9, _
  // console.log(text.match(regex2));
}

{
  const regex1 = /\d/g; // Matches only numbers
  // console.log(text.match(regex1));

  // Opposite to this one is \W
  const regex2 = /\D/g; // Matches other than numbers
  // console.log(text.match(regex2));
}

{
  // Username
  // const regex = /^[a-zA-Z]{2,}[0-9]{5,}$/
  const regex = /^[a-zA-Z]{2,}\d*$/;
  // console.log("Ad".match(regex))
}

{
  // Matching white space characters, new line return, tab space
  // const regex = /\s/g;
  // console.log(text.match(regex));

  const regex = /\S/g; // Matching other than white space characters, new line return, tab space
  // console.log(text.match(regex));
}

{
  // Quantifers
  // {min, max} repeataions
  // Leave max as empty if you want match infinite
  // If you want specify exact repeataions just use {num}
  const text = "Ohhh no";
  // console.log(text.match(/Oh{2,} no/));
  // console.log(text.match(/Oh{2,6} no/));
  // console.log(text.match(/Oh{3} no/));
}

{
  const favorite = "favorite";
  const regex = /favou?rite/; // May have u or not matches both
  // console.log(favorite.match(regex));
}

{
  // Word boundary
  const regex = /\b\w+\b/g;
  // console.log(text.match(regex));
}

{
  // Positive Lookahead ((?=...)) → Ensures that a pattern exists ahead.
  // Negative Lookahead ((?!...)) → Ensures that a pattern does NOT exist ahead.

  const regex1 = /p(?=u)/g;
  const regex2 = /p(?!u)/g;

  //   console.log("pu".match(regex1));
  //   console.log("pk".match(regex2));

  const text = "apple orange banana apricot avocado";
  //   console.log(text.match(/\b\w+\b(?= [aeiou])/gi));
  //   console.log(text.match(/\b\w+\b(?! [aeiou])/gi));

  // console.log(text.match(regex));
}

{
  const word = "regix regix";
  const regex = /(\w+)\s\1/gi;
  // console.log(word.match(regex));

  const num = "48 48 48";
  const regex2 = /(\d+)\s\1\s\2/;

  const hello = "   hello world   ";
  const regex3 = /(^\s*)|(\s*$)/;
  console.log(hello.replace(regex3, ""))
}
