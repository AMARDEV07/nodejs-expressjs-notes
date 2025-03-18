HOW FS WORK ON FILE MODUELS...

->fs moduel means file system moduel which use to handel operation 
like read,write update etc..it comes with node js u dont need to install it.

//---------------------------------------------------------------------------------
1)-->METHOD TO CREATE FS FILE function ...or working with file modules two way..

a) synchoranson-
console.log("starting")
fs.writeFileSync("aman.txt","aman is good boy")

b) asynchoranson;-

console.log("starting")
fs.writeFile("aman2.txt","aman is bad boyty",()=>{
    console.log("file crated")
})
console.log("ending")



//---------------------------------------------------
read,write,operation ha bs
when use use read file operation then we use path,or error,data.....
//--------------------------------------

2) now avoid call back hell us use promise using promises..for preform opration

import fs from "fs/promises"
async function m(){
    let a=await  fs.readFile("aman.txt");
console.log(a.toString());
}
m()


3)path-
path moduels baisc ha bs check krta h ki file name dr name etc


