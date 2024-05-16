
function counter(){
let count = 0 ; 
return {
    increment : function(){
        count++;
        console.log(count); 
    },
    decrement : function(){
        count--;
        console.log(count);
    }
}
} 
let obj = counter();

let {increment,decrement} = obj;

increment()
increment();
increment();

count = 50 ; // this line has no effect now 

decrement();
decrement();
