// map , filter , reduce , for each \

// MAP function 

let arr = [1,2,3,4,5];


// let ans = arr.map(function (ele , idx , arr ){
//     return  ele%2 == 0
// })
// console.log(arr)
// console.log(ans)

// let filteredArr = arr.filter(function(ele,idx , arr ){
//       return ele%2 == 0 ;
// })


// console.log(arr);

// console.log(filteredArr)

let sum = arr.reduce(function(acc , curr ){
    return acc + curr ;
},5)

console.log(sum)