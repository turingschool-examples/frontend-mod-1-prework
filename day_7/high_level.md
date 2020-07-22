
First create a checker board variable with a space for a number data type for the user to enter.
Create an empty array.
Next run a loop that will create the number of arrays as the data type indicated by the user.
Then add the same number of objects in each array to match the number data type that the user input.
Run a for loop with an if statement that odd numbered arrays will have a " " in the odd indexes and a "x" in the even indexes.
Run another for loop with an if statement that even numbered arrays will have "x" in the even number indexes and the odd indexes hold a "x".

gameBoard(6);

let board = [
  [ , x,  , x,  , x]
  [x,  , x,  , x,  ]
  [ , x,  , x,  , x]
  [x,  , x,  , x,  ]
  [ , x,  , x,  , x]
  [x,  , x,  , x,  ]
];

To solve the CeasarCipher problem:
Start by creating a class CeasarCipher with constructors A-Z.
  Create a new CeasarCipher instance of cipher.
      Input the keys (A-Z) and their matching values (in this case X-W).
    Create a function which will take in the string to cipher.
      Nesting inside the function a for in loop to search through the keys and match with the correct values.
      Return the values which would return the ciphered message.  

class CeasarCipher {
  constructor(A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z){
  this.A = A;
  this.B= B;
  this.C= C;
  this.D= D;
  this.E= E;
  this.F= F;
  this.G= G;
  this.H= H;
  this.I= I;
  this.J= J;
  this.K= K;
  this.L= L;
  this.M= M;
  this.N= N;
  this.O= O;
  this.P= P;
  this.Q= Q;
  this.R= R;
  this.S= S;
  this.T= T;
  this.U= U;
  this.V= V;
  this.W= W;
  this.X= X;
  this.Y= Y;
  this.Z= Z;
 }
};

var cipher = new CeasarCipher();

var cipher = {
  A: "X",
  B: "Y",
  C: "Z",
  D: "A",
  E: "B",
  F: "C",
  G: "D",
  H: "E",
  I: "F",
  J: "G",
  K: "H",
  L: "I",
  M: "J",
  N: "K",
  O: "L",
  P: "M",
  Q: "N",
  R: "O",
  S: "P",
  T: "Q",
  U: "R",
  V: "S",
  W: "T",
  X: "U",
  Y: "V",
  Z: "W",
}

function dicpher(str){
  for (var prop in cipher){
  return(`${cipher[prop]}`);  
  }
}
