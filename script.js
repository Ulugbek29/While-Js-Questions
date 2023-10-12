// While - 1

// const n = parseInt(prompt("Enter the value N"))

// let k = 0;

// while(k < n) {
//     console.log(k)
//     k++
// }

// While - 2

// let a = parseInt(prompt("Enter the value A"))
// let b = parseInt(prompt("Enter the value B"))
// let counter = 0;

// while(a <= b) {
//     a++
//     console.log(a)

//     counter++;
// }


// While - 3

// let a = parseInt(prompt("Enter the value A"))
// let b = parseInt(prompt("Enter the value B"))
// let counter = 0;

// while(a > b) {
//     console.log(a)
    
//     a--;
//     counter++;
// }


//While - 4


// let priceOfCandyFor1Kg = 1500;


// let i = 0;

// while( i < 10) {

//     let price = i * priceOfCandyFor1Kg
//     console.log(price)
//     i++;
// }

// While - 5


// let priceOfCandyFor1Kg = 2500;


// let i = 0;

// while( i <= 1) {

//     let price = i * priceOfCandyFor1Kg
//     console.log(price.toFixed(2))
//     i+=0.1;
// }

// While - 6


// let priceOfCandyFor1Kg = 1000;


// let i = 1;

// while( i <= 2) {

//     let price = i * priceOfCandyFor1Kg
//     console.log(price)
//     i += 0.2;
// }



// While - 7

// let a = parseInt(prompt("Enter the value A"))
// let b = parseInt(prompt("Enter the value B"))
// let sum = 0;


// while(a < b) {

//     sum +=a
//     a++;
// }

// console.log(sum)

//While - 8


// let a = parseInt(prompt("Enter the value A"))
// let b = parseInt(prompt("Enter the value B"))
// let res = 0;


// while(a < b) {

//     res *=a
//     a++;
// }

// console.log(res)

// While - 9

// let a = parseInt(prompt("Enter the value A"))
// let b = parseInt(prompt("Enter the value B"))
// let res = 0;


// while(a < b) {

//     res +=a**2
//     a++;
// }

// console.log(res)


//While - 10\



// const n = parseInt(prompt("Enter the value N "))
// let sum = 0;

// let i = 1;

// while(i < n) {

//     sum += 1/i

//     i++;
// }

// console.log(sum.toFixed(2))


// While - 11


// const n = parseInt(prompt("Enter the value N "))
// let sum = 0;

// let i = 0;

// while(i < n) {

//     sum  = (i + i)**2

//     i++;
// }

// console.log(sum)


// While - 12


// const n = parseInt(prompt("Enter the value N "))
// let sum = 0;

// let i = 1;

// while(i < n) {

//     sum  += i

//     i+= 0.1;
// }

// console.log(sum.toFixed(2))


// while - 13 ??????????

// let a = parseInt(prompt("Enter the value of the A"))
// let b = parseInt(prompt("Enter the value of the B"))

// function findRemainder(a, b) {
//     let res = 0;

//     while(a >= b) {
//         a -= b;
//         res = a;
//     };
//     return res
// }

// console.log(findRemainder(a, b))



// While - 14

// let a = parseInt(prompt("Enter the value of the A"))
// let b = parseInt(prompt("Enter the value of the B"))

// function countChunks(a, b) {
//     let count = 0;
//     while (a >= b) {
//       a -= b;
//       count++;
//     }
//     return count;
//   }

//   let res = countChunks(a, b)
//   console.log(res)
  


// While - 15

// let n = parseInt(prompt("Enter the value of the N"))
// let k = parseInt(prompt("Enter the value of the K"))



// function findRemainderAndWhole(min, max) {
//     let wholeNum = 0;
//     let remainder;
//     while(min <= max) {
//         max -=min;

//         remainder = max;
//         wholeNum++;
//     }
//     console.log(`Butun son - ${wholeNum}, Qoldiq - ${remainder}`) 
// }

// if(n <= k) {
//     findRemainderAndWhole(n, k)
// }else {
//     findRemainderAndWhole(k, n)
// }


// While - 16

// const n = parseInt(prompt("Enter the value N"))



// function divisibleToThree(n) {
//     let res;
// while(0 < n) {
//     n -= 3;
//     res = n
// };

// if(res === 0) {
//     console.log("3- ning darajasi")
// }else {
//     console.log("3-ning darajasi emas")
// }
// }

// divisibleToThree(n)


// While - 17 ?????


// const n = parseInt(prompt("Enter the value N"))



// function findPower(n) {
//     let result = 1;
//     let count = 0;

//         while (result < n) {
//             result *= 2;
//             count++;
//           }
//     return count
//   }
  
// console.log(findPower(n)) 


// While - 18


// const n = parseInt(prompt("Enter the value of the N"))

// function numberReverse(n) {
//     let wholeNum = 0;
//     let remainder = 0;
//     let i = 0
//     while(i < n) {
//         n -=i;
//         i++;
        
//         remainder = n;
//         wholeNum++;
//     }
//     console.log(`${wholeNum}.${remainder} -> ${remainder}.${wholeNum}`)
// }
// numberReverse(n)

// While - 19 ??????????????????? 
// const n = parseInt(prompt("Enter the value of the N"))

// function numberReverse(n) {
//     let wholeNum = 0;
//     let remainder = 0;
//     let i = 0
//     while(i < n) {
//         i++;
//         n -=i;
        
//         remainder = n;
//         wholeNum++;
//         console.log(`${wholeNum} + ${remainder} -> `, wholeNum + remainder)
//     }
// }
// numberReverse(n)