/*
  Leetcode 88 : 
You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, 
and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
*/

//Do not return anything, modify nums1 in-place instead. MUST MUST MUST SEE THIS
// THIS SOLUTION IS NOT GOOD FAILD IN MANY EDGE CASES 
// function merge(list1,m,list2,n){
//   if(m === 0 && n === 0) return list1; // check m and n rather then list size because list1 can have [0] 
//                                        //but still here m is 0 even we have one item
//   if(m === 0) return list2;
//   if(n === 0 ) return list1;
//    let j = 0;
//   for(let i = 0 ; i < m+n ; i++){
//     if(list1[i] > list2[j]){
//        let temp = list1[i];
//        list1[i] = list2[j];
//        list1.splice(i+1,0,temp); // bhai slice nhi splice he 
//        list1.pop(); // remove zero from last also
//        j++;
//     }else if(list1[i] === 0 && i > m && j < n){
//       list1[i] = list2[j];
//       j++;
//     }
//   }
//   return list1;
// }
// console.log(merge([-1,0,0,0,3,0,0,0,0,0,0]
//   ,6
//   ,[-1,-1,0,0,1,2]
//   ,5
//   ))

// NOT DONE WASTED 2 HOURS 
function merge(nums1,m,nums2,n){
  let p1 = m - 1;
  let p2 = n - 1;
  let i = m + n - 1;
  
  while(p2 >= 0){
     if(p1 >= 0 && nums1[p1] && nums2[p2]){
      nums1[i--] = nums1[p--];
     }else{
      nums1[i--] = nums2[p2--];
     }
  }
}

// much easy solution https://www.youtube.com/watch?v=73lyz0EZye8
function mergeTwoSortedList(list1,m,list2,n){
 let i = m -1;
 let j = n -1;
 let k = m+n-1; // NEVER DO list.length-1 because if list one is blank then we are done

 // We need to decide which one should be on k position like i or j from back
 while(i >= 0 && j >= 0){
  if(list1[i] > list2[j]){
    list1[k] = list1[i];
    i--;
    k--;
  }else{
    list1[k] = list2[j];
    k--;
    j--;
  }
 }
 // Now above code is fine but you see we are checking only if both i and j are not out of bond
 // so because of that we need to make sure at last what if there is any item in i or j the place
 // in k

 while(i >= 0){
  list1[k] = list1[i];
  i--;
  k--;
 }
 while(j >= 0){
  list1[k] = list2[j];
  j--;
  k--;
 }
 return list1
}

console.log(mergeTwoSortedList([],0,[2,5,6],3));
