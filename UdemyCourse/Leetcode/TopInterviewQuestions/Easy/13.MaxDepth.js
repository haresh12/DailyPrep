/*
   Leetcode : 104 
   Given the root of a binary tree, return its maximum depth.

  A binary tree's maximum depth is the number of nodes along the longest 
  path from the root node down to the farthest leaf node.

  This one is easy no explanation needed if they say find depth in terms of edges then in base case
  return -1 else return 0 this one thing need to make sure else easy part
*/

function maxDepth(root){
  if(root === null){
    return 0; // WHY 0 UNDERSTAND BECAUSE WE NEED IN TERMS ON NODE IF IN TERMS OF EDGES THEN PASS -1
  }
  let leftDepth = maxDepth(root.left);
  let rightDepth = maxDepth(root.right);
  return Math.max(leftDepth,rightDepth)+1;
 }
