# High Level

## Checker Board

// Input: integer - board size
// Output: strings - repeated in "X" and " " pattern for argument amount of times

create a function named `checkerBoard` which takes in an argument of `size`
IF `size` is odd
  FOR as long as `i` (which is equal to 1) is less than `size`
    IF `i` is odd,
      declare variable `boardPattern1` equal to "X "
      declare variable `boardRow1` equal to `boardPattern1` repeated for half `size`, plus "X"
      log `boardRow1`
    ELSE
      declare variable `boardPattern2` equal to " X"
      declare variable `boardRow2` equal to `boardPattern2` repeated for half `size`, plus " "
      log `boardRow2`
ELSE (size is even)
  FOR as long as `i` (equal to 1) is less than size
    IF `i` is odd,
      declare variable `boardPattern1` equal to "X "
      declare variable `boardRow1` equal to `boardPattern1` repeated for half `size`
      log `boardRow1`
    ELSE
      declare variable `boardPattern2` equal to " X"
      declare variable `boardRow2` equal to `boardPattern2` repeated for half `size`
      log `boardRow2`


## Caesar Cipher
create edge case to address a very large num
  `num` is equal to  `num` modulo 26

  declare `lowerCaseStr` variable equal to all lowercase `str` (use toLowerCase)
  declare `alphabet` variable equal to an array of the lowercase alphabet (use a string of lowercase alphabet letters and split method)
  declare a `resultStr` variable

  FOR as long as `i` is less than the length of `lowerCaseStr`
    declare variable `currentLetter` equal to `lowerCaseStr[i]`
    IF `currentLetter` strongly equals " "
      `resultStr` plus equals `currentLetter`
      CONTINUE iterating

    declare variable `currentIndex` equal to the index of `currentLetter` of `alphabet` (use indexOf)
    declare variable `newIndex` equal to `currentIndex` plus `num`

    // account for newIndex being beyond length of alphabet
    IF `newIndex` is greater than 25
      `newIndex` is equal to `newIndex` minus 26

    // account for newIndex being negative
    IF `newIndex` is less than 0
      `newIndex` is equal to `newIndex` plus 26

    // capitalize values at newIndex which were capitalized in input str[i]
    IF `str` at `i` strongly equals uppercase `str` at `i` (use toUpperCase)
      `resultStr` plus equals uppercase `alphabet` at `newIndex` (use toUpperCase)
    ELSE
      `resultStr` plus equals `alphabet` at `newIndex`

  return `resultStr`
