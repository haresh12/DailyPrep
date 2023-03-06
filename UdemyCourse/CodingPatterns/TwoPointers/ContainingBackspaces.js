/*
  Problem Challenge 2: Comparing Strings containing Backspaces (medium) 
  Problem Statement :
  Given two strings containing backspaces (identified by the character ‘#’), check if the two strings are equal.

  Example 1:

  Input: str1="xy#z", str2="xzz#"
  Output: true
  Explanation: After applying backspaces the strings become "xz" and "xz" respectively.

  Example 2:

  Input: str1="xy#z", str2="xyz#"
  Output: false
  Explanation: After applying backspaces the strings become "xz" and "xy" respectively.

  Example 3:

  Input: str1="xy#z", str2="xyz#"
  Output: false
  Explanation: After applying backspaces the strings become "xz" and "xy" respectively.

  Example 4:
  
  Input: str1="xywrrmp", str2="xywrrmu#p"
  Output: true
  Explanation: After applying backspaces the strings become "xywrrmp" and "xywrrmp" respectively.

*/

console.log(backspacesStringCompare("xy#z", "xzz#"));

/*
    GREAT JOB DONE BY SELF EVEN THE WAY OF DOING IS NOT BEST STILL IT GETS SUBMITTED IN LEETCODE  AND WE DON'T NEED TO USE TWO POINTER FOR THIS ATLEAST

    TIME AND SPACE : 


    Time complexity: O(n), where n is the length of the input strings. The helper function performs a single pass through each string, 
    which takes O(n) time. The split and join methods used in the helper function take O(n) time as well, but since they are called only once, 
    their contribution to the overall time complexity is also O(n).

    Space complexity: O(n), where n is the length of the input strings. The helper function creates a new array from the input string, 
    which takes O(n) space. The rest of the space used by the function is constant and does not depend on the length of the input strings, 
    so it can be considered O(1). Overall, the space complexity is dominated by the array created in the helper function, so it is O(n).

*/
function backspacesStringCompare(str1, str2) {
  if (!str1 || !str2) return false;
  return helper(str1) === helper(str2);
}

function helper(str) {
  let totalHash = 0;
  str = str.split(""); // FIRST CONVERT IT TO ARRAY
  for (let i = str.length; i >= 0; i--) {
    if (str[i] === "#") {
      totalHash++;
    } else if (totalHash > 0) {
      str[i] = "_"; // will remove all "" and # at last
      totalHash--;
    }
  }
  str = str.join(""); // CONVERT BACK INTO  STR AND REMOVE ALL # AND _ THEN YOU WILL HAVE STRING THAT YOU NEED
  str = str.replaceAll("#", ""); // MAKE SURE YOU DON'T USE REPLACE BUT IT SHOULD BE REPLACEALL METHOD
  str = str.replaceAll("_", "");
  return str;
}
