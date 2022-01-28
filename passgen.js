var Password = document.getElementById("pw");
var Copy = document.getElementById("copy");
var RangeNumber = document.querySelector(".r");
var Toggle = document.querySelector(".switch");
var UpperLetter = document.getElementById("upperLetter");
var LowerLetter = document.getElementById("lowerLetter");
var Num = document.getElementById("number");
var SpecialChar = document.getElementById("symbol");
var PassText = "";

function RandomX(x)
{
    if(x == 0)
    PassText += Math.floor((Math.random()*10)+x);
    else if(x == 33)
    PassText += String.fromCharCode(Math.floor((Math.random()*15)+x));
    else
    PassText += String.fromCharCode(Math.floor((Math.random()*26)+x));
}


function GeneratePass(){
    while(PassText.length < RangeNumber.value)
    {
        if(UpperLetter.checked)
        {
        RandomX(65);
        if(PassText.length == RangeNumber.value)
        break;
        }
        if(LowerLetter.checked)
        {
            RandomX(97);
            if(PassText.length == RangeNumber.value)
            break;
        }
        if(Num.checked)
        {
            RandomX(0);
            if(PassText.length == RangeNumber.value)
            break;
        }
        if(SpecialChar.checked)
        {
            RandomX(33);
            if(PassText.length == RangeNumber.value)
            break;
        }
    }
    Password.innerText=PassText;
} 
Copy.addEventListener("click", () => {  
    const textarea = document.createElement("textarea");  
    const password = Password.innerText;  
    if (!password) {  
     return;  
    }  
    textarea.value = password;  
    document.body.appendChild(textarea);  
    textarea.select();  
    document.execCommand("copy");  
    textarea.remove();  
    alert("password copied to clipboard");  
   });  