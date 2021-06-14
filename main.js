// function songDecoder(song) {
//     let out = ''
//     let str = song.replace(new RegExp('WUB', 'g'), ' ');
//     let arr = str.split(' ');
//     arr.forEach(elem => {
//         if (elem !== '') {
//             out += elem + ' ';
//         }
//     })
//     console.log(out);
// }

// songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB");

// function tribonacci(signature, n) {
//     let arr = [];
//     if (n > 0) {
//         for (let i = 0; i < signature.length; i++) {
//             if (n > i) {
//                 arr.push(signature[i]);
//         }
//     }
//     for (let k = 0; k < n - 3; k++) {
//         let a = arr[k];
//         let b = arr[k + 1];
//         let c = arr[k + 2];
//         let d = a + b + c;
//         arr.push(d);
//     }
// }
// return arr;
// }

// console.log(tribonacci([1, 1, 1], 1));
//[1,2,3,6,11,20,37,68,125,230])

// function expandedForm(num) {
//     let str = String(num);
//     let out = '';
//     console.log(str);
//     if (num > 0) {
//         for(let i = 0; i < str.length; i++) {
//             if(str[i] > 0) {
//                 out = str[i] + 0 + ' + ';
//                 out += `${str[i]}`;
//             } 
//         }
//         console.log(out);
//     }
// }
// function expandedForm(num) {
//     let multiple = 10;
//     let result = [];
//     while (num > 1){
//       let remainder = num%multiple;
//       if(remainder > 0){
//         result.unshift(remainder);
//       }
//       num -= remainder;
//       multiple = multiple * 10;
//     }
//     return result.join(" + ");
//   }
// console.log(expandedForm(73));
// let out = '';
// let amount = 0;
// let v = [
//   {
//     win: 20, 
//     winSymbol:'10',
//   },
//   {
//     win: 40, 
//     winSymbol:'K',
//   },
//   {
//     win: 30, 
//     winSymbol:'Q',
//   },
//   {
//     win: 10, 
//     winSymbol: function () {
//       return 5;
//     }
//   },
// ]
// for(let i = 0; i < v.length; i++) {
//   for(let key in v[i]) {
//     console.log(v[i][key]);
//     if(key == 'winSymbol') {
//       out += v[i][key]+' ';
//     } else if(key == 'win') {
//       amount += v[i][key];
//     }
//   }
// }
// console.log(out, amount);

// let a = [2, 5, 9];
// let b = [];

// for (let i = 0; i < a.length; i++) {
//     b.push({x: i, y: a[i]});
// }

// console.log(b);


let position = {
    "0":[{"x":0,"y":1},{"x":1,"y":1},{"x":2,"y":1}],
    "1":[{"x":0,"y":1},{"x":1,"y":2},{"x":2,"y":2}],
    "2":[{"x":0,"y":1},{"x":1,"y":2},{"x":2,"y":1}],
    "3":[{"x":0,"y":1},{"x":1,"y":1},{"x":2,"y":2}],
    "4":[{"x":0,"y":0},{"x":1,"y":2},{"x":2,"y":0}],
    "5":[{"x":0,"y":0},{"x":1,"y":2},{"x":2,"y":2}]}

// for( var key in position) {
//     for( var i = 0; i < position[key].length; i++) {
//         console.log(position[key][i]['x']);
//     }
// }


// console.log(position);



// function anagrams(word, words) {
//     let a = word.split('').sort().join('');

//     let c = words.filter(elem => {
//         if(elem.split('').sort().join('') === a) {
//             return true;
//         } else {
//             return false;
//         }

//     });

//     return c.reverse();


// }



// console.log(anagrams('racer', ['crazer', 'racer', 'racar', 'caers', 'carer']));



// function findOutlier(integers) {
//     console.log(integers);
//     let b = [];
//     let c = [];
//     for (let i = 0; i < integers.length; i++) {
//         if (integers[i] % 2 === 0) {
//             b.push(integers[i]);
//         } else {
//             c.push(integers[i]);
//         }
//     }

//     if(b.length === 1) {
//         console.log(b[0]);
//     } else {
//         console.log(c[0]);
//     }
// }
// findOutlier([0, 1, 2])

// function disemvowel(str) {
//     let out = '';
//     let vowels = ['A', 'a', 'E', 'e', 'I', 'i', 'O', 'o', 'U', 'u'];
//     for(let i = 0; i < str.length; i++) {
//         if(vowels.includes(str[i]) == false ) {
//             out += str[i]; 
//         } 
//     }

//     console.log(out);
// }

// disemvowel("This website is for losers LOL!");

// function maskify(cc) {
//     let out = "";
//     for (let i = 0; i < cc.length; i++) {
//         if(i > cc.length-5) {
//             out += cc[i];
//         } else {
//             out += '#';
//         }
//     }
//     console.log(out);
// }

// maskify("Nananananananananananananananana Batman!");

// function findOdd(A, n) {
//     let b = {};
//     for(let k = 0; k < A.length; k++) {
//         let key = A[k];
//         if(b[key]) {
//             b[key]++;
//         } else {
//             b[key] = 1;
//         }
//     }
//     console.log(b);
//     for(key in b) {
//         if(b[key] % 2) {
//             console.log(n);
//         }
//     }


// }
// findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5], 5);



// function doTest(a, n) {
//     console.log("A = ", a);
//     console.log("n = ", n);
//     Test.assertEquals(findOdd(a), n);
//   }
//   describe('Example tests', function() {
//     doTest([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5], 5);
//     doTest([1,1,2,-2,5,2,4,4,-1,-2,5], -1);
//     doTest([20,1,1,2,2,3,3,5,5,4,20,4,5], 5);
//     doTest([10], 10);
//     doTest([1,1,1,1,1,1,10,1,1,1,1], 10);
//     doTest([5,4,3,2,1,5,4,3,2,10,10], 1);
//   });























// function createPhoneNumber(numbers){
//     let out = '';
//     for(let i = 0; i < numbers.length; i++) {
//       switch (i) {
//         case 0: 
//             out += `(${numbers[i]}`;
//             break;
//         case 1:
//             out += `${numbers[i]}`;
//             break;
//         case 2:
//             out += `${numbers[i]}) `;
//             break;
//         case 3: 
//         case 4:
//         case 5:
//             out += `${numbers[i]}`;
//             break;
//         case 6:
//             out += `-${numbers[i]}`;
//             break;
//         case 7:
//         case 8:
//         case 9:
//             out += `${numbers[i]}`;
//             break;
//         default:
//             out = '';
//       }
//     }
//     console.log(out);
//   }

//   createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);// => returns "(123) 456-7890"