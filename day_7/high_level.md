##Potential Solution For Checker Board Problem


  1. First, you would need to create a function.  This function would have a single parameter, the desired size of the checkerboard.
  2. Next, using an array constructor, you would create an array with the desired size of the board being passed into the array.  This would act as your x-axis.
  3. The array would then need to be populated with "X"s and " "s in an "every other" fashion.
  4. You would then run a loop to print that same array until the number of arrays is equal to the desired size of the checkerboard. This would essentially create a y-axis for you.
  5. Every other array created in the previous step would need to be shifted over one space to create the alternating effect.  
  6. The set of arrays would then need to be converted into strings in order to create a more checkerboard-like appearance.
  7. When the time comes, the user would then call the function and pass in an argument that they desire for the board to be.  
