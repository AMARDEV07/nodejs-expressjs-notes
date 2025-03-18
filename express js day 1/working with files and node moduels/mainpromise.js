import fs from "fs/promises"
async function m(){
    let a=await  fs.readFile("aman.txt");
console.log(a.toString());
}
m()