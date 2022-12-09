/*

Leetcoode : 2
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order,
 and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
*/



class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
let head1 =  {
    val : 2,
    next :{
        val : 4,
        next :{
            val : 3,
            next : null
        }
    }
}
let head2 =  {
    val : 5,
    next : null 
}
// HERE ONLY ONE THING METTERS EDGE CASES
function addTwoNumber(head1,head2){
 let carry = 0;
 let nl = null;
 let nh = null;
 while(head1 !== null || head2 !== null){
   let val1 = head1 ? head1.val : 0;
   let val2 = head2 ? head2.val : 0;

  let sum = val1 + val2 + carry;
  carry = 0;

  let nn = null;
  if(sum > 9) {
     let val = sum%10;
     nn = new Node(val,null);
     carry = 1;
  }else{
     nn = new Node(sum,null);
  }

  if(nh === null) nh = nl = nn;
  else {
    nl.next = nn;
    nl = nn;
  }
  
   head1 = head1 ? head1.next : null;
   head2 = head2 ? head2.next : null;

 }
 if(carry === 1) {
    nn = new Node(carry,null);
    nl.next = nn;
    nl = nn; 
}
 return nh;
}

console.log(addTwoNumber(head1,head2 ))