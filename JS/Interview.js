// re-assign 
// var,let  can be re-assigned 
// const cannot be res-assigned 

// re-declartion 
// var can be re-declared 
// let and const  cannot be redeclared 

// Hoisting - it is the process by which variables and functions will get the memory before the actual code execution 

// var let and const  are  hoisted but (let and const are hoisitied in a diffrent zone ( temporal Dead zone ) )

// Scoping of Let var and const   {}

// function scope 

// var is function scoped and let and const are blocked scope 

// var let and const are function scoped because ( function is also a block of code ) 

// function scope 
// scope chaining 
// global scope 
// lexical scope 
// block scope 





// let a = 10 ;

// var b = 99 ;

// console.log(a)
// console.log(b)

// function first(){

// console.log(a)
// console.log(b)

//     var b = 199 ;
//     function second(){

//         console.log(a );

//         console.log(b)

//     }

//     second()
// }

// first();

// console.log(a)
// console.log(b)


// let  a = 10 ;




// console.log(a);
// console.log(b)

// {
//     let  a = 99 ;
//     var b = 199
//     console.log(a);
//     console.log(b)
// }

// console.log(a);
// console.log(b)


var a = 10 ;

function abc(){
console.log(a);
    var a = 100 ;
}

abc();

console.log(a);
