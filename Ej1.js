// Ejercicio 1.

const getDirection = (rows, columns) => {

    let grid = [];

    const directionsArr = ["R", "D", "L", "U"]; // direcciones

    for (let i = 0; i < rows; i++) {
        grid[i] = new Array(columns).fill(1);  // creación de i filas con un número de columnas "columns", cada casilla con valor 1.
    }

    let direction = "R"; // Dirección incial

    let squaresFree = rows * columns; // número de casillas libres y sin recorrer.

    let i = 0, j = 0, x = 0, y = 1; // contadores y auxiliares para recorrer las casillas

    while (squaresFree > 0) { // mientras hayan casillas sin recorrer el loop se sigue ejecutando

        switch (direction) { // Recorrer las casillas dependiendo de la dirección

            case "R": {

                for (j; j < columns; j++) {
                    grid[i][j] = 0;
                }

                direction = "D";

                columns--;
                j--;
                i++;
                break
            }

            case "D": {

                for (i; i < rows; i++) {
                    grid[i][j] = 0;
                }

                direction = "L";
                rows--;
                i--;
                j--;
                break
            }

            case "L": {

                for (j; j >= x; j--) {
                    grid[i][j] = 0;
                }

                direction = "U";
                x++;
                j++;
                i--;
                break
            }

            case "U": {

                for (i; i >= y; i--) {
                    grid[i][j] = 0;
                }

                direction = "R";
                y++;
                i++;
                j++;
                break
            }
        }

        // Comprobación de las casillas libres

        squaresFree = grid.map(row => row.reduce((accum, current) => accum + current))
            .reduce((accum, current) => accum + current)
    }

    return directionsArr[directionsArr.indexOf(direction) - 1]; // Regresa la dirección final
}

const runTestCases = () => { // función para pedir los datos utilizando prompt
    let casesArr = [];

    let nCases = prompt("Number of test cases (1 to 50000): ");

    if (nCases < 1 || nCases > 5000) return console.log("Error") // retorna un error si el numero de casos no se encuentra entre 1 y 5000

    for (let k = 0; k < nCases; k++) {
        let mxn = prompt("Introduce the rows and columns. Ex: 3 3")

        if (parseInt(mxn.split(" ")[0]) > 10 ** 9 || parseInt(mxn.split(" ")[0]) < 1 || parseInt(mxn.split(" ")[1]) > 10 ** 9 || parseInt(mxn.split(" ")[1]) < 1) return console.log("Error");

        casesArr.push({
            rows: parseInt(mxn.split(" ")[0]),
            columns: parseInt(mxn.split(" ")[1]),
        })
    }

    let resulTestCases = [];

    casesArr.forEach(Element => {
        resulTestCases.push(getDirection(Element.rows, Element.columns));
    })

    console.log(resulTestCases)

}

 // runTestCases();
 // console.log(getDirection(3, 1));