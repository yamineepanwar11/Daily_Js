// Positive or Negative number
let n = -1;
if (n === 0) {
    console.log("number is zero");
} else if (n > 0) {
    console.log("number is positive");
} else {
    console.log("number is negative");
}

// Even or Odd number:
// let num=2;
//     if(num%2==0){
//         console.log("num is even")
//     }
//     else{
//         console.log("num is odd")
//     }

// Sum of N Natural numbers:     
// let n=6;
// let sum=0;
// for(let i=1;i<=n;i++){
//     sum=sum+i;
// }
// console.log(sum)

// Sum of N Natural numbers:(2nd method)     
// function Natural(n) {
//     return n * (n + 1) / 2;
// }
// let n = 5;
// console.log(Natural(n));

// Sum of numbers in a given range:
// let n=10;
// let sum=0;
// for(let i=0;i<=n;i++){
//     sum=sum+i;
// }
// console.log(sum);

// Greatest of two numbers:
// let a = 150;
// let b = 160;
// let c = 160;

// if (a > b && a > c) {
//     console.log("a is greater");
// } 
// else if (b > a && b > c) {
//     console.log("b is greater");
// }
// else if (c > a && c > b) {
//     console.log("c is greater");
// } 
// else if (a === b && b === c) {
//     console.log("All are equal");
// }
// else if (a === b && a > c) {
//     console.log("a and b are equal and greater");
// }
// else if (a === c && a > b) {
//     console.log("a and c are equal and greater");
// }
// else if (b === c && b > a) {
//     console.log("b and c are equal and greater");
// }

// let year=1200;
// if((year%4==0) && (year%100!=0)||(year%400==0)){
//     console.log("Leap year");
// }
// else{
//     console.log("not a leap year");
// }



// Prime number: 
// let n=4;
// let sum=0;
// for(let i=0;i<=n;i++){
//     if(n%i==0){
//         sum++;
//     }
// }
// if(sum==2){
//     console.log("prime")
// }
// else{
//     console.log("not a prime")
// }

// Prime number within a given range
let num=5;
let prime=[];
for(let i=1;i<=num;i++){
    let count=0;

for(let j=1;j<=i;j++){
    if(i%j==0){
        count++;
    }
}
if(count==2){
    prime.push(i)
}
}

console.log(prime);

// Sum of digits of a number:
// let n=1234;
// let sum=0;
// while(n>0){
//     let rem=n%10;
//     sum=rem+sum;
//     n=parseInt(n/10);
// }
// console.log(sum);


// Reverse of a number :
// let n=1234567;
// let rev="";
// while(n>0){
//    let rem=n%10;
//     rev=rev+rem;
//     n=parseInt(n/10)
// }
// console.log(rev);