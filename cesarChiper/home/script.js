function encode() {
    const text = document.getElementById('text').value;
    const shift = parseInt(document.getElementById('key').value);
    
    if(Number.isNaN(shift) || text === "") 
        return;
    
    let encodedText = '';

    for (let i = 0; i < text.length; i++) {
        let charCode = text.charCodeAt(i);
        
        //Controllo se il carattere è una cifra
        if(charCode >= 48 && charCode<=57) {
            charCode = ((charCode-48 + shift)%10) + 48;
        }else 
        // Check if character is a letter
        if (charCode >= 65 && charCode <= 90) {
            // Uppercase letters
            charCode = ((charCode - 65 + shift) % 26) + 65;
        } else if (charCode >= 97 && charCode <= 122) {
            // Lowercase letters
            charCode = ((charCode - 97 + shift) % 26) + 97;
        }
        
        encodedText += String.fromCharCode(charCode);
    }

    document.getElementById('result').innerText = `${encodedText}`;
}

function decode() {
    const text = document.getElementById('text').value;
    const shift = parseInt(document.getElementById('key').value);
    if(Number.isNaN(shift) || text === "") 
        return;
    let decodedText = '';

    for (let i = 0; i < text.length; i++) {
        let charCode = text.charCodeAt(i);
        //Controllo se il carattere è una cifra
        if(charCode >= 48 && charCode<=57) {
            charCode = ((charCode-48 - shift)%10) + 48;
        }else 
        // Check if character is a letter
        if (charCode >= 65 && charCode <= 90) {
            // Uppercase letters
            charCode = ((charCode - 65 - shift + 26) % 26) + 65;
        } else if (charCode >= 97 && charCode <= 122) {
            // Lowercase letters
            charCode = ((charCode - 97 - shift + 26) % 26) + 97;
        }

        decodedText += String.fromCharCode(charCode);
    }

    document.getElementById('result').innerText = `${decodedText}`;
}