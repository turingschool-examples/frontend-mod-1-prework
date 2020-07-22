for (var i = 10; i > 0 ; i--) {
  var message;
  if (i > 2) {
    message = i + ' speckled frogs sat on a log eating some most delicious bugs.\nOne jumped in the pool where its nice and cool, then there were ' + (i - 1) + ' speckled frogs.\n';
  } else if (i === 2) {
      message = '2 speckled frogs sat on a log eating some most delicious bugs.\nOne jumped in the pool where its nice and cool, then there was 1 speckled frog.\n';
  } else {
      message = '1 speckled frog sat on a log eating some most delicious bugs.\nOne jumped in the pool where its nice and cool, then there were no more speckled frogs!\n';
  }
  console.log(message)
};
