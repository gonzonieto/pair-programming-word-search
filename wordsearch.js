//Transpose: 2D array -> 2D array
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


const wordSearch = (letters, word) => {
    // 'letters' is a 2D array of char
    // 'horizontalJoin' is 1D array of strings
    const transposedLetters = transpose(letters);
    const reversedWord = word.split('').reverse().join('');

    const checkLines = (matrix) => {
        const lines = matrix.map(ls => ls.join(''))
        for (l of lines) {
            if (l.includes(word) || l.includes(reversedWord)) return true;
        };
        return false;
    };

    return checkLines(letters) || checkLines(transposedLetters) ? true : false;
}

module.exports = wordSearch

const getDiagonalMatrixLines = (matrix) => {
    const output1 = []; //array of strings
    const output2 = [];

    const output = {
        diag: [],
        revDiag: []
    }
    
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (i === 0 || j === 0) {
                //At starting point
                //For loop to get diagnoal
                output1[output1.length] = [];
                output2[output2.length] = [];
                let a = i;
                let b = j;
                while (!(a > matrix.length - 1 || b > matrix[0].length - 1)) {
                    output1[(output1.length)-1].push(matrix[a][b]);
                    output2[(output2.length)-1].push(matrix[2-a][b]);
                    a++;
                    b++;
                }
            }
        };
    };

    //what is this returning?
    return {diag: output1, revDiag: output2};
};

const testMatrix = [
    [2, 3, 4],
    [1, 2, 3],
    [0, 1, 2]
];

console.log(getDiagonalMatrixLines(testMatrix));

// x+y-1

///DIAGNOAL   x
//      0  1  2  3
// y 0  .  .  .  .
//   1  .  .  .  .
//   2  .  .  .  .
//   3  .  .  .  .
// 
//  Diagonal lines should be:
//  - (0,3)
//  - (0,2),(1,3)
//  - (0,1),(1,2),(2,3)
//  - (0,0),(1,1),(2,2),(3,3)
//  - (1,0)...
//  - (2,0)...
//  - (3,0)...