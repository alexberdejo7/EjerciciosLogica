

const multiplicar = (number) => {

    let resultado = `Tabla del ${number} # \n`;


    for (let i = 1; i <= 10; i++) {
        let multiplicacion = (i*number);

        resultado += `${i} x ${number} = ${multiplicacion} \n`
    }

    return resultado
}


console.log(multiplicar(7))