/*
   Leetcode : 108
   Given an integer array nums where the elements are sorted in ascending order, convert it to a 
   height-balanced binary search tree.

   Ok first thing first don't get confused with words like height-balance bst and all even if
   you don't know still you can fix the problem

   This is the easy problem becasue all we have to do is just convert sorted array into 
   bst.

   BST PROPERTY ALL SMALLER VALUE AT LEFT AND LARGER AT RIGHT.
*/

let arr = [2,4,6,8];

class Node {
  constructor(val,left,right){
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
function bst(arr,lo,hi){
  if(lo > hi) return null;

  let mid = Math.floor((lo+hi)/2);
  let leftValue =  bst(arr,lo,mid-1);
  let rightValue = bst(arr,mid+1,hi);

  // Now you have needed value to create node.
  let node = new Node(arr[mid],leftValue,rightValue);

  return node;
}

const root = bst(arr,0,arr.length-1);


function display(root){
  if(root == null) return;
  let str = '';
   str = `< ${root.left ? root.left.val : '.'} ${root.val} ${root.right ? root.right.val : ''} > `
   console.log(str);
   display(root.left);
   display(root.right);
}
console.log(display(root));