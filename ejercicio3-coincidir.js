const coincide = (frase, busqueda) => {
    let textoLimpio = frase.toLowerCase()
                        .replace(/[!¡,-_]/gi, '')

    let resultado = 0;


    if(textoLimpio.includes(busqueda)){

        let palabras = textoLimpio.split('');
        let mapa = {};
        

        for (let palabra of palabras){
            if(mapa[palabra]){
                mapa[palabra]++;

            } else {
                mapa[palabra] = 1;
            }

        }
        
       
    } else {
        resultado = 0;
    }

    return resultado;

}

coincide('hola que tal', 'soy yo')