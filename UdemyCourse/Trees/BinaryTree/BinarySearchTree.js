/*
   Binary Search Tree is same as Binary tree it has also zero one or max two node like left and right.
   THE ONLY DIFFERENCE BETWEEN BST AND BT IS IN BST ALL THE LEFT SIDE OF NODE VALUE WILL LESS THE THE
   CURRENT NODE WHERE ALL THE RIGHT SIDE OF NODE VALUE WILL BE HIGHER THEN THE CURRENT NODE.

   See the codes like find size , sum dia all will be same in both tree where codes like find min
   , max or search something in tree this kind of question will be logn in binary search tree
*/


class Node {
  constructor(data, left , right){
    this.data = data;
    this.left = left;
    this.right = right;
  }
}
let arr = [12,25,37,50,62,75,87];
// You will get sorted array andr from that you need to created bst
// This is totally different then Generic tree and Binary tree.
let root  = structureBinarySearchTree(arr,0,arr.length-1)
// display(root)
// console.log(`Size of bst is : ${size(root)}`)
// console.log(`Sum of bst is : ${sum(root)}`)
// console.log(`Max of bst is : ${max(root)}`)
// console.log(`Min of bst is : ${min(root)}`)
// console.log(`Find of bst is : ${find(root,75)}`)
// console.log(`add node in bst : ${display(addNodeInBst(root,90))}`)
// console.log(`add node in bst2 : ${display(addNodeInBst2(root,90))}`)

// // Add couple of single child node for removeSingle child node
// root = addNodeInBst2(root,30) 
// root = addNodeInBst(root,70)
// console.log(`remove node in bst : ${display(removeNodeInBst(root,75))}`)
// let totalSum = 0;
// sumOfLargerInBst(root);
// display(root)
// console.log(`find lowest common ancestor  in bst : ${findLCA(root,12,37)}`)
console.log(`print the values in range : ${printInRange(root,76,87)}`)
console.log(`print target sum pair : ${targetSumPair(root,root,100)}`)

// FOR LEFT VALUE MAKE SURE YOU PAST LOW TO MID-1 NOT 0 TO MID -1 MAD THIS MISTAKE IN PAST ALSO
function structureBinarySearchTree(arr,lo,hi){
// Simple base case if lo ki value bad jaye hi se then return null because we iterated through eniter array
if(lo > hi) return null
  // Find the mid
  // 0 to mid - 1 all will be on left // becasue array is sorted so use chote he hote 0 to mid - 1
  // mid + 1 to hi sab bade
  let mid = Math.floor((lo+hi)/2)
  let lv = structureBinarySearchTree(arr,lo,mid-1); // left values
  let rv = structureBinarySearchTree(arr,mid+1,hi); // right values

  // At this point you have left value you have right value so or kya chaiye node bna bhai

  let node = new Node(arr[mid],lv,rv);

  return node;
}

// Same as binary tree
function display(root){
if(root === null) {
  return;
}
  // You do your job
 let str = '';
 str+= root.left ? root.left.data + ' . ' : ' . ';
 str+= `<- ${root.data} ->`
 str+=root.right ? root.right.data+' . '  : ' . ';
 console.log(str)
 // Your left and right knows how to take care there own stuff
 display(root.left)
 display(root.right)

}

// Same as binary tree
function sum(root){
  if(root == null){
    return 0;
  }

  let ls = sum(root.left);
  let rs = sum(root.right);
  
  let ts = ls + rs + root.data;

  return ts;
}
// Same as binary tree
function size(root){
  if(root == null){
    return 0;
  }

  let ls = size(root.left);
  let rs = size(root.right);
  
  let ts = ls + rs + 1;

  return ts;
}

// Only right call because bst me max to bhai right me he milega
function max(root){
 console.log(root?.data)
 if(root === null){
  return Number.MIN_SAFE_INTEGER;
 }
 let maxValue = max(root.right);
 let finalMax = Math.max(root.data,maxValue);

 return finalMax;
}

// Only left call because bst me min to bhai left me he milega
function min(root){
  if(root === null){
   return Number.MAX_SAFE_INTEGER;
  }
  let minValue = min(root.left);
  let finalMin = Math.min(root.data,minValue);
 
  return finalMin;
 }

 // This function also will be o(logn)
 function find(root,data){
  if(root === null) return false
  if(data === root.data){
    return true;
  }else if(data < root.data){
   return find(root.left,data) // Bhai dono parameter pass krne hote ye 
  }else{
   return find(root.right,data)
  }
 }

 function addNodeInBst(root,data){
  if(root.right === null && data > root.data){
    let newNode = new Node(data,null,null);
    root.right = newNode;
    return root;
  }
  if(root.left === null && data < root.data){
    let newNode = new Node(data,null,null);
    root.left = newNode;
    return root;
  }
  if(data < root.data){
    let left = addNodeInBst(root.left,data)
    root.left = left;
    return root;
  }else{
    let right = addNodeInBst(root.right,data)
    root.right = right;
    return root;  }
 }

 // Better way to do this question
 // Important thing to learn here is how you get returned node data this will become common thread in 
 // binary search tree
 function addNodeInBst2(root,data){
  if(root === null){
    return new Node(data,null,null); 
  }
  if(root.data > data){
     root.left =  addNodeInBst2(root.left,data);
  }else if(root.data < data){
    root.right =  addNodeInBst2(root.right,data);
  }else{
    // in case of equal nothing to do
   }
  return root 
 }

 function removeLeftMaxNode(root){
  if(root.left !== null){
    return removeLeftMaxNode(root.left);
  }else{
    return null;
  }
 }
 /*
   Till now most instersting question need to handle three different 
   1. Remove node who have 0 child like leaf
   2. Remove node who have 1 chlid either left or right
   3. Remove node who have both child left and right : (This one is tricky)
 */
 function removeNodeInBst(root,data){
  if(root === null){
    return null;
  }
  if(root.data > data){
    root.left = removeNodeInBst(root.left,data)
  }else if(root.data < data){
    root.right = removeNodeInBst(root.right,data)
  }else{
    // Here we found the node that we need to delete

    // first senario have both children 
    if(root.left && root.right){

      // This one is trick so here we have both left and right
      // Step 1 find max from leff side 
      // Step 2 Replace that max with current node value that we want to remove
      // Step 3 remove max node

      // Do thing about it like why we are doing all this steps and simple ANSWER IS WITH THIS
      // THREE STEPS TREE WILL BE BST STILL DO DRY RUN FOR BETTER IDEA

      let maxFromLeft = max(root.left); // Got max value
      root.data = maxFromLeft; // Replaced with current value
      root.left = removeNodeInBst(root.left,maxFromLeft); // THIS IS THE MOST IMPORTENT LINE IN ENITER CODE
      return root
    }else if(root.left || root.right){
      // either have left or have right child
      // Good job here also
      // agar left hua to 
      if(root.left){
        return root.left;
      }else{
        return root.right;
      }
    }else{
      // no child good one
      return null;
    }
  }
  return root
 }

/*
  Was unable to do it by my self because here we are using one property of BST that i was not
  aware about.

  IN BST IF YOU TRAVEL IN INORDER THAT IT WILL BE LIKE SORTED ARRAY.

  LIKE : <LEFT VALUE (SMALL)>   <YOUR NODE>  <RIGHT VALUE <LARGE> >

  BUT THIS IS WHEN YOU DO LEFT CALL FIRST BUT HERE WE WILL DO RIGHT CALL FIRT

  SO : <RIGHT VALUE <LARGE>>    <YOUR NODE>  <LEFT VALUE>
*/
 function sumOfLargerInBst(root){
  if(root === null){
    return ;
  }
 sumOfLargerInBst(root.right); // WHY RIGHT FIRST BECAUSE WE NEED LIKE  RNL
  let currentData = root.data
  root.data+=totalSum
  totalSum+=currentData
  sumOfLargerInBst(root.left);  
 }

 
 // Lowest common ancestor
 // This was done totally different then the way i expected
 // UNDERSTAND HOW BST CAN HELP US HERE
 // DON'T DO EVERY QUESTION LIKE BINARY TREE UNDERSTAND HOW BST CAN HELP IN ANY CASE
 function findLCA(root,data1,data2){
 if(root === null){
  return null
 }

  if(root.data > data1 && root.data > data2){
    // dono data1 and data2 se bada hai root ka data so go to left for search
     return findLCA(root.left,data1,data2)
  }else if(root.data < data1 && root.data < data2){
        // dono data1 and data2 se chota hai root ka data so go to right for search
    return findLCA(root.right,data1,data2)
  }else{
      // yha ek bada or ek chota hai so this is where they will go to different root so this is lca
      return root.data
  }
 }

 // Print all the values that are in range of data 1 and data 2.
 // Eniter thing was right only thing missed is like print in inorder thats it else would have got this one correct also.
 // THE BIG MISTAKE I AM MAKING IN MOST OF RECURSION QUESTION IS NOT PASSING ALL ARGUMENT IN  RECURSIVE CALL.
 // MOST OF TIME WE CALL LIKE X(ROOT.LEFT) OR X(ROOT.RIGHT) BUT BHAI OR BI TO PARAMETERS HAI NA DATA1 AND DATA2
 // UNHE KON PASS KREGA
 function printInRange(root,data1,data2){
 if(root === null){
  return;
 }
  if(root.data > data1 && root.data > data2){
     printInRange(root.left,data1,data2); // AGAIN WASTED 20 MINUTES FORGOT TO ADD PARAMETERS
  }else if(root.data < data1 && root.data < data2) {
    printInRange(root.right,data1,data2)
  }else{
     printInRange(root.left,data1,data2);
      console.log(root.data); // IN ORDER BECAUSE INCRESING ORDER ME PRINT KRNA HAI
     printInRange(root.right,data1,data2);
  }
 }

 // More better approch need to be done
 function targetSumPair(mainroot,root,target){
  if(root === null){
    return;
  }
   targetSumPair(mainroot,root.left,target);
   let comp = target - root.data
   // this will help you to not print duplicate like 25 - 75 and 75 - 25
   if(root.data < comp){ 
    let findInTree = find(mainroot,comp);
    if(findInTree){
      console.log(`${root.data} - ${comp}`);
    }
   }
   targetSumPair(mainroot,root.right,target);

 }