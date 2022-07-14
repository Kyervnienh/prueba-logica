// Ejercicio 2

const getCharsDigit = (numb) => { // Se obtiene el valor de caracteres necesarios de acuerdo al digito
    if (numb == 1 || numb == 5) return 1;
    else if (numb == 2 || numb == 4 || numb == 6 || numb == 9) return 2;
    else if (numb == 3 || numb == 7) return 3;
    else if (numb == 8) return 4;
    else return 0;
}

const getMinChars = (desc) => {

    const from = desc.split("-")[0];
    const to = desc.split("-")[1];

    let firstDate = from.slice(-2) === "BC" ? 754 - parseInt(from.slice(0, -2)) : from.slice(-2) === "AD" ? parseInt(from.slice(0, -2)) + 753 : 0;

    let secondDate = to.slice(-2) === "BC" ? 754 - parseInt(to.slice(0, -2)) : to.slice(-2) === "AD" ? parseInt(to.slice(0, -2)) + 753 : 0;

    let countTotal = [];

    const firstNumb = firstDate.toString().split("")

    const secondNumb = secondDate.toString().split("")

    for (let j = 0; j < secondNumb.length; j++) {

        let count1 = []

        for (let i = firstNumb[j] || 0; i <= secondNumb[j]; i++) count1.push(getCharsDigit(i)); // se calculan los caracteres en un rago determinado

        countTotal.push(count1.sort()[count1.length - 1]); // Se guarda el valor máximo de cada digito
    }

    return countTotal.reduce((accum, current) => accum + current) // Retorna la cantidad de caracteres necesarios para guardar la fecha

}

console.log(getMinChars("753BC-2012AD"));    // 11
console.log(getMinChars("753BC-747BC"));     //  3
console.log(getMinChars("2000AD-2012AD"));   // 10