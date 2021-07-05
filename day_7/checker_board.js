var chr='';
for (var num=0; num <8; num++){
    for (var num_1=0; num_1 <=3; num_1++){
        if (num%2 == 0) chr += "#  "; else chr +="  #";
    }
    console.log(chr)
    chr = '';
}
