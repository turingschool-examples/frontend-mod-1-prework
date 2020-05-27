To start, I want to acknowledge that I created programs for each of the problems already. I didn't see that we were supposed to write about our impressions first. I will try to recapture what I was thinking about each of the problems.

For the caeser cipher problem, I noticed in the example typing a string out of the Alphabet (aka 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'). I knew that you can access individual characters through indices using something like index notation, so it sprang to mind that maybe I could use a string like that to do the letter conversions. For instance, if A = 0 and we are rightshifting by 10, we just add 0 + 10 to get the shifted letter, 10 = K.

Using this strategy, then all we have to do is go letter by letter applying the shift. We can do that with a for loop using the attribute of String Objects .length. I noticed that the output only spat out to Upper Case, and I didn't like that, so I decided that my answer would have to address lower case letters also.

For the checker board problem, the 3 obstacles to solving it was:

1. Be able to create a string of alternating 'X's and ' 's of variable length. Probably use a for-loop with a passed argument
2. Be able to choose whether that string starts with either an 'X' or a ' '. Probably have a boolean that toggles every pass through the for-loop
3. Organize a variable amount of these strings alternating with ' ' or 'X'. Use another for-loop again using a different passed argument

Once I broke the problem down like that, I was confident it would be straightforward to solve.
