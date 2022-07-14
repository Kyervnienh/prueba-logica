// Ejercicio 2

const getCharsDigit = (numb) => { // Se obtiene el valor de caracteres necesarios para cada digito
    if (numb == 1 || numb == 5) return 1;
    else if (numb == 2 || numb == 4 || numb == 6 || numb == 9) return 2;
    else if (numb == 3 || numb == 7) return 3;
    else if (numb == 8) return 4;
    else return 0;
}

const getMinChars = (desc) => {

    const from = desc.split("-")[0];
    const to = desc.split("-")[1];

    let firstYear = from.slice(-2) === "BC" ? 754 - parseInt(from.slice(0, -2)) : from.slice(-2) === "AD" ? parseInt(from.slice(0, -2)) + 753 : 0;

    let lastYear = to.slice(-2) === "BC" ? 754 - parseInt(to.slice(0, -2)) : to.slice(-2) === "AD" ? parseInt(to.slice(0, -2)) + 753 : 0;

    if (firstYear < 1 || lastYear > 2765 || firstYear > lastYear) return "invalid date";

    let charsNumber = [];

    for (let i = firstYear; i <= lastYear; i++) {  // Se calcula el número de caracteres de cada número en el rango ingresado

        let currentYear = i.toString().split("");

        let accum = 0;

        currentYear.forEach(yearDigit => {
            accum += getCharsDigit(yearDigit);
        })

        charsNumber.push(accum);
    }

    return charsNumber.sort((a, b) => a - b)[charsNumber.length - 1] // Retorna la cantidad de caracteres necesarios para guardar cualquier fecha en ese rango

}

// console.log(getMinChars("1BC-1AD"));    // 7
// console.log(getMinChars("753BC-747BC"));     //  3
// console.log(getMinChars("2000AD-2012AD"));   // 10