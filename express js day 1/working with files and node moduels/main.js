

//if you want check all fs function..
const fs= require("fs")
console.log(fs);


//fs function. for create fils..using syncrones and acynscrosnes le...
//1)sync


console.log("starting")
fs.writeFileSync("aman.txt","aman is good boy");
console.log("ending")




//2) acyncronesly..---------------------------------------------

console.log("starting")
fs.writeFile("aman2.txt","aman is bad boy",()=>{//write..
    console.log("file crated")

    fs.readFile("aman2.txt",(error,data)=>{//READ
        console.log(data.toString())
    })
    fs.appendFile("aman2.txt","append kro",(error,data)=>{//APPEND
        console.log(data);
    })
})
console.log("ending")



//create,read,write...operation