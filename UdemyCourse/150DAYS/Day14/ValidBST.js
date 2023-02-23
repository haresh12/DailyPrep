/*
   
Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

The left 
subtree
of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
*/

class BSTPair {
  constructor(isBst, max, min) {
    this.isBst = isBst;
    this.max = max;
    this.min = min;
  }
}
//https://www.youtube.com/watch?v=kMrbTnd5W9U&t=315s BEST EXPLANATION

/*
The time complexity of the isBst function is O(n), where n is the number of nodes in the binary tree, 
because it visits each node of the tree exactly once. The space complexity of the function is O(h), 
where h is the height of the binary tree, because it uses a recursive algorithm that creates a call stack with a maximum depth of h.
*/
function isBst(node) {
  if (node === null) {
    let base = new BSTPair();
    base.isBst = true;
    base.min = Number.MAX_SAFE_INTEGER;
    base.max = Number.MIN_SAFE_INTEGER;
    return base;
  }
  let left = isBst(root.left);
  let right = isBst(root.right);

  let me = new BSTPair();

  // See how here we are note using left.val or right.val because bhai pure tree me left node me sbse bda and right node me sbse chota hona chaiye.
  // na ki sirf apne left and apne right se
  me.isBst =
    left.isBst && right.isBst && node.val > left.max && node.val < right.min;
  me.min = Math.min(node.val, Math.min(left.min, right.min));
  me.max = Math.max(node.val, Math.max(left.max, right.max));

  return me;
}
