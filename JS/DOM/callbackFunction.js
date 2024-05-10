

console.log("start")



setTimeout(function bakeBread() {
    let bakedbread = " baked+" +" bread";
    console.log(bakedbread)
    setTimeout(function addSauces(bakedBread) {
        let saucedBread = "sauces+" + bakedBread;
        console.log(saucedBread)
        setTimeout(function addTopings(saucedBread) {
            console.log("Topings+" + saucedBread);

        }, 2000)
    }, 2000)
}, 2000)



console.log("end");

