

// function sum(a,b){
//     return a + b ;
// }


// let ans = sum(2,3)

// console.log(ans);

// function perimterOfCircle( pie , r){
//     return 2 * pie * r ;
// }

// function perimterOfCircle(pie ){
//     return function(r){
//         return 2*pie*r;
//     }
// }

// let circle = perimterOfCircle(3.14);



// console.log(circle(2));

function multiply(a){
    return function(b){
        return a * b;
    }
}

let multiplyByThree = multiply(3);

console.log(multiplyByThree(2));

let multiplyByFour = multiply(4);  

console.log(multiplyByFour(2));