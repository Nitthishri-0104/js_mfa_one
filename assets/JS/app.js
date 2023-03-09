/*get the number of characters*/
function charLength() {

    let charLength = document.getElementById('length').value;
    document.getElementById('result').innerHTML = charLength;
    return charLength;

}

document.getElementById('length').addEventListener('change', charLength)

let checkbox1 = true;
let checkbox2 = true;
let checkbox3 = true;

checkbox1 = document.getElementsById("uppercase").checked
checkbox2 = document.getElementsById("lowerrcase").checked
checkbox3 = document.getElementsById("numbers").checked

let check1;

let result=document.getElementById("password_result").value

document.getElementById("btn").addEventListener("click",function generate(){

    
    

    if (checkbox1 == true) {

        const str1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let pass1;

        for (let i = 0; i < charLength; i++) {
            let char = Math.floor(Math.random() *
                str1.length + 1);
    
                pass1 += char
                
                
        }
        document.getElementById("password_result").innerHtml = pass1;
    }
    
     else if (checkbox1 == true && checkbox2 == true) {
        let pass2;
        var str2 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
            'abcdefghijklmnopqrstuvwxyz'
    
        for (let i = 0; i < charLength; i++) {
            let char = Math.floor(Math.random() *
                str2.length + 1);
                pass2 += char
        }
        document.getElementById("password_result").innerHtml = pass2;
    }

     else if (checkbox1 == true && checkbox2 == true && checkbox3 == true) {
        var str3 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
            'abcdefghijklmnopqrstuvwxyz0123456789@#$%^&*';
            let pass3;
        for (let i = 1; i <= 8; i++) {
        let char = Math.floor(Math.random() *
                str3.length + 1);
                pass3 += str3
        }
        document.getElementById("password_result").innerHtml = pass3;
    }
})

