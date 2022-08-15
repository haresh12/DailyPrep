
function medianOfTwoSortedArray(nums1,nums2){
  let l1 = nums1.length;
  let l2 = nums2.length;
  let isEven = (l1 + l2) %  2 === 0 ;
  let medianIndex = isEven ? Math.floor((l1 + l2) / 2) -1 : Math.floor((l1 + l2) / 2)
  let i = 0;
  let j = 0 ;
  let sortedArray = [];  
  while(i < nums1.length && j < nums2.length){
      if(nums1[i] < nums2[j]){
         sortedArray.push(nums1[i]);
         i++; 
       }else {
          sortedArray.push(nums2[j]);
          j++;
       }
  }
      while(i < nums1.length){
     sortedArray.push(nums1[i]);
         i++; 
  }
      while(j < nums2.length){
     sortedArray.push(nums2[j]);
         j++; 
  }
  let output = isEven ? (sortedArray[medianIndex] + sortedArray[medianIndex +1] ) /2
  : sortedArray[medianIndex];
 return output;    
}

console.log(medianOfTwoSortedArray([1,2,3],[4,5,6]))