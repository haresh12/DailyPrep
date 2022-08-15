/*
 Till now most of the data structure we learned are liner data structures and it has
 only one way to go like from one index to another index or from one node to another
 node but in tress we have multiple ways to go like trees have :
 Root  : From where tree started
 Parent : node below this node and must be connected with this
 Child : the nodes that are connected with one parent . 
 Sibling : all the child nodes with single parent are sibling
 Leaf : all the nodes at last chain of tree are leaf node
*/

/*
  Binary tree : Each node can have 0 1 or max 2 node connected with it and each 
  child can have one parent.

  Perfect Binary tree : In this kind of binary tree each node either can have 0 node or 2 node
  connected with it this way in leaf node we will have almost half of the nodes.

  Full Binary tree : where each node can have either 0 1 or 2 node conncted with it now here there 
  could be a case when root node has one child and that child has one child and that child has one
  these way all parent has one child and then it will be same like linked list.

  THESE IS WHY IN MOST CASES IF WOULD BE GOOD IF WE HAVE BALANCE  BINARY TREE.

  THERE ARE SOME ALGORITHM THAT HELP US TO BALANCE A BINARY TREE LIKE AVL TREE RED BLACK TREE
  BUT THOSE ARE THE THINGS THAT WE WILL LEARN LATER.
*/

/*
   There will be one notation that we will learn in trees that is O(logn) and lets learn it by
   example suppose you have one perfect balanced tree and from there you have to find one value
   now for that you don't have to traves through entire tree at each steps you will make some
   sort of logical dicision and move ahead accordingly and thats why you have to traverse only
   height of the tree not all the nodes of the tree. AND THATS WHAT O(LOGN) MEANS BUT IN WORST
   CASE WHERE EACH PARENT HAVE ONE CHILD IN THAT CASE IT COULD BE O(N) AGAIN BECAUSE ITS LINKED
   LIST.

   DO MORE PRACTICALS TO UNDERSTAND ALL ABOVE CONCEPT.

   O(LOGN) => The choice of next node where we need to perfrom some action is possiblity of serval
              other nodes and one need to be choosen from them and no need to traves all of them.
*/

/*
  Binery Search Tree : Rules of BST : =>
  1. All the node that are on right side of current node should have greater value and all the
     nodes that are on left side of current node should have small value then current node.
  
  2. And each node can have upto two nodes connected with it. (Binery tree)

  See if you want to search some item then we can do it with hashmap just provide the key and
  will get the value but trees are good in most cases becasue they preseved reletion ship 
  between nodes like parent child leaf all this which no other data structure do.

  Also becasuse of the first property of binery tree (RULE 1) to search anything in binary tree
  we don't have to traverse through entire tree but at each leave just one node.
*/

/*
    Balanced And UnBalanced binary tree :  See everything works good when we have balanced or perfect
    binary tree and almost all operation like insert delete lookup cost o(logn) but then there is one
    senario where tree becomes unbalanced lik all the nodes are added in one direction in that case
    its become like chain or we can say its like linked list and all operation now becomes o(n)
    SO MAKE SURE FOR GOOD CASES ALL OPERATION COST IS O(LOGN) AND FOR WORST CASE IT WILL BE O(N).

    THERE ARE COUPLE OF ALGORITHEMS THAT HELPS US TO BALANCE A UNBALANCE BINARY TREE LIKE RED BLACK
    AND AVL TREE BUT THIS ARE ADVANCE TOPIC WILL LEARN ABOUT THEM LATER.
    
 >> PROPS AND CONS OF BST => Pros : Better then O(n)
                              ordered 
                              Flexible size
                             Cons : No o(1) operation  

*/