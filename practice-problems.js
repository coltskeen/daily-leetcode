//Write a loop that prints every number divisible by 3 from 1-200

//INPUTS: integers from 1 - 200
//OUTPUts: console.log(every number divisible by three in the window)

//for loop, while loop
let num = 1;
while(num <= 200) {
    if( num % 3 === 0 ) console.log(num);
    num++;
}