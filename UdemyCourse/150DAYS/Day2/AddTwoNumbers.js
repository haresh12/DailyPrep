/**
 * You are given two non-empty linked lists representing two non-negative integers.
 * The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself
 
    Input: l1 = [2,4,3], l2 = [5,6,4]
    Output: [7,0,8]
    Explanation: 342 + 465 = 807.
 */

let listOne = {
  val: 2,
  next: {
    val: 4,
    next: {
      val: 3,
      next: null,
    },
  },
};

let listTwo = {
  val: 5,
  next: {
    val: 6,
    next: null,
  },
};

// GOOD ONE DONE BY SELF
function addTwoNumbers(listOne, listTwo) {
  let headOne = listOne;
  let headTwo = listTwo;
  let head = null;
  let curr = null;
  let leading = 0;
  // ITS MENTIONED IN QUESTION THAT ITS REVERSE SO EVEN IF THERE IS CASE LIKE 234 AND 3 THEN ALSO THIS LOOP WILL BE EXECUTE
  while (headOne || headTwo) {
    let firstVal = headOne?.val ? headOne.val : 0;
    let secondVal = headTwo?.val ? headTwo.val : 0;
    let sum = firstVal + secondVal + leading;
    leading = 0; // reset
    if (sum > 9) {
      sum = sum % 10;
      leading = 1;
    }
    let node = {
      val: sum,
      next: null,
    };
    if (head === null) {
      head = curr = node;
    } else {
      curr.next = node;
      curr = node;
    }
    headOne = headOne?.next;
    headTwo = headTwo?.next;
  }
  if (leading === 1) {
    let node = {
      val: sum,
      next: null,
    };
    curr.next = node;
    curr = node;
  }
  return head;
  // See which length is greater
}
console.log(addTwoNumbers(listOne, listTwo));

/**
 *  EXPLANATION : 
 
Imagine you have two lists of numbers, and you want to add them together. For example, let's say the first list is [2, 3, 4] and the second list is [3].

The code first starts by creating two pointers for each list, called headOne and headTwo, that point to the first number in each list.

Next, it creates two new pointers, head and curr, to keep track of the resulting list.

Then, the code enters a loop that continues as long as there are still numbers in either of the two lists. For each iteration of the loop,
it takes the current number from each list (using headOne.val and headTwo.val), adds them together, and stores the sum in a new node.

If the sum is greater than 9, the code makes the sum into a single digit by taking the remainder 
when divided by 10 and stores that in a new node. It also sets a "leading" variable to 1, which means that there is a carry over to the next iteration of the loop.

The code continues to loop and add the numbers until there are no more numbers in either of the two lists.

Finally, if there is a "leading" value of 1 left over, the code creates one last node with a value of 1 and adds it to the end of the result list.

The result is the list that starts with a pointer called head.
 */

/**
 *  TIME AND SPACE : 
 * The time complexity of this code is O(n), where n is the maximum length of the two lists being added together. 
 * This is because the code loops through each node in both lists once, so the number of operations is proportional to the length of the lists.

    The space complexity of this code is also O(n), because it creates a new node for each sum and stores it in the resulting list. 
    This means that the amount of memory used is proportional to the length of the lists.
 */
