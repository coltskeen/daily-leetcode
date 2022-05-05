//INPUTS: n x n matrix (array of arrays)

//OUTPUT: n x n matrix rotated 90 degress 
//EX: [0][0] --> [0][2]
//EX: [0][1] --> [1][2]
//EX: [0][2] --> [2][2]
//EX: [1][0] --> [0][1]
//EX: [1][1] --> [1][1]
//EX: [1][2] --> [2][1]
//EX: [2][0] --> [0][0]
//EX: [2][1] --> [1][0]
//EX: [2][2] --> [2][0]
// var rotate = function(matrix) {
  /* **OUT-OF-PLACE SOLUTION** */
  
  // let temp = [];
  // matrix.forEach(index => temp.push([]));
  // for(let o = 0; o < matrix.length; o++) {
  //   for(let i = matrix[o].length - 1; i >=0; i--){
  //     // console.log(matrix[o][i]);
  //     temp[i].unshift(matrix[o][i])
  //   }
  // }
  // return temp;

  /* **IN-PLACE SOLUTION** */
  // const rows = matrix.length;
  // // console.log(rows);
  // matrix.forEach(index => matrix.push([]));
  
  // for(let o = matrix.length - 1; o >= 0 ; o--) {
  //   for(let i = matrix[o].length - 1; i >= 0; i--){
  //     // console.log(matrix[o][i]);x
  //     matrix[i+rows].push(matrix[o][i]);
  //   }
  // }
  // matrix.splice(0, rows);
  // return matrix;
  
// };


//TEST SUITE
// let matrix = [
//   [1,2,3],
//   [4,5,6],
//   [7,8,9]
// ]
// let matrix = [
//   [5,1,9,11],
//   [2,4,8,10],
//   [13,3,6,7],
//   [15,14,12,16]
// ]
// console.log(rotate(matrix));
// Output-1: [[7,4,1],[8,5,2],[9,6,3]]
// Output-2: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]