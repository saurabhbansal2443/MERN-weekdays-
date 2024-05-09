
let obj = {
    name : "Saurabh",
    age : 23 , 
    address : {
        city : "delhi",
        country : "India"
    }
}

let copyObj = obj ;  // this is called shallow copy 

// let deepcopy = JSON.parse(JSON.stringify(obj)); // pure deep copy 


// lets try with spread operators

let scopy = {...obj} // mix of shallow and deep copy 


scopy.address.city = "Noida"


console.log("og Obj ",obj);
console.log("copy Obj" ,scopy)


// console.log(JSON.stringify(obj))