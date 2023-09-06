var a;
var state=true;
test(17);
const test=(a)=>{
    if(a<=15){
        state=true;
       }
       else{
           state=false;
       }
       if(state){
           console.log("Is innocent");
       }
       else{
           console.log("Is not innocent");
       }
}
function display(name){
    console.log("Hello",name); 
}
display("Pradwin")

let display=(name)=>{
    console.log(`Hello ${name} how are you`)
}
display("Pradwin");


let m=(name,Solution="Hello")=>{
return `${Solution} ${name}`;
}
console.log(m("Pradwin"));

let m=(name,Solution="Hello")=>{
console.log(`${Solution} ${name}`);
}
let display=(name)=>{
    console.log(`Hello ${name} how are you`)
}
function all(name){
    display(name);
    m(name);
}
all("Pradwin");