

let arr = [10, 20, 30, 40, 50 ]

let arr2 = [ 10, 20,]


Array.prototype.sum = function(){
    let arr = this ;
    let sum = 0

    for (let i = 0;i<arr.length;i++){
        sum += arr[i]
    }
    return sum
}



console.log(arr2.sum())

