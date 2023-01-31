
const generatePassword = (base,length)=>{
    let password = "";
    for (let i = 0; i < length; i++) {
        let ramdon= Math.floor(Math.random() * base.length);
        password +=base.charAt(ramdon);
        
    }
    return password;
}   




const generate=()=>{
let length = parseInt(inputLength.value);

let base = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = ".?,;-_¡!¿*%&$/()[]{}|@><";

    if (checkbox1.checked)base+=numbers;
    if (checkbox2.checked)base+=symbols;
    generatedPassword.innerText= generatePassword(base, length)
};

window.addEventListener('DOMContentLoaded',()=>{
    document.getElementById("btnGenerate").addEventListener("click",()=>{
        generate();
    })
})