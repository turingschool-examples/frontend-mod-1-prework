## High level

### Checkerboard 8x8

1. First thing I did was google how many squares were on an actual checkerboard, the answer was 64 which would make it 8 rows of 8 (8x8).
2. I created an increment loop to count from 1 to 8.
```javascript
for(var i =1; i < 8; i++)
```
3. Then I used an if statement to log " x x x x" if the remainder was equal to zero.
```javascript
if (i % 2 === 0){}//Then the console logs " x x x x"
```
4. I found out that every number that didn't have a remainder of 0 had a remainder of 1 so I used the else if statement rather than an else statement.
```javascript
else if(i % 2 === 1){}//The console would log "x x x x"
```
