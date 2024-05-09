

// let arr1 = [1,2,3,4];
// let arr2 = ['a','b','c','d'];



// let copy = [...arr1, ...arr2]

// console.log(copy)

// let obj = {
//     name : "saurabh",
//     age : 23 
// }

// let copyObj = {
//     ...obj
// }

// console.log(copyObj)

// rest paramter 

function sum(...para){
   let arr = para ;  // para is a array 

   let sum = 0 ;

   for(let i=0;i<arr.length ; i++ ){
    sum = sum + arr[i];
   }

   return sum ;
}

console.log(sum(2,3,5,9,6,7,3))