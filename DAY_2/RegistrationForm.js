let username = document.getElementById("name");
let userEmail = document.getElementById("email");
let userPass= document.getElementById("pass");
let btn = document.getElementById("btn");


const handleClick = ()=>{
console.log(username.value);
console.log(userEmail.value);
console.log(userPass.value);

}
btn.addEventListener("click" , handleClick)