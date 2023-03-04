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
function sort012(arr) {
  if (arr.length === 0) return arr;

  let i = 0;
  let j = 0;
  let k = arr.length - 1;

  while (i <= k) {
    if (arr[i] === 0) {
      // swap i and j and increment both
      let temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
      i++;
      j++;
    } else if (arr[i] === 1) {
      i++;
    } else {
      // 2 ke case me k or i ko swap then k badao
      let temp = arr[k];
      arr[k] = arr[i];
      arr[i] = temp;
      k--;
    }
  }
  return arr;
}

console.log(sort01([1, 0, 1, 1, 1, 0, 1, 1, 0, 1]));

// WHAT IF WE HAVE ONLY 0 AND 1S THEN MUCH SIMPLE

/*
    AGAR 0 HAI TO SWAP I AND J THEN DONO  I AND J KO INCREMENT
    AGAR 1 HAI TO KUSH NHI BAS I++
*/

function sort01(arr) {
  if (arr.length === 0) {
    return arr;
  }

  let i = 0;
  let j = 0;

  while (i < arr.length) {
    if (arr[i] === 1) {
      i++;
    } else {
      let temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
      i++;
      j++;
    }
  }
  return arr;
}
