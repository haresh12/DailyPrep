/*
   Binary Tree : So as we learned in generic tree any node can have any number of children and that's
   why we were taking ArrayList of nodes as children because we were not sure how many children any
   node can have. But in case of binary tree node can have either 0 or 1 or at max 2 children and thats
   the difference between both the trees.
*/

// Binary tree display and constructor how we will get data in array and how we can convert that into  tree

// First what values you will get in array and how those value are structured.

/*
   Simple go deep in recursion and put all pre order value in arr like 10 , 20 , 50 now you reached
   at 50 and after putting 50 value in arr you are now going in post order of 50 you see that 50 has
   no child either left or right you in that case you will add null , null  in array SO IN SIMPLE
   WORD ADD VALUES AND IN POST ORDER ADD NULL IF VALUE DOES NOT HAVE LEFT OR RIGHT VALUE.
*/

/*
  Simple Algorithem where we will use stack with Pair class and will manage 3 state

  If state === 1 => get peek value from stack and add current node value on LEFT of that and increase the state by 1 (state+=1) 2
  If state === 2 => get peek value from stack and add current node value on RIGHT of that and increase the state by 1 (state+=1) 3
  If state === 3 => pop from stack (whatever value is on top)

  IN CASE OF NULL VALUES DON'T ADD INTO STACK BUT MAKE SURE YOU INCREASE THE STATE BY 1 WHATEVER VALUE
  WE HAVE ON TOP OF STACK . 

  This eniter algo make sense
*/


class Node {
  constructor(data,left,right){
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

// let btArr = [50,25,12,null,null,37,38,null,null,null,75,62,null,70,null,null,87,null,null]
// let btArr = [50,25,12,null,null,37,null,null,75,62,null,null,87,null,null] // binary search tree
let btArr = [50,25,12,null,null,null,null]; // Unbalanced tree incredible bhai
class Pair {
  constructor(node,state){
    this.node = node;
    this.state = state;
  } 
}
/*
   Will take tree different state here 
   So if in PAIR you get state 1 => means add next arr item as left child
   State 2 means  add next arr item to the right child
   State 3 means Pop item from stack
*/

/*
  Incredible job : Mistake that i made 
  Rather then seting top.node.right or top.node.left i was setting top.left and top.right
  adding new Node(arr[idx],null,null) directly to line 76 and 78 so it was creating 2 different nodes
*/
function structureBinaryTree(arr){
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
// display(root)
// console.log(size(root))
// console.log(max(root))
//  console.log(sum(root))
// console.log(height(root))
// pre ine post specific to traversal question
// let pre = ''
// let ine = ''
// let post = ''
// treversal(root)
// levelOrder(root)
// console.log(nodeToRootPath(root,70,[]))
// console.log(printKLevelDown(root,2,[]))
// console.log(pathToLeaf(root,100,150))
// console.log(display(leftClonedNode(root)))
// console.log(display(leftClonedNodeToNormal((leftClonedNode(root))))) // MAST 
// printSingleChildNodes(root)
// console.log(display(removeAllLeaf(root)))
// let tilt = 0
// tiltOfBinaryTree(root);
// console.log(tilt)

console.log(diameterOfBinaryTreeInefficient(root))

function display(root){
if(root === null)return
  // I came here and my job is to only print print my self and my child thats it,
  let str = root.data + ' => ';
  str+= root.left ? "L:" + root.left.data + "," : '' 
  str+= root.right ? "R:" + root.right.data + "," : '' 
  console.log(str)
  // Ok above one no issue will take care of rest

    display(root.left); // Blind call or week call because not checking whether root.left or root.right could be null
    display(root.right); // No issue we will add in base case
}

function size(root){
if(root === null) return 0 ; // If you understand identity then you will have no doubt why returning 0
  let ls = size(root.left); // If i get size from left side
  let rs = size(root.right); // If i get size from right side

  return ls + rs + 1 ; // i will add my self and return size
}

function max(root){
 if(root === null){
  return Number.MIN_SAFE_INTEGER;
 }
 
 let lm = max(root.left); // Let me know what is max from left side;
 let rm = max(root.right); // Let me know what is max from right side;

 // At this point i will have max from left and max from right so just compare lm , rm and your self
  return Math.max(root.data,Math.max(lm,rm))
}

function min(root){
  if(root === null){
   return Number.MAX_SAFE_INTEGER;
  }
  
  let lm = min(root.left); // Let me know what is max from left side;
  let rm = min(root.right); // Let me know what is max from right side;
 
  // At this point i will have max from left and max from right so just compare lm , rm and your self
   return Math.min(root.data,Math.min(lm,rm))
 }
function sum(root){
  if(root === null){
    return 0;  // Again why return 0 because identity of sum is 0
  }

  let ls = sum(root.left); // Left side give me your sum
  let rs = sum(root.right); // Rigth side give me your sum

  return ls + rs + root.data; // I will add my self and return;
}

function height(root){
  if(root === null){
    return -1;  //   Because we are trying to find height in terms of edges if we need in terms of 
  }

  let ls = height(root.left); // Left side give me your sum
  let rs = height(root.right); // Rigth side give me your sum

  return Math.max(ls,rs) + 1; // I will add my self and return;
}

// UNDERSTAND THREE DIFFERENT ORDER OF BINARY TREE PRE IN AND POST ORDER

/*
  PRE : GOING DEEP INTO THE RECURSION
  POST : GOINT OUT OF THE RECURSION
  INE : IN BETWEEN MEANS DONE WITH PRE PART AND READY TO GO FOR POST PART. (This is easy but just don't have enough words to explain)
*/
// function treversal(root){ // ITERATIVE SOLUTION NOT DONE YET
//  if(root === null) return;
//   pre+=root.data+','
//   treversal(root.left,pre,ine,post);
//   ine+=root.data+','
//   treversal(root.right,pre,ine,post);
//   post+=root.data+','
// }
// console.log("PRE : ",pre)
// console.log("IN : ",ine)
// console.log("POST : ",post)

/*
  Same algorithem that we had in generic tree main queue and child queue
  only difference is here we can have max two children so no from loop needed
*/

/*
  Only problem faced here is like who slice and splice work and what is difference between them
  UNDERSTAND THIS MAINLY USED JS METHODS
*/
function levelOrder(root){
 let mque = [];
 let cque = [];
 let str = ''
 mque.push(root)

 while(mque.length > 0){
  // 
  let first = mque[0]; // whatever at first index will be removed first FIFO
  str+=first.data+","
  if(first.left){
    cque.push(first.left);
  }
  if(first.right){
    cque.push(first.right)
  }
  // Once done with your stuff remove it from mque
  mque.splice(0,1)
  // No there will be the point when main queue is empty
  if(mque.length === 0){
    mque = cque;
    console.log(str);
    str=''; // Bul gya tha ye line
    cque = [];
  }
 }
}

/*
  Here logic is simple but learn how to get answer without passing in parameters
*/
function nodeToRootPathWithData(root,data,arr){
 if(root === null){
  return []
 }
 if(root.data === data){
  arr.push(root.data);
  return arr
 }

let valueForLeft =  nodeToRootPathWithData(root.left,data,arr);
if(valueForLeft.length > 0){
  arr.push(root.data)
  return arr;
}
let valueForRight =  nodeToRootPathWithData(root.right,data,arr);
if(valueForRight.length > 0){
  arr.push(root.data)
  return arr;
}
return arr;
}

function nodeToRootPathWithNode(root,data,arr){
  if(root === null){
   return []
  }
  if(root.data === data){
   arr.push(root);
   return arr
  }
 
 let valueForLeft =  nodeToRootPathWithNode(root.left,data,arr);
 if(valueForLeft.length > 0){
   arr.push(root)
   return arr;
 }
 let valueForRight =  nodeToRootPathWithNode(root.right,data,arr);
 if(valueForRight.length > 0){
   arr.push(root)
   return arr;
 }
 return arr;
 }
/*
  QUESTION IS SIMPLE PRINT THE ALL NODE OF SPECIFIC LEVEL (K LEVEL DOWN)
  Good one see on return value used at 262 and 263 because at the end we have to return arr
  and we are checking if level === 0 this is the only condition we need to add in arr
*/
function printKLevelDown(root,level,arr){
if(root === null){
  return arr;
}
if(level === 0){
  arr.push(root.data);
 return arr
}
   printKLevelDown(root.left,level-1,arr)
   printKLevelDown(root.right,level-1,arr)
return arr; // Its fine if you are not using return value from line 309 and 310 because at the end we have to return arr
}

/*
   V M I : QUESTION PRINT NODES K LEVEL FAR
   THIS IS COMBINATION OF TWO QUESTION FIRST NODE TO ROOT PATH AND SECOND PRINT K DOWN
   IMPORTENT THING HERE IS HOW IT PRINTS K LEVEL ABOVE OF THE TREE. (Watch video you will get it)
*/
// DO AGAIN WRONG SOLUTION
function printKLevelFar(root,data,level){
  let kLevelFar = [];
  // step first find node to root path
  let nrp = nodeToRootPathWithNode(root,data,[]);
  console.log(nrp)
  for(let i = level ; i >= 0 ; i--){
    let arr = printKLevelDown(nrp[i-level],level)
  }
}
// console.log(printKLevelFar(root,50,3)) // NOT DONE

/*
   Question : find all the path from root to leaf and do sum if some is in range of low and high then only print path
   HOW WE CAN SAY WE ARE AT LEAF NODE : WHEN WE HAVE LEFT AND RIGHT NODE NULL

   First solution came : but real weird : INCREDIBLE JOB
*/
function pathToLeaf(root,low,high){
  // Find all leaf node :
  let leafs = findAllLeaf(root,[])
  // find node to roth path each leafs
  for(let i = 0 ; i < leafs.length ; i++){
    // Get path
    let path = nodeToRootPathWithData(root,leafs[i],[])

    // Sum of that path
    let sum = path.reduce((prev,cur) => {
      return prev + cur
    },0) 

    // Check if sum is in range if yes then print the path
    if(sum >= low && sum <= high) {
      console.log(path)
    }
  }

}

function findAllLeaf(root,arr){
 if(root.left === null && root.right === null){
   arr.push(root.data);
   return arr
 }
 
 root.left && findAllLeaf(root.left,arr); // IF YOU DON'T WANT BASE CASE DO THIS
 root.right && findAllLeaf(root.right,arr); // IF YOU DON'T WANT BASE CASE DO THIS

 return arr;
}

/*
 LEFT CLONED TREE : In this for each left node we have to add one new cloned node and connect
 with original node

 DO DRY RUN
*/

function leftClonedNode(root){
 if(root === null)return null
  let lcr = leftClonedNode(root.left);
  let rcr = leftClonedNode(root.right);

  let newNode = new Node(root.data,lcr,null); // Only line you need to understand in enitre function.
  
  root.left = newNode; // ab root ka left ye newly created cloned node hoga
  root.right = rcr ; // Root ka right wahi rahega because usme kush change nhi krna hai

  return root;
}
/*
  Totally different the way i expected do dry run and  don't directly write code
*/
function leftClonedNodeToNormal(root){
  if(root === null)return null
   let lcr = leftClonedNodeToNormal(root.left.left);
   let rcr = leftClonedNodeToNormal(root.right);

   root.left = lcr;
   root.right = rcr;
   return root;
 }

 /*
   Good done in 2 minute
   Just need to print the parent who have one child simple
 */
 function printSingleChildNodes(root){
  if(root === null) return null;
  if(!(root.left && root.right) && (root.left || root.right)){
    if(root.left) console.log(root.data); // MAKE SURE DO NEED TO PRINT THE DATA OF NODE NOT LEFT OR RIGHT NODE
    if(root.right) console.log(root.data);
  }
   printSingleChildNodes(root.left)
   printSingleChildNodes(root.right)
 }

 /*
  Eniter logic was right but again make mistake on line number 407 and 408 was not share how to set this values
   Receive data WHEN AND HOW this need to learn
 */
 function removeAllLeaf(root){
  if(root === null)return null;
  if(root.left === null && root.right === null){
    console.log(root.data)
    return null;
  }
  root.left = removeAllLeaf(root.left);
  root.right = removeAllLeaf(root.right);

  return root
 }

 /*
   Do as many as time you can do and try to understand dia and height connection 
   and try to understand why one is working over another.
 */
 function diameterOfBinaryTreeInefficient(root){
  if(root === null){
    return 0;
  }
  
  let ld = diameterOfBinaryTreeInefficient(root.left);
  let rd = diameterOfBinaryTreeInefficient(root.right);

  let lrh = height(root.left) + height(root.right) + 2; // Recursion call inside recursion thats why its Inefficient

  return Math.max(lrh,Math.max(ld,rd))
 }

 /*
   Tilt of binary tree means sum of left side node - sum of right side node absaluate value of it
   We are using here travel and change stretergy like we are returning sum because when our parent
   node will need our sum to count its tilt but at last we are storing our value in tilt
 */
 function tiltOfBinaryTree(root){
  if(root === null) return 0
  let lst = tiltOfBinaryTree(root.left);
  let rst = tiltOfBinaryTree(root.right);
  let ltilt = Math.abs(lst - rst); // See tilt of current node means left child total - right side total absluate value
  tilt+=ltilt;
  let totalSum = lst + rst + root.data; // HERE MADE MISTAKE WAS DOING ONLY LST + RST BUT BHAI TERE PARENT NODE KO TILT
                                        // COUNT KRNE KE LIYE TERI VALUE KI BI TO JARU PADEGI NA SO ADD YOUR SELF ALSO
  return totalSum                                      // AND THEN RETURN.
 }

class BPair {
  constructor(node,isBst){
    this.node = node;
    this.isBst = isBst;
  } 
}

/*
  Incredible because done by self only thing you have done wrong is inside min function 
  you were using max() max() value copy past issue

  THIS IS NOT EFFICIENT WHY BACAUSE WE ARE CALLING MIN AND MAX EACH TIME MEANS RECURSION
  CALL INSIDE RECURSION CALL N SQURE TIME BHAI. BUT STILL SOLUTION
  WATCH VIDEO THREE TIMES THEN CODE
*/
 function isBinarySearchTree(root){
 if(root === null){
  let pair = new BPair(root,true)
  return pair;
 }
  let ls = isBinarySearchTree(root.left);
  let rs = isBinarySearchTree(root.right);

  if(ls.node === null && rs.node === null){
    let pair = new BPair(root,true);
    return pair;
  }
  if(ls.isBst && rs.isBst && root.data > max(ls.node) && root.data < min(rs.node)){
    let pair = new BPair(root,true);
    return pair;
  }
   return new BPair(root,false)
 }

 console.log(isBinarySearchTree(root).isBst)

/*
  travel and change : Return height and make change in global static variable
*/
let isBalanced = true;
 function isBalancedTree(root){
 if(root === null){
  return 0; // return 0 because we are calculating height in terms of node if edge then return -1;
 }

  let lh = isBalancedTree(root.left);
  let rh = isBalancedTree(root.right);

  // sirf ye 2 line code change hai height se
  if(Math.abs(lh - rh) >= 2){
    isBalanced = false ; // because for balanced difference between left node height and right node height should be <= 1
  }
  let totalHeight = Math.max(lh,rh) + 1;
  return totalHeight;
 }

//  console.log(isBalancedTree(root))
//  console.log(isBalanced)

// largest bst pair
 class LBSTPair {
   constructor(isBst,min,max,root,size){
    this.isBst = isBst;
    this.min = min,
    this.max = max,
    this.root = root,
    this.size = size
   }
 }
 // Hardest question till now in binart tree
 function largestBST(node){

  if(node === null){
    let basePair = new LBSTPair();
    basePair.min = Number.MAX_SAFE_INTEGER;
    basePair.max = Number.MIN_SAFE_INTEGER;
    basePair.isBst = true;
    basePair.root = node;
    basePair.size =0;
    return basePair;
  }
  let lbst = largestBST(node.left);
  let rbst = largestBST(node.right);

  let bst = lbst.isBst && rbst.isBst && (node.data >= lbst.max && node.data <= rbst.min)
  console.log("bst",bst)
  // largest bst pair
  let lbp = new LBSTPair();
  lbp.isBst = bst;
  lbp.min = Math.min(node.data,Math.min(lbst.min,rbst.min)); // Abi tak ka min iske liye left ka min or right ka min or khud ke data ki bi jarau padegi
  lbp.max = Math.max(node.data,Math.max(lbst.max,rbst.max)); // Abi tak ka max iske liye left ka max or right ka max or khud ke data ki bi jarau padegi

  // Ye abi tak ka question tha is BST now next wala code is additional things from LBSTPair

  // agar me khud be bst hu to root me meri value or size me left + right ki size + 1 me khud
  // agar me nhi hu to mere left or right me se jiske size jyada ho use root bana diya jaye or uski size ko lbp.size me set kiya jaye
  if(lbp.isBst){
    lbp.root = node;
    lbp.size = lbst.size + rbst.size + 1;
  }else if(lbst.size > rbst.size){
    lbp.root = lbst;
    lbp.size = lbst.size
  }else{
    lbp.root = rbst;
    lbp.size = rbst.size
  }
  return lbp;
 }
 console.log(largestBST(root))


 // THESE ARE THE ALL QUESTION WE HAVE FOR UNDERSTANDING BINARY TREE IN LEVEL ONE 

 // There are 12 more videos need to just watch one time
