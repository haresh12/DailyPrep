
class Node {
  constructor(value,next){
    this.value = value
    this.next = next;
  }
}
class LinkedList {

  constructor(value){
    this.head = new Node(value,null)
    this.tail = this.head;
    this.length = 1;
  }

  // Add at last of list
  append(value){
    if(!value) return;
    const node = new Node(value,null);
    this.tail.next = node; // YOU NEED TO UNDERSTAND THAT CURRENT TAIL IS ALSO ATTECH WITH HEAD ONLY AND THAT WHY HEAD IS GETTING UPDATED
    this.tail = node;
    this.length++;  
  }

  // Incredible job
  prepand(value){
    if(!value) return;
    const node = new Node(value,null);
    node.next = this.head;
    this.head = node;
    this.length++;
  }

  insert(index,value){
   if(!index || !value) return;
   const newNode = new Node(value,null); // wie will always change next later initial we will always set null 
   let nodeBefore = this.head
   while(index !== 0){
    nodeBefore = nodeBefore.next;
    index--;
   }
   let currentNext = nodeBefore.next;
   nodeBefore.next = newNode;
   newNode.next = currentNext;
   this.length++
  }

}

const list = new LinkedList(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.append(7);
list.append(9);
list.insert(5,8)


console.log(JSON.stringify(list))
