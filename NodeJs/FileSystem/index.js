
let fs = require("fs");

// console.log(fs)
console.log("start")

// fs.writeFile("./demo.txt" , "  I am changed content" , (err )=>{
//     console.log(err)
//     console.log("writing the file ")
// });

fs.readFile("./demo.txt" , "UTF-8" ,  (err, data) => {
    if (err) {
        console.log(err)
    }else{
        console.log(data)
    }
})

// fs.mkdir("./demofolder" , function(err, dir) {
//     if (err) {
//         console.log(err)
//     }
//     console.log("I am non-blocking operation ")
// })

// fs.readdir("./../basics" , function (err, files) {
//     if (err) (console.log(err));
//     else {
//         console.log(files);
//     }
// })

// fs.rename("./demofolder" , "./chnagedName", (err)=>{
//     console.log(err)
// })

fs.rmdir("./chnagedName",(err, dir) => {
    if (err) {}
})



console.log("End")

