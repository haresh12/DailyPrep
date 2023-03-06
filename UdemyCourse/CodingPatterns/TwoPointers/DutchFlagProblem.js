/*
   Dutch National Flag Problem (medium)
   
   Given an array containing 0s, 1s and 2s, sort the array in-place. You should treat numbers of the array as objects,
   hence, we can’t count 0s, 1s, and 2s to recreate the array. The flag of the Netherlands consists of three colors: red, white and blue; and since our input array also consists
   of three different numbers that is why it is called Dutch National Flag problem.


      Input: [1, 0, 2, 1, 0]
      Output: [0 0 1 1 2]

      Input: [2, 2, 0, 1, 2, 0]
      Output: [0 0 1 2 2 2 ]

   This question is simple to understand simple phele sab 0 lao then 1 and then 2   

   THIS IS PART OF partitioning and will go through it 

   https://www.youtube.com/watch?v=MbV26HWqxrs&list=PL-Jc9J83PIiFc7hJ5eeCb579PS8p-en4f&index=13

*/

/*
   FOR SORT 012

   AGAR 0 HAI TO SWAP I AND J THEN DONO  I AND J KO INCREMENT
   AGAR 1 HAI TO KUSH NHI BAS I++
   AGAR 2 HAI TO I OR K KO SWAP KRO AND K--

   YE SAB TAB TAK KRO JAB TAB I < K NHI BUT MERE BHAI I <= K NA HO JAYE TAB TAK
*/

function sort01(arr) {
  let i = 0;
  let j = 0;

  while (i < arr.length) {
    if (arr[i] === 0) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      i++;
      j++;
    } else {
      i++;
    }
  }
  return arr;
}

console.log(sort01([1, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1]));

/*
  The time complexity of the above algorithm will be O(N) as we are iterating the input array only once.
*/
function sort012(arr) {
  let i = 0;
  let j = 0;
  let k = arr.length - 1;

  while (i <= k) {
    // i ki value 1 hai to sirf i++
    if (arr[i] === 1) {
      i++;
    } else if (arr[i] === 0) {
      // i ki value 0 hai to i and j ko swap and then increase value of i and j both
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      i++;
      j++;
    } else {
      // arr[i] ki value 2 hai to i and k ko swap kro and k--;
      let temp = arr[i];
      arr[i] = arr[k];
      arr[k] = temp;
      k--;
    }
  }
  return arr;
}

console.log(
  sort012([1, 0, 1, 0, 1, 2, 0, 2, 2, 0, 1, 1, 0, 1, 2, 1, 1, 1, 0, 0, 1, 1])
);
