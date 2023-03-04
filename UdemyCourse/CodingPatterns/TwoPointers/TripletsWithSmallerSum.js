/*
  Triplets with Smaller Sum (medium)

  Given an array arr of unsorted numbers and a target sum, count all triplets in it such that arr[i] + arr[j] + arr[k] < target
  where i, j, and k are three different indices. Write a function to return the count of such triplets.

  Input: [-1, 0, 2, 3], target=3 
  Output: 2
  Explanation: There are two triplets whose sum is less than the target: [-1, 0, 3], [-1, 0, 2]


     Input: [-1, 4, 2, 1, 3], target=5 
     Output: 4
     Explanation: There are four triplets whose sum is less than the target: 
     [-1, 1, 4], [-1, 1, 3], [-1, 1, 2], [-1, 2, 3]

  One of the possible solution that comes in mind is find all the triplets and just check if sum of
  all is less then target triplet and if yes then increase the count. (WRONG ANY WAY )

*/

/*
   ONE THING I LEARNED TODAY IS THAT WHEREVER WE ARE USING TWO POINTER APPROACH ALMOST 80% LOGIC I SAME BUT I PROMISE REST 20%
   LOGIC IS MUCH TRICKIER THEN YOU THINK.

   HERE WHEN I TRIED TO DO THIS PROBLEM THEN ONLY QUESTION I HAD IS WHEN SHOULD I UPDATE THE LEFT BECAUSE AT RIGHT YOU HAVE
   THE MAX VALUE AND IF YOU ARE GETTING TRIPLET FROM THERE THEN YOU WILL 110% GET ON RIGHT-- BECAUSE BHAI AGAR SBSE BADI 
   VALUE RIGHT ME HOTI HAI SO IF USE TRIPLET BN RHE HE TO FIR BS RIGHT KO -- KRTE JAO USE BI PKA MILEGI AND THAT'S WHY
   I NEVER UPDATED LEFT. HOW IT EFFECTED
   [-1,1,2,3,4]; From this i got three triplets but missed [-1,2,3] because tum bade log right ko minus minus krte gye
   so [-1,1,4] [-1,1,3] and last me [-1,1,2] ban gyi or fir left === right ho gya and loop ka i next index pe move ho gya
   and [-1,2,3] ye pair kabi bani he nhi because 2 pe kabi hm move he nhi.

   HERE IMPORTANT THING TO LEARN IS BHAI AGAR ARR[LEFT] + ARR[RIGHT] < TARGET_SUM HE OR HME PTA HE RIGHT ME ALWAYS BADI
   VALUE HOTI HE SO AGAR LEFT VALUE + BADI VALUE < TARGET_SUM HE TO LEFT VALUE + BADI VALUE SE EK INDEX PHELE VALI BE
   LESS THEN TARGET SUM HOGI.

   SO INCREASE COUNT HERE LIKE : count = right - left; // AND THIS WILL GIVE US ALL THE COUNT FROM CURRENT LEFT TO RIGHT
   AND AND LEFT 1 KE LIYE SB MIL GYI SO MOVE HO JAO LEFT 2 PE AND FIR HE [-1,2,3] YE PAIR KO CHANCE MILEGA

   ONLY ONE THING TO LEARN HERE IS WHEN TO UPDATE LEFT THATS IT 
   BECAUSE RIGHT KA FNDA SIMPLE HE AGAR SUM TARGET SE BDA HE TO RIGHT-- KRO BECAUSE VALUES CHOTI CHIYE
 */

/*
   Time and space :
   Sorting the array will take O(nlogn) . The searchPair() will take . So, overall searchTriplets() will take O(nlogn + n*n) , which is asymptotically equivalent to 
   O(n*n) or we say it n square.

   Space : O(N) for sorting which is internally used and only its not using any in place algo
*/
function tripletWithSmallerSum(arr, target) {
  // SORT KRNA MAT BULO BHAI HER QUESTION ME
  arr = arr.sort((a, b) => a - b);
  let count = 0;
  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1; // arr[i+1] nhi krna mere bhai
    let right = arr.length - 1;

    while (left < right) {
      let currentSum = arr[i] + arr[left] + arr[right];
      if (currentSum < target) {
        // right sbse bda he or vhi agar apna kam kr dera he so right -- krte jao vo current left ke sath pka triplet bnayege
        count += right - left;
        // ab current left ke sath to sb possible pair ban gyi so left ko aage bdate jao
        left++;
      } else {
        right--;
      }
    }
  }
  return count;
}

console.log(tripletWithSmallerSum([-1, 0, 2, 3], 3));

// There could be one more similar question could be asked where rather then returning count return the actually triplets
// in these case time complexity will be increased to O(N^3) from (N^2) because right - left tak bi har baar loop
// lagana padega and new array me push krna padega

function tripletArrWithSmallerSum(arr, target) {
  let res = [];

  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1;
    let right = arr.length - 1;

    while (left < right) {
      let currentSum = arr[i] + arr[left] + arr[right];
      if (currentSum < target) {
        for (let j = right; j > left; j--) {
          res.push([arr[i], arr[left], arr[right]]);
        }
        left++;
      } else {
        right--;
      }
    }
  }
  return res;
}

console.log(tripletArrWithSmallerSum([-1, 0, 2, 3], 3));
