let passBox = document.querySelector(".passBox");
let inputRange = document.querySelector("#inputRange");
let passLen = document.querySelector ("#passLen");
let lowercase = document.querySelector ("#lowercase");
let uppercase = document.querySelector ("#uppercase");
let numbers = document.querySelector ("#numbers");
let symbols = document.querySelector ("#symbols");
let genBtn = document.querySelector(".genBtn");
let icon = document.querySelector("#copyIcon");

passLen.innerText =  inputRange.value;

inputRange.addEventListener('input', () => {
    passLen.innerText =  inputRange.value;
});


let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let num = "0123456789";
let allSymbols = "~!@#$%^&*()"
function generatePass () {
    let genPassword = "";
    let allChars = "";

    allChars += lowercase.checked ? lowerChars : " ";
    allChars += uppercase.checked ? upperChars : " ";
    allChars += numbers.checked ? num : " ";
    allChars += symbols.checked ? allSymbols : " ";

    if(allChars == " " || allChars.length == 0) {
        return genPassword;
    }

    for(let i = 1;i<=inputRange.value;i++) {
        genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
    }

    return genPassword;
}

genBtn.addEventListener('click', () => {
    passBox.value = generatePass();    
});

icon.addEventListener("click",() => {
    if(passBox.value != "" || passBox.value.length >= 1) {
        navigator.clipboard.writeText(passBox.value);
        copyIcon.innerText = "check";
        copyIcon.title = "Password Coppied";

        setTimeout(() => {
            copyIcon.innerText = "content_copy";
            copyIcon.title = "";
        },2000)
    }
})