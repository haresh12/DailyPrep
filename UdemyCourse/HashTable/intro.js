
/*
  HasTable : (HashMap , Map ,Dictionary all this names in other languages) is one type of data strucuture
  where we can store values in key- value pair.
  HashTables are unorder. 
  Objects in javascript are example of hashtable.
  Example of storing value in hashtable. 
  let user = {} ; // blank obj
  user.name = 'Haresh'
  user.lastname = 'Lakhwani'
  Now in user object name and lastname will be the key and Haresh and Lakhwani will be the value
  for those specific keys.

  Now where this key will be stored it will be decided by hash functions which each lanugage has
  prebuild so whenever you try to add new key then that key is passed in hash function and hash
  function like MD5 SHA1 and then it generate key and then that key get converted into address 
  where finally our object {key , value } both get stored.

  Normally these  hash functions are built with very optimal solution so we don't need to worry
  about there time complexity or basically we can say it O(1)

  Now because of all above advantages in Hashtable most of operation like :

    Insert : O(1)
    Delete : O(1)
    Search : O(1)
    Access : O(1)
  
 All this operations are O(1) ; // Mainly because the are unorder so we don't need to worry shifting index 
 
 But there is one catch IN HASHTABLE WE HAVE ONE PROBLEM CALLED collision AND BECAUSE OF THAT occasionally
 all these operation may become O(n)

 // TO READ MORE ABOUT COLLISION : https://en.wikipedia.org/wiki/Hash_collision 

  Now specific to javascript we have two things to learn.

  const map = new Map(); 
   // Maps also store data in key-value pair but they also maintain the order
   // Maps also allow us to store different types of keys when in object we can only store string keys.
  const set = new Set();
  // Set() stores only keys. 
*/