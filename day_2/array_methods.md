#### Methods

+ pop() *removes* the last element of an array and returns new element
    var bands = ['Spoon', 'Radiohead', 'Alt-J'];
    console.log(bands.pop());
    Alt-J
    console.log(bands);
    ['Spoon', 'Radiohead']

+ push() *adds* zero or more elements to the end of any array and returns new element.
    var vegetables = ['tomato', 'carrot', 'squash'];
    var count = vegetables.push ('ginger');
    console.log(count);
    4
    console.log(vegetables);
    ['tomato', 'carrot', 'squash', 'ginger']

+ shift() *removes* first element and returns that removed element. Changes length of array.
    var array1 = ['Ben','Colin','Syringa'];
    var firstElement = array1.shift();
    console.log(firstElement);
    Ben
    console.log(array1);
    ['Colin', 'Syringa']

+ unshift() *adds* one or more elements to the beginning of array, returns new length.
    var array1 = [1, 2, 3,];
    console.log(array1.unshift(4,5));
    5
    console.log(array1);
    [4,5,1,2,3]
