function validPalindromLeetcode125(string){
 // first thing we need to remove all non-alphabitic value
 string = string.replace(/[^A-Za-z0-9]/g, '') // YE KESE SIKHE GE
 return [...string].reverse().join('').toLowerCase() === string.toLowerCase(); // because we don't have reverse method in string and also string is imutable in js
}

console.log("validPalindromLeetcode125",validPalindromLeetcode125('A man, a plan, a canal: Panama'))