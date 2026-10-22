const checkAge = async () => {

    let age = document.getElementById("age").value;

    let myPromise = new Promise((resolve, reject) => {
        if (age >= 18) {
            resolve("Eligible");
        } else {
            reject("Not eligible to vote");
        }
    });

    try {
        const msg = await myPromise;
        document.getElementById("result").innerText = msg;
    } catch (error) {
        document.getElementById("result").innerText = error;
    }
};