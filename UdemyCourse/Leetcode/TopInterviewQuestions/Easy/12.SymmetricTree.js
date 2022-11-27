/*

Leetcode : 101
Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

  Three thing you need to check in isMirror function
  are both root are null then thats fine condition return true from there
  is one of root is null then that means one has value another don't have value return false
  Third and most imported root1.val === root2.val then only call isMirror function again.

  DO DRY RUN ELSE ITS NOT DONE YET.
*/

function isSymmetric(root){
  return isMirror(root,root)
}
function isMirror(root1,root2){
// see if both don't have value then its fine
if(root1 === null && root2 === null) return true;
// See if both are null then it will be return from above condtion but if any of one is null then it will be catch in second condition
if(root1 === null || root2 === null) return false;
 
return root1.val === root2.val && isMirror(root1.left,root2.right) && isMirror(root2.left,root1.right);
}