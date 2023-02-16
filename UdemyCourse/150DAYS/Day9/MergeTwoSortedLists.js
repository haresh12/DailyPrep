/*
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

Input: list1 = [], list2 = []
Output: []

Input: list1 = [], list2 = [0]
Output: [0]
*/

let list1 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 4,
      next: null,
    },
  },
};
let list2 = {
  val: 1,
  next: {
    val: 3,
    next: {
      val: 4,
      next: null,
    },
  },
};
// Done by self 8 min (Good thing is now getting understanding about pointer when to change what in linked list)
function mergeTwoLinkedList(list1, list2) {
  if (!list1 && !list2) return null;
  if (!list1) return list2;
  if (!list2) return list1;

  let head = null;
  let newList = null;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      let newNode = {
        val: list1.val,
        next: null,
      };
      if (head === null) {
        newList = head = newNode;
      } else {
        newList.next = newNode;
        newList = newNode;
      }
      list1 = list1.next;
    } else {
      let newNode = {
        val: list2.val,
        next: null,
      };
      if (head === null) {
        newList = head = newNode;
      } else {
        newList.next = newNode;
        newList = newNode;
      }
      list2 = list2.next;
    }
  }

  while (list1) {
    let newNode = {
      val: list1.val,
      next: null,
    };
    if (head === null) {
      newList = head = newNode;
    } else {
      newList.next = newNode;
      newList = newNode;
    }
    list1 = list1.next;
  }
  while (list2) {
    let newNode = {
      val: list2.val,
      next: null,
    };
    if (head === null) {
      newList = head = newNode;
    } else {
      newList.next = newNode;
      newList = newNode;
    }
    list2 = list2.next;
  }

  return head;
}

console.log(JSON.stringify(mergeTwoLinkedList(list1, list2)));
