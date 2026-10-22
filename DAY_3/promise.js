let myPromise = new Promise((resolve, reject) => {
    // async task
let age = 19;
    if (age > 18) {
        resolve("Eligible");
    } else {
        reject("Error");
    }
});

//1st mtd
// promise
// .then((msg)=> console.log(msg))
// .catch((err)=> console.log(err));

//2nd mtd
const checkAge = async ()=>{
    try{
        const msg = await myPromise;
    console.log(msg);
    }catch(error){
        console.log(error);
    } 
    
}
checkAge();