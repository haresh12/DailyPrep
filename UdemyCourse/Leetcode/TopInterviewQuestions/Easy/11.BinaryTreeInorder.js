/*
   Leetcode : 94 
   Given the root of a binary tree, return the inorder traversal of its nodes' values.
   https://www.youtube.com/watch?v=12aMTS0L6WI&t=9s MUST WATCH
*/

class Node {
  constructor(data,left,right){
    this.data = data;
    this.left = left;
    this.right = right;
  }
}
class Pair {
  constructor(node,state){
    this.node = node;
    this.state = state;
  } 
}
class IPair{
  constructor(node,state){
   this.node = node;
   this.state = state;
  }
}
let btArr = [1,null,null]

function structureBinaryTree(arr){  
  if(arr.length === 0) return null
  let stack = [];
  let root = new Node(arr[0],null,null);
  let pair = new Pair(root,1);
  stack.push(pair)
  let idx = 0; 
  while(stack.length > 0){
   let top = stack[stack.length-1]; // Get the top item from the stack
   // Check possible states that pair can have // 1 or 2 or 3
   if(top.state === 1){
     idx++;
     // means add to left child
     if(arr[idx] !== null){
       let node = new Node(arr[idx],null,null)
       top.node.left = node;
       top.state++;
       let np = new Pair(node,1);
       stack.push(np)
     }else{
       top.state++;
     }
   }else if(top.state === 2){
     idx++;
     // means add to right child
     if(arr[idx] !== null){
       let node = new Node(arr[idx],null,null)
 
       top.node.right = node;
       top.state++;
       let np = new Pair(node,1);
       stack.push(np)
     }else{
       top.state++;
     }
   }else if(top.state === 3){
     stack.pop(); // if state is three then only thing we need to do is remove the item from stack
   }
  }
  return root
 }
 const root = structureBinaryTree(btArr);

function inOrderTraversal(node,arr){
  if(node === null){
   return arr;
  }
  node.left = inOrderTraversal(node.left,arr);
  arr.push(node.data)
  node.right = inOrderTraversal(node.right,arr);
 return arr;
 }

 console.log('INORDER',iterative(root))


// iteratively
 function iterative(root){
  let stack = [];
  let pair = new IPair(root,1);
  let inorderArr = [];
  stack.push(pair);
  while(stack.length > 0){
    let top = stack[stack.length-1];
     if(top.state === 1){
     // If the top state is one means that we are seeing it first time means its in pre order
      if(top.node.left){
        let newPair = new IPair(top.node.left,1);
         stack.push(newPair);
      }
      top.state++;
    }else if(top.state === 2){
      // If the top state is two means we are seeing it second time means its in in order             
      inorderArr.push(top.node.data)
      if(top.node.right){
        let newPair = new IPair(top.node.right,1);
         stack.push(newPair);
      }
      top.state++;
    }else{
        stack.pop();
    }
  }
  return inorderArr;
 }

