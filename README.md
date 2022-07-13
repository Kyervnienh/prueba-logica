# PRUEBA #

Resolver los siguientes ejercicios en Python, Java, Swift, Kotlin o JavaScript

## Ejercicio 1 ##

Starting at the top left corner of an N x M grid and facing towards the right, you keep walking one square at a time in the direction you are facing. 
If you reach the boundary of the grid or if the next square you are about to visit has already been visited, you turn right. 
You stop when all the squares in the grid have been visited. What direction will you be facing when you stop? 
For example: Consider the case with N = 3, M = 3. The path followed will be (0,0) -> (0,1) -> (0,2) -> (1,2) -> (2,2) -> (2,1) -> (2,0) -> (1,0) -> (1,1). 
At this point, all squares have been visited, and you are facing right.

### Especificación de entrada ###
The first line contains T the number of test cases. Each of the next T lines contain two integers N and M, denoting the number of rows and columns respectively.
### Especificación de salida ###
Output T lines, one for each test case, containing the required direction you will be facing at the end. Output L for left, R for right, U for up, and D for down. 1 <= T <= 5000, 1 <= N,M <= 10^9.
### Ejemplo de entrada ###
4

1 1

2 2

3 1

3 3

### Ejemplo de salida ###
R

L

D

R


## Ejercicio 2 ##

A well-known software development company has been commissioned by the Archaeological Society. 
One of the modules has to help the archaeologists to process data about the ruins of buildings they have found during their excavations of ancient cities. Development of this module has been assigned to Vasya.

Vasya, being a seasoned programmer, at once noticed that the module would need a database to contain the descriptions of the ruins and the estimated construction times of the buildings. 
It would be all fine, but suddenly the manager got the genial idea that since the database describes Roman ruins, the years of construction should be stored in the Roman number system. 
Now Vasya is wondering how many symbols he needs to set aside for each year number field in the database. According to the functional specification, the software module must be able to handle years from A to B (inclusive).
Help Vasya determine the minimal number of characters sufficient for storing any year number in the range from A to B.

### Especificación de entrada ###
The only input line contains the descriptions of the years A and B, separated by the "-" sign. A description of a year consists of one to four decimal digits (the number of the year), followed by either "AD" (Anno Domini, the current era) or "BC" (Before Christ, before the current era). 
In both directions the years are numbered starting from 1. It is known that (753BC) <= A <= B <= (2012AD).

### Especificación de salida ###
The output should consist of a single integer, the minimal number of characters that have to be reserved in the database for the year number.


### Ejemplo de entrada ###
1BC-1AD
### Ejemplo de salida ###
7

### Hint(s) ###
For input:

753BC-747BC

Output must be:

3

For input:

2000AD-2012AD

Output must be:

10