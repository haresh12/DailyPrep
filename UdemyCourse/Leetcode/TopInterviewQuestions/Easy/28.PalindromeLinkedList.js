/*
   Leetcode : 234 
   Given the head of a singly linked list, return true if it is a palindrome  or false otherwise. 
*/

// Simplest solution you can do is just reverse list and then check the way we do for string
/*
  THIS SOLUTION NOT WORKING FOR LARGER INPUT IN LEETCODE AND WE ARE TALKING HERE EXTRA SPACE
  WHICH IS NOT ALLOWED IN QUESTION O(1) SPACE ALLOWED
*/
function isPalindrome(head){
let orignalList = JSON.parse(JSON.stringify(head));
let reversedList = reverse(head);

while(orignalList !== null){
  if(orignalList.val === reversedList.val){
     orignalList = orignalList.next;
     reversedList = reversedList.next;
  }else{
    return false;
  }
}
return true;
}

// No explantion as alrady did few times
function reverse(head){
  let current = head;
  let prev = null;
  while(current !== null){
    let temp = current.next;
    current.next = prev;
    prev = current;
    current = temp;
  }
  return prev;
}

function isPalindromeLazyOneMinuteSolution(head){
  let str  = '';
  while(head !== null){
    str+=head.val;
    head = head.next;
  }
  let reverse = ''
  for(let i = str.length -1 ; i >= 0 ; i--){
    reverse+=str[i];
  } 
  return reverse === str;
}

/*
  Here need to understand two things like first how to reverse half
  list and MAKE SURE YOU UNDERSTAND WHEN TO USE FAST AND SLOW APPROCH
  because this approch is getting used in many places
  https://www.youtube.com/watch?v=ee-DuKtRNGw
*/
function isPalindromeOptimized(head){
 if(head === null) return true;
 let mid = findMid(head);
 let last = reverse(mid.next);
 while(head !== null && last !== null){
  if(head.val === last.val){
    head = head.next;
    last = last.next;
  }else{
    return false;
  }
  return true;
 }
}

function findMid(head){
 let fast = head;
 let slow = head;
 while(fast !== null && fast.next !== null){
   fast = fast.next.next;
   slow = slow.next;
 }
 return slow;
}

function reverse(node){
 let current = node;
 let prev = null;

 while(current !== null){
  let temp = current.next;
  current.next = prev;
  prev = current;
  current = temp;
 }
 return prev;
}

