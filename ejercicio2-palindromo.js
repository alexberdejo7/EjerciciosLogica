const palindromo = (text) => {
    let invertido = text
                .split('')
                .reverse()
                .join('')
                ;

    return invertido ? true : false;


}



// const esPalindromo = (palabra) => {
//   const palabraInvertida = palabra.split('').reverse().join('');
//   return palabra === palabraInvertida ? true : false;
// }

// // ejemplo de uso
console.log(palindromo('reconocer')); // true
 console.log(palindromo('hola')); // false
