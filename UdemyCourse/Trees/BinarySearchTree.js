class Node {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor(){
    this.root = null;
  }

  insert(value){
    let newNode = new Node(value);
    if(this.root === null){
      this.root = newNode;
    }else{
      let currentNode = this.root;
      while(true){
        if(value < currentNode.value){
          if(!currentNode.left){
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        }else{
            if(!currentNode.right){
              currentNode.right = newNode;
              return this;
            }
            currentNode = currentNode.right;
        }
      }
    }
  }

  lookup(value){
    if(this.root === null){
      return false;
    }
    let currentNode = this.root;
    while(currentNode){
      console.log("currentNode",currentNode.value)
      if(value < currentNode.value){
        currentNode = currentNode.left;
      }else if(value > currentNode.value){
        currentNode = currentNode.right;
      }else{
        return currentNode;
      }
    }
    return false;
  }
  // THIS IS NOT DONE YET  THIS IS THE HARDEST CODE TILL NOW
  remove(value){
    if (!this.root) return null;

    let currentNode = this.root;
    let prevNode = this.root;
    while (currentNode) {
      if (value < currentNode.value) {
        prevNode = currentNode;
        currentNode = currentNode.left;
        if (currentNode.value === value) {
          if (currentNode.left && currentNode.right) {
            let replacementNode = currentNode.right;
            prevNode.left = replacementNode;
            prevNode.left.left = currentNode.left;
          } else if (!currentNode.left && !currentNode.right) {
            prevNode.left = null;
          } else if (!currentNode.left && currentNode.right) {
            let replacementNode = currentNode.right;
            prevNode.left = replacementNode;
          } else if (currentNode.left && !currentNode.right) {
            let replacementNode = currentNode.left;
            prevNode.left = replacementNode;
          }
          return this;
        }
      } else if (value > currentNode.value) {
        prevNode = currentNode;
        currentNode = currentNode.right;
  
        if (currentNode.value === value) {
          if (currentNode.left && currentNode.right) {
            let replacementNode = currentNode.right;
            prevNode.right = replacementNode;
            prevNode.right.left = currentNode.left;
          } else if (!currentNode.left && !currentNode.right) {
            prevNode.right = null;
          } else if (!currentNode.left && currentNode.right) {
            let replacementNode = currentNode.right;
            prevNode.left = replacementNode;
          } else if (currentNode.left && !currentNode.right) {
            let replacementNode = currentNode.left;
            prevNode.left = replacementNode;
          }
          return this;
        }
      }
    }
    return null;
  }
}

const bst = new BST();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(1);
console.log(bst.lookup(1));