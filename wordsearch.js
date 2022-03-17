const wordSearch = (letters, word) => {
    const getDiagonalMatrixLines = (matrix) => {
        const output1 = []; //array of strings
        const output2 = [];
    
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[0].length; j++) {
                // GET DIAGONAL LINE
                if (i === 0 || j === 0) {
                    //At starting point
                    //For loop to get diagonal
                    output1[output1.length] = [];
                    output2[output2.length] = [];
    
                    const matrixHeight = matrix.length - 1;
                    const matrixWidth = matrix[0].length - 1;
    
                    let a = i;
                    let b = j;
    
                    while (!(a > matrixHeight || b > matrixWidth)) {
                        output1[(output1.length)-1].push(matrix[a][b]);
                        output2[(output2.length)-1].push(matrix[matrixHeight-a][b]);
                        a++;
                        b++;
                    }
                }
            }
        };
        return {diag: output1, revDiag: output2};
    };

    const checkLines = (matrix) => {
        const lines = matrix.map(ls => ls.join(''))
        for (l of lines) {
            if (l.includes(word) || l.includes(reversedWord)) return true;
        };
        return false;
    };

    const transpose = function(matrix) {
        const result = [];
        for (let i = 0; i < matrix[0].length; i++) {
          const resultRow = [];
          for (let j = 0; j < matrix.length; j++) {    
              resultRow.push(matrix[j][i]); 
          }
          result.push(resultRow);
        }
        return(result);
    };

    const reversedWord = word.split('').reverse().join('');
    const diagonals = getDiagonalMatrixLines(letters);

    const matrixLines = {
        horizontal: letters,
        vertical: transpose(letters),
        diagonal: diagonals.diag,
        "reverse diagonal": diagonals.revDiag
    };

    for (let key of Object.keys(matrixLines)) {
        if (checkLines(matrixLines[key])) {
            console.log(`The word was found in ${key}`);
            return true
        }
    }
    return false;
}

module.exports = wordSearch