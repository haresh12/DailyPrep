/*
  Leetcode 88 : 
You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, 
and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
*/
function merge(list1,list2,m,n){
  if(list1.length === 0 && list2.length === 0) return list1;
  if(list1.length === 0) return list2;
  if(list2.length === 0 ) return list1;
  list1.splice(m,n)
  let i = 0;

  while(i < m+n){
    if(list1[i] > list2[i]){
      // list1[]
    }
  }
}
console.log(merge([1,2,3,0,0,0],[2,5,6],3,3))