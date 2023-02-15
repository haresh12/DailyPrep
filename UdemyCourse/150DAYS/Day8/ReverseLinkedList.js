/*
Given the head of a singly linked list, reverse the list, and return the reversed list.
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
*/

// MUST UNDERSTAND THE POINTERS HOW THE ARE CHANGING WHY WE NEED TO TAKE TEMP AND ALL

/*
   Explanation : 

The reverseLL function takes a singly linked list (list) as its input and returns a new linked list
with the nodes in the reverse order.

The function initializes two variables:
curr is set to the head of the original linked list (list).
prev is set to null.

The while loop iterates over each node in the original linked list (list) until it reaches the end (i.e., curr is null).
Within the loop, the following steps are performed:
The next node in the original linked list (temp) is stored in a temporary variable.

The next property of the current node (curr.next) is set to the previous node (prev). 
This effectively "reverses" the order of the nodes in the new linked list that is being constructed.

The prev variable is updated to the current node (prev = curr).
The curr variable is updated to the next node in the original linked list (curr = temp).

After the loop completes, the prev variable points to the head of the new linked list 
(which was the tail of the original linked list), and the function returns this value.

The time complexity of this algorithm is O(n), where n is the length of the linked list, 
because it must iterate over each node in the list once.

The space complexity is O(1), because the algorithm uses a constant amount of additional memory 
(i.e., the curr, prev, and temp variables).
*/
function reverseLL(list) {
  let curr = list;
  let prev = null;

  while (curr !== null) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }
  return prev;
}

let list = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: null,
        },
      },
    },
  },
};

console.log(reverseLL(list));
