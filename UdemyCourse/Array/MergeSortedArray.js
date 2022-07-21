
function mergeSortedArray(arr1,arr2){
  if(!arr1 && !arr2) return 'No inputs';
  if(arr1.length === 0) return arr2;
  if(arr2.length === 0) return arr1;
  let sortedArr = [];
  let fi = 0; // first array index
  let si = 0; // second array index
  // INTRESTING FACT while(arr1[fi] && arr2[si] ) THIS WON'T GIVE YOU TRUE OR FALSE WHILE(3 && 5) HOW CAN YOU EXPECT TRUE FALSE FROM THIS
  while(arr1[fi] !== undefined && arr2[si] !== undefined){
      if(arr1[fi] < arr2[si]){
        sortedArr.push(arr1[fi]);
        fi++;
      }else{
        sortedArr.push(arr2[si]);
        si++;
      }
  }
  // if any remaning items from arr1
  while(fi < arr1.length){
    sortedArr.push(arr1[fi])
    fi++;
  }
   // if any remaning items from arr2
   while(si < arr2.length){
    sortedArr.push(arr2[si])
    si++;
  }
  return sortedArr;
}

// console.log(mergeSortedArray([1,2,3],[2,5,6]))

// https://leetcode.com/problems/merge-sorted-array/ INCREDIBLE do by self
//Non-decreasing means that no element is less than the element before it
// console.log(0 ? "true" : 'false'); // will return false  because js treat 0 as false and 1 as true 
// Lot of learning from this but not worked in many cases (2 hours)
function mergeSortedArrayLeetcode88(nums1, m, nums2, n) {
// Always have check first  
if(m === 0 && n === 0 ) return null;
if(m === 0) return nums2;
if(n === 0) return nums1;
let arr = [];
for(let i = 0 ; i < m; i++){
  arr.push(nums1[i]);
}
let i = 0 ; // will compare with m
let j = 0 ; // will compare withn n
for(let index = 0 ; index < nums1.length ; index++){
   if((arr[i] && (i < m  && arr[i] < nums2[j])) || j === n){  // !nums2[j] what if we don't have more values in second array
    nums1[index] = arr[i]; 
    i++; 
  }else if((nums2[j] && j < n) || i === m){  // !arr[i] what if we don't have more values in first array
    nums1[index] = nums2[j];
    j++; //1
  }
}
return nums1
};
// console.log(mergeSortedArrayLeetcode88([-1,-1,0,0,0,0],4,[-1,6],2))

// Lot to understand more
function mergeSortedArrayLeetcode88Solution(nums1, m, nums2, n){
 let p1 = m - 1;
 let p2 = n -1;

 for(let i =  nums1.length - 1 ; i >= 0 ;  i--){
   if(p1 >= 0 && nums1[p1] >= nums2[p2]){
      nums1[i] = nums1[p1];
      p1--;
   }else if(p2 > 0){
     nums1[i] = nums2[p2];
     p2--;
   }
 }
 return nums1;
}
console.log(mergeSortedArrayLeetcode88Solution([-1,-1,0,0,0,0],4,[-1,0],2))
