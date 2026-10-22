// 3 types scoping  global , function , block
// var is a global var
// let is a block
console.log(a);   //undefine
var a= 34;    //after 56 its also change dueto global 
{
    console.log(a);  //34
    a = 56;
    console.log(a);//56
    var a = 78;
    console.log(a);//78

}
console.log(a);//78

let b = 34;     
console.log(b); //34
{
    
   let b = 78;
    console.log(b);//78
     b = 67;
    console.log(b);//67

}
console.log(b); //34