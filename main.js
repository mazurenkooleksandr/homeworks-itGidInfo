function findOutlier(integers) {
    console.log(integers);
    let b = [];
    let c = [];
    for (let i = 0; i < integers.length; i++) {
        if (integers[i] % 2 === 0) {
            b.push(integers[i]);
        } else {
            c.push(integers[i]);
        }
    }

    if(b.length === 1) {
        console.log(b[0]);
    } else {
        console.log(c[0]);
    }
}
findOutlier([0, 1, 2])









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