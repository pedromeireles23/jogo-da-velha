

const matrix = [ [1, 2, 3], 
                 [4, 5, 6], 
                 [7, 8, 9]];
//  Este trecho cria uma matriz bidimensional chamada matrix com 3 linhas e 3 colunas. Inicialmente, a matriz é preenchida com números de 1 a 9

matrix[0][0] = 'X';
matrix[0][1] = 'O';
matrix[0][2] = 'X';

matrix[1][0] = 'O';
matrix[1][1] = 'X';
matrix[1][2] = 'O';

matrix[2][0] = 'X';
matrix[2][1] = 'O';
matrix[2][2] = 'X';
// Esses comandos alteram os elementos da matriz original, substituindo os números por caracteres 'X' e 'O'. 
for(let row of matrix){
    const rowString = row.join(' ');
    console.log(rowString);
    // Este loop for itera sobre cada linha da matriz.
    // Para cada linha (row), os elementos da linha são unidos em uma string única, separados por espaços, usando o método join(' ').
    // Em seguida, essa string é impressa no console usando console.log.
}

// Inicializa uma matriz 3x3 com números de 1 a 9.
// Modifica todos os elementos da matriz para formar um padrão com 'X' e 'O'.
// Imprime a matriz resultante no console, linha por linha, onde cada linha é formatada como uma string com os elementos separados por espaços.