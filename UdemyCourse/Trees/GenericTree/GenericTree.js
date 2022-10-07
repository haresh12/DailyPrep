//https://www.youtube.com/watch?v=3xovYxKCgBQ&list=PL-Jc9J83PIiEmjuIVDrwR9h5i9TT2CEU_&index=3 
// (MUST UNDERSTAND)
// NO MATTER WHETHER ITS LINKED LIST OR ANY TYPE OF TREE WHENEVER YOU ARE SOLVING PROBLEM UNDERSTAND
// THAT YOU WILL HAVE ONLY ONE NODE NOTHING ELSE
class Node {
  constructor(data){
    this.data = data;
    this.children = [] ; // initialy it will be blank array 
  } 
}
// You will get data in array and need to structure in generic tree.
// LOOKS CORRECT BUT TRY FEW TIMES NOT HARD TO UNDERSTAND (WORKED IN ALL CASES)
function strucureGenericTree(arr){
 
  let stack = [] ; // BHAI JS ME NHI HAI STACK JESA KUSH JO HAI VO YHI HE
  // YES THIS BLANK ARRAY IS STACK FOR YOU AND YOU CAN USE ONLY PUSH POP AND PEEK METHOD PEEK SIMPLY MEAN 
  // ACCESS VALUE FROM ARR[ARR.LENGTH-1] LAST INDEX
  let root ;
  for(let i = 0 ; i < arr.length ; i++){
    if(arr[i] !== -1){
      let node =  new Node(arr[i]); // root node
      if(stack.length === 0){
        root = node;
        stack.push(node);
      }else{
        let top = stack[stack.length-1]; // get value from top
        top.children.push(node); // 
        stack.push(node);
      }
    }else{
      stack.pop();
    }
  }
 return root;
}
// let arr = [10,20,50,-1,60,-1,180,-1,-1,30,70,-1,80,110,-1,120,-1,-1,90,-1,-1,40,100,-1,-1,-1];  // big  tree
 let arr2 = [10,20,-1,30,50,-1,60,-1,-1,40,-1,-1];  //small  tree
let arr = [10,20,50,-1,60,-1,-1,30,70,-1,80,110,-1,120,-1,-1,90,-1,-1,40,100,-1,-1,-1] // most used tree
const root = strucureGenericTree(arr)
const root2 = strucureGenericTree(arr2)

console.log(displayTree(root))
console.log(getSize(root,0))
console.log(getMaximum(root,Number.MIN_SAFE_INTEGER))
console.log(getHeight(root))
// traversal(root);
// printLevelOrder(root);
// printLevelOrderLineWise(root)
// printLevelOrderLinewiseZigZag(root)
// printLevelOrderApproch2(root)
// console.log(mirrorOfTree(root))
// console.log(findInTree(root,602))
// console.log(nodeToRootPath(root,50,[]))
// findLowestCommonAncentor(root,50,100)
// console.log(distanceBeweenNode(root,60,90))
// getPredecessorAndSuccessor(root,110);

/* 
See whats expectation from display tree
  10 => 20,30
  20 => 40,50,60,
  // In short print parent then arrow then its children if its leaf node then print
   node then arrow only
   40 => . (Leaf node example)     
*/
/*
 Always try things that are in your mind don't go for rata fication this is easy really easy
 yet was not able to done because i thought idea i have in my mind won't work
*/

function displayTree(root){
let str = root.data + " => "
// ME KHUD ROOT KE CHILDREN PRINT KR DUGA 
for(let i = 0 ; i < root.children.length ; i++){
   str+=root.children[i].data+","
}
str+='.';
console.log(str)
// MERA FAITH HAI KI BAKI KE CHILDREN displayTree function print krna janta hai
for(let i = 0 ; i < root.children.length ; i++){
  displayTree(root.children[i])
}
}

// EASY
function getSize(root,count){
  count++;
  for(let i = 0 ; i < root.children.length ; i++){
   count = getSize(root.children[i],count)
  }
 return count;
}

//EASY
function getMaximum(root,max){
   if(root.data > max){
    max = root.data
   }
  for(let i = 0 ; i < root.children.length ; i++){
    max = getMaximum(root.children[i],max)
  }
 return max;
}
// WAS NOT ABLE TO DO. DO THIS COUPLE OF TIME DRAW TREE
// Not undersantable without tree
function getHeight(root){
 let hi = -1;
 for(let i = 0 ; i < root.children.length ; i++){
    let ch = getHeight(root.children[i]);
    hi = Math.max(hi,ch);
 }
 hi+=1;
 return hi;
}

// MI QUESTION TILL NOW IN TREE WIERD REQUIREMENT
//https://www.youtube.com/watch?v=kL6tIGhVW1k&list=PL-Jc9J83PIiEmjuIVDrwR9h5i9TT2CEU_&index=10

// Node pre  10
// Edge pre  10 - 20
// Node pre  20
// Node post  20
// Edge post  10 - 20
// Edge pre  10 - 30
// Node pre  30
// Edge pre  30 - 50
// Node pre  50
// Node post  50
// Edge post  30 - 50
// Edge pre  30 - 60
// Node pre  60
// Node post  60
// Edge post  30 - 60
// Node post  30
// Edge post  10 - 30
// Edge pre  10 - 40
// Node pre  40
// Node post  40
// Edge post  10 - 40
// Node post  10

/*
 See above on is the output for traversal now here main learning part is we understand where recursion
 is at specific point of time.

 FOR ENTIRE RECURSION UNDRESTAND PRE POST AND IN ORDER THIS ARE THE THREE IMPORTANT THING WHICH WILL
 HELP US IN LONG RUN

 TRY TO DRAW AS MANY AS RECURSION TREE YOU CAN
*/
function traversal(root){
  console.log('Node pre ', root.data);
  for(let i = 0 ; i < root.children.length ; i++){
    console.log('Edge pre ', `${root.data} - ${root.children[i].data}`)
    traversal(root.children[i]);
    console.log('Edge post ', `${root.data} - ${root.children[i].data}`)
  }
  console.log('Node post ', root.data);
}

/*
  Level order tree in this question rather then going deep in recursion and then doing
  operation we need to print from left to right.

  Ok i was unable to do it because these question follows specific algorithem.

  SO ALWAYS REMEMBER TO TRAVESE FROM LEFT TO RIGHT IN TREE WE ARE GOING TO USE BELOW ALGORIGHTM

  Also not even recursion need to solve Problem.

  >> Take one Data structure start like Queue.
  >> Start from root and initialy just add root value into queue.
  >> Now algo starts : Remove item from queue 
  >> Print removed item 
  >> At last add children of removed item 
  >> This above process we need to do until queue get empty
  >> Also this is like BFS YOU ARE MOVING LEFT TO RIGHT RATHER THEN DEEP IN RECURSION
*/

// REMOVE , PRINT  , ADD CHIDREN
function printLevelOrder(root){
if(!root) return;
let queue = [];
  // initial step add root into queue
    queue.push(root);

  // loop to through queue until its not empty
    while(queue.length > 0){
      // Remove item from queue.
      const item = queue.shift()
      
      // print item from queue
      console.log(item.data)

      // add removed item children
      for(let i  = 0 ; i < item.children.length ; i++){
           queue.push(item.children[i])
      }
    }
}
// Question is same as above one but just need to print different level in different line
// INCREDIBLE JOB DONE BY SELF
function printLevelOrderLineWise(root){
 if(!root) return

 let firstQueue = [];
 let secondQueue = [];
 let str = ''
 firstQueue.push(root);
  
  while(firstQueue.length > 0){
   let item = firstQueue.shift()
   str+=`${item.data} `
   for(let i = 0 ; i < item.children.length ; i++){
    secondQueue.push(item.children[i]);
   }
   if(firstQueue.length === 0){
     firstQueue = secondQueue;
     secondQueue=[]
     console.log(str)
     str = ''
   } 
  }
}
// This one is good approch and this is kind of approch first come into mind 
// In this approch we will add marker in queue rather then taking another queue
// Try to dry run how this null helping us to achive solution with one queue
//https://www.youtube.com/watch?v=NuASXwfaFaY&list=PL-Jc9J83PIiEmjuIVDrwR9h5i9TT2CEU_&index=18
// IF YOU WANT TO LEARN MORE THEN TWO APPROCH
function printLevelOrderApproch2(root){
 if(!root) return
 let queue = [];
 let str = ''
 queue.push(root);
 queue.push(null); // for marker 

 while(queue.length > 0){
  // THIS WILL COMES INTO MIND ONLY WHEN YOU DO DRY RUN BECAUSE WE ALWAYS GONE HAVE ONE LAST NULL
  // AT THE END OF QUEUE WHEN YOU COMPLETE YOUR TREE AND BECAUSE OF THAT IF YOU TRY TO ACCESS ITEM.DATA
  // ON NULL IT WILL CRASH THE PROGRAM
  if(queue.length === 1 && queue[0] === null){
    queue.shift();
    return;
  }
  let item = queue.shift(); // Remove
   str+=`${item.data} `
  for(let i = 0 ; i < item.children.length ; i++){
     queue.push(item.children[i]);
  }
  if(queue[0] === null){   // its like you are using peek method from queue
     queue.shift();
     console.log(str)
     str = '';
     queue.push(null); // It will be useful for next level
  }
 }
}
// May be hacky solution but working fine
// IN SIMPLE AT LINE NUMBER 229 YOU ARE USING QUEUE AT LINE NUMBER 231 YOU ARE USING STACK
// TRY TO VISUALIZE THIS PROBLEM IT WILL MAKE MORE SENSE
function printLevelOrderLinewiseZigZag(root){
  if(!root) return
 
  let firstQueue = [];
  let secondQueue = [];
  let str = ''
  let zigZag = true
  let item;
  firstQueue.push(root);
   
   while(firstQueue.length > 0){
     if(zigZag){
      item = firstQueue.shift()
     }else{
      item = firstQueue.pop()
     }
    str+=`${item.data} `
    for(let i = 0 ; i < item.children.length ; i++){
     secondQueue.push(item.children[i]);
    }
    if(firstQueue.length === 0){
      firstQueue = secondQueue;
      secondQueue=[]
      console.log(str)
      str = ''
      zigZag=!zigZag
    } 
   }
 }
/*
  To be real this question is nothing all you have to do in all level if
  children are 20,30,40 then you have to make it like 40 30 20 and this
  thing you have to do for all levels.

  BUT importent thing here we need to understand that we not only have to print
  the values but need to create eniter new tree.
  WORST NOT DONE 
*/
 function mirrorOfTree(root){
  let newTree = new Node(root.data);
  let que = [];
  let eQue = [];
  que.push(root);
  eQue.push(newTree)
  que.push(null);
  while(que.length > 0){
    let item = que.shift();
    if(item !== null){
     for(let i = item.children.length ; i >= 0 ; i++){
         eQue[0].push(item.children[i]);   
     }
    }
  }
 }




 function findInTree(root,data){
  if(root.data === data){
    return true
  }
  for(let i = 0 ; i < root.children.length ; i++){
    let check = findInTree(root.children[i],data);
    if(check){
      return true
    }
  }
  return false;
 }

 /*
   This is the importent question need to understand 
   Few good question why we are using loop from backward
   Why we are doing stuff in pre order.

   Ans 1 : So we are going from right to left in loop because we 
   are doing remove operation in arr and if we do remove operation then
   all the other index get shifted and because of that we miss some of the
   checks. (THIS IS LOGICAL)

   Ans 2 : WHY IN PREORDER : Because if you do in post order you entire tree will
   be deleted understand with example 10 has two child => 20,30 and 20 and 30 has
   0 chlid. Now in post order you checked that if 20 has children you get ans no
   so you removed that 30 has children you get ans no now you removed 30 and as you
   removed 20 and 30 now you are going for 10 here 10 has children 20 and 30 but
   you already removed that and because of that now accoriding to our code 10 has
   also no children and it will be also removed and this way eniter tree will be removed
 */
/*
  GOOD WORKED FINE
*/
 function removeAllLeaf(root){
   for(let i = root.children.length -1 ; i>=0 ; i--){
      if(root.children[i].children.length === 0){
          root.children.splice(i,1); // NO REMOVE METHOD WOW USE SPLICE PASS INDEX AS FIRST PARAMETER AND HOW MAY ELEMENT YOU WANT TO DELETE AFTER THAT AS SECOND PARAMETER IN OUR CASE ITS 1 
      }
   }
   for(let i = 0 ; i < root.children.length ; i++){
       removeAllLeaf(root.children[i])
   }
   return root
 }
//  console.log(removeAllLeaf(root))

 /* 
   In this question you will be given on data x and you need to return path from 
   that x to root.
   => in simple work if x called y and why called z and z is you data then answer will
   be [z,y,x] SIMPLE

   ONE THING UNDERSTAND IF YOU GET TRUE AT 110 THE TILL ROOT TILL ROOT WILL RETURN TRUE TRUE TRUE TRUE 
   THIS LINE IS CONFUSING BUT TRY TO UNDERSTAND HOW YOU ARE FILLING THE LIST
   Need to return array list
 */

   /*
      NEED MORE PRECTICE IN WHERE RECURSION CODE CURRENTLY IS
   */
 function nodeToRootPath(root,data,arr){
   if(root.data == data){
    arr.push(root.data)
    return arr;
   }

   for(let i  = 0 ; i < root.children.length ; i++){
     let chk = nodeToRootPath(root.children[i],data,arr)
     if(chk.length > 0){
        arr.push(root.data); // WHY ROOT.DATA WHY NOT ROOT.CHILDERN[I].DATA UNDERSTAND THIS
      return arr
     }
   }
   return false
 }

 /*
   Lowest Comment Ancetor means the node that connect both value => val1 val2

   >> 10 => 20 => 50 => 130
    in above [20,50,130] are Ancetor of 10 
    [50,100] => Ancetor of 20
    [100] => Ancetor of 50
 */
/*
   GOOD JOB WORKED WELL JUST TRY TO FIND OUT MORE OPTIMIZE SOLUTION
*/
 function findLowestCommonAncentor(root,val1,val2){

  let ntrp1 =nodeToRootPath(root,val1,[])
  let ntrp2 =nodeToRootPath(root,val2,[])
 
  for(let i = 0  ; i < ntrp1.length ; i++){
    for(let j = 0 ; j < ntrp2.length ; j++){
      if(ntrp1[i] === ntrp2[j]){
        console.log(i,j)
        return ntrp2[j]
      }
    }
  }
 }

 /*
   In this question you will have to find the distance between to nodes 
   in terms of edges.
   
   THIS QUESTION IS ENITERLY SAME AS findLowestCommenAncetor SO DO THE SAME
   FIND NODE TO PATH FIRST
   THEN CHECK WHICH IS COMMEN VALUE IN ARRAY NOW HERE DON'T RETURN THAT VALUE
   BUT RETURN STEPS LIKE HOW MAY STEPS WE HAVE TO TAKE TO DO THAT IN SIMPLE I + J
 */
 function distanceBeweenNode(root,val1,val2){
  
  let ntrp1 = nodeToRootPath(root,val1,[])
  let ntrp2 = nodeToRootPath(root,val2,[])

  for(let i = 0 ; i < ntrp1.length ; i++){
    for(let j = 0 ; j < ntrp2.length ; j++){
      if(ntrp1[i] === ntrp2[j]){
        return i + j;
      }
    }
  }
 }

/*
  HERE WE DON'T HAVE TO WORRY ABOUT DATA INSIDE 
*/
function areTreeInSimilerShap(root1,root2){
if(root1.children.length !== root2.children.length){
  return false;
}
for(let i = 0 ; i < root1.children.length ; i++){
  let hasSameChildren =  areTreeInSimilerShap(root1.children[i],root2.children[i])
  if(!hasSameChildren){
    return false;
  }
}
 return true;
}

/*
  This question is almost similer as similer in shap but here we need to check like
  like left most children are similer as right most children.
*/
function areMirror(root1,root2){
 if(root1.children.length !== root2.children.length){
  return false
 }
 for(let i = 0 ; i < root1.children.length ; i++){
  let j = root1.children.length - 1 - i; // THIS IS THE DIFFERENCE BETWEEN MIRROR AND SIMILER
  let hasSameChildren = areMirror(root1.children[i],root2.children[j]);
  if(!hasSameChildren) return false;
 }
 return true
}
// console.log(areMirror(root,root2));

/*
  Example : 10,20,50 in our tree if we talk about 
  20 => then Predecessor of 20 is 10 and Successer is 50.

  >> In case of 50 =>  Predecessor is 20 Successer is null
*/

/*
   TRAVEL AND CHANGE THIS STRAGE WE WILL USE MORE PRECTICE NEEDED
   THIS IS INCREDIBAL QUESTION 
   Why we are using thrid variable state here must understand by code.
   How you can get prev value from tree if you understand this question it will be 
   easy in other question
   HERE STATE CAN BE 0 1 2  => 0 MEANS TARGET NOT FOUND YET
                               1 MEANS TARGET FOUND AND MOVING FURTURE
                               2 MEANS VALUE ASSIGNED TO SUC ALSO NO MORE WORK TO DO

 IMPORTENT THING HERE IS WHERE ANS WHEN TO SET OUTSIDE VALUES IN RECURSION                               
*/
let pre = null;
let suc = null;
let state = 0
function getPredecessorAndSuccessor(root,target){
 if(state === 0 ){
  if(root.data === target){
    // good means we found our target change the state to 1
    state = 1;
  }else{
    // but if this is not a target this this is predesser for sure and this will keep changing until we get target
     pre = root.data;
  }
 }else if(state === 1){
  // In this stage we already have pre and target just need to set suc and change the state value
   suc = root.data;
   state = 2 // DO NOT FORGET THIS
 }
  for(let i = 0 ; i < root.children.length ; i++){
     getPredecessorAndSuccessor(root.children[i],target)
  }
}

/*
   Ceil = just larger means if you have given value 65 then according to our tree 70 will 
   be the Ceil
   Floor = Just smaller if you have given value 65 then according to our tree 60 will 
   be the Floor

   AGAIN TRAVEL AND CHANGE STRATERGY NO NEED TO RETURN ANYTHING

   GOOD JOB WITH IF ELSE THINGING

   WITH THIS QUESTION YOU CAN ALSO UNDERSTAND KTH LARGEST FROM TREE
   LIKE IF  YOU FIND FLOOR FOR INFINITY THEN IT WILL RETURN LARGET VALUE IN TREE
   IF YOU FIND FLOOR FOR LARGEST VALUE IN TREE THEN IT WILL RETURN SECOND LARGEST
   VALUE AND IF YOU FINF THE FLOOR FOR SECOND LARGEST VALUE THEN IT WILL RETURN
   THIRD LARGEST VALUE IN THE TREE AND THATS HOW WE CAN FIND KTH LARGEST
*/

let ceil =  Number.MAX_SAFE_INTEGER
let floor = Number.MIN_SAFE_INTEGER
let foundCeil = false;
let foundFloor = false
function getCeilAndFloor(root,value){
 if(root.data > value){
    if(!foundCeil){
      foundCeil = true;
      ceil = root.data;
    }else{
      ceil = Math.min(ceil,root.data) // because we need to look for entire tree 
    }
 }
 if(root.data < value){
  if(!foundFloor){
    foundFloor = true;
    floor = root.data
  }else{
    floor = Math.max(floor,root.data)
  }
 } 
  for(let i = 0 ; i < root.children.length ; i++){
       getCeilAndFloor(root.children[i],value)
  }
}

getCeilAndFloor(root,5)

// understand this will dry run not done yet
function getKthLargestValue(root,k){
   floor = Number.MIN_SAFE_INTEGER;
   let factor = Number.MAX_SAFE_INTEGER;
  for(let i = 0 ; i < k ; i++){
    getCeilAndFloor(root,factor)
    factor = floor ;// when you pass Infinity you will get 120 then you pass 120 you get 110
    floor = Number.MIN_SAFE_INTEGER
  }
  return factor
}

console.log(getKthLargestValue(root,3))


// DONE SO THESE ARE THE ALL QUESTION WE HAVE DONE TO JUST UNDERSTAND HOW WE CAN USE
// TREE IN JS MAINLY GENERIC TREE NOW ALL OTHER QUESTION WE WILL DO FROM LEETCODE