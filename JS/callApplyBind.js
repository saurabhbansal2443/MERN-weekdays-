

function details( state , company ){
    console.log(this.name + "  " + this.age + "  " + company + "  " + state);
}
let obj1 = {
    name : "saurabh",
    age : 23 ,
}

let obj2 = {
    name : "Karan",
    age : 19 ,
}


// details.call(obj1 , "Delhi" , "GFG")

//details.apply(obj1 , ["delhi" , "GFG"])

let myfunc = details.bind(obj1, "Delhi" , "GFG")

myfunc()