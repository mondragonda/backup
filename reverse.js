const reverseFunction = (S) => {
    const result = Array(S.length);
    const regexExpr = new RegExp(/[^a-zA-Z]/);
    for (let charIndex = S.length - 1; charIndex >= 0;) {
        if (!regexExpr.test(S[charIndex])) {
           const lettersSubstring = [];
           while(!regexExpr.test(S[charIndex]) && charIndex >= 0){
            lettersSubstring.push(S[charIndex])
            charIndex -= 1;
           }
           result.splice(charIndex + 1, lettersSubstring.length, ...lettersSubstring);
        } else {
            result[charIndex] = S[charIndex];
            charIndex-=1;
        }
    } 
    console.log(S);
    console.log(result.join(''));
}

reverseFunction('quie$rounte#xtoal"#revesseverussnape'); // irafog
reverseFunction('Fragmento de un escrito con unidad temática, que queda diferenciado del resto de fragmentos por un punto y aparte y generalmente también por llevar letra mayúscula inicial y un espacio en blanco en el margen izquierdo de alineación del texto principal de la primera línea.')

