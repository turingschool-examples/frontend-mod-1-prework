## Ceasar Cipher

> Read the entire file before starting.

Also known as a shift cipher, the Ceasar Cipher is one of the oldest and simplest encoding techniques.  A Ceasar Cipher works by shifting the alphabet by a set number of letters down the alphabet. For example, with a left shift of 3, 'D' would be replaced by 'A', 'E' would be replaced by 'B', and so on. See below for a full alphabet example with a left shift of 3:

```
plain:  ABCDEFGHIJKLMNOPQRSTUVWXYZ
cipher: XYZABCDEFGHIJKLMNOPQRSTUVW
```

## The Prompt

Write a program that will take any String, and encode it based on a provided shift value. The interaction pattern for this program might look something like this:

```javascript
encode("Hello World", 5); //should log "CZGGJ RJMGY"

encode("Hi", 2); //should log "FG"
```

## Your Task

Add a `highLevelCC.md` file to your `finalProject` directory. In that file, write up high level notes about how you would solve this problem. When you're finished writing your detailed notes, it is optional to implement a solution in code.