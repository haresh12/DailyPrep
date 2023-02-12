/*
    LRU Cache : 

    Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

     Implement the LRUCache class:

     LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
     int get(int key) Return the value of the key if the key exists, otherwise return -1.
     void put(int key, int value) Update the value of the key if the key exists. 
     Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, 
     evict the least recently used key.
     The functions get and put must each run in O(1) average time complexity.


     Example : Input
    ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
    [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
    Output
    [null, null, null, 1, null, -1, null, -1, 3, 4]

     Explanation
      LRUCache lRUCache = new LRUCache(2);
      LRUCache.put(1, 1); // cache is {1=1}
      lRUCache.put(2, 2); // cache is {1=1, 2=2}
      lRUCache.get(1);    // return 1
      lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
      lRUCache.get(2);    // returns -1 (not found)
      lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
      lRUCache.get(1);    // return -1 (not found)
      lRUCache.get(3);    // return 3
      lRUCache.get(4);    // return 4
*/

/*
   SEE IS MOST VIDEOS SOLUTION IS USING DOUBLY LINKED LIST BUT IN JS WE CAN DO IT USING MAP ALSO BUT WITH  MAP ITS HARD TO UNDERSTAND THE CODE 
   SO HERE I WILL DO IT WITH MAP ON NEXT SUNDAY I CAN DO AGAIN THIS QUESTION WITHOUT ANY HELP THEN WE WILL GO WITH THIS SOLUTION OF MAP ELSE
   LEARN DOUBLY LINKED LIST :
   https://www.youtube.com/watch?v=xDEuM5qa0zg (VIDEO WITH DOUBLY LIST)
*/

// // IN MAP THE ORDER OF KEY IN WHICH THEY ARE INSERTED IS MAINTAINED
// function mapLearn() {
//   let map = new Map();
//   map.set(55, "1");
//   map.set(15, "1");
//   map.set(655, "1");
//   map.set(155, "1");
//   map.set(13, "1");
//   console.log(map.keys().next().value); // THIS IS WHERE I NEED TO FOCUS MORE THIS WILL SIMPLY RETURN FIRST INSERTED KEY
// }
// mapLearn();

/*
   EXPLANATION : 
Constructor: The constructor method initializes the LRU Cache by setting the capacity property to the given 
capacity and creating an empty Map object to store the cache data.

get method: The get method retrieves the value associated with a given key. If the key is not found in the cache (i.e., the cache.has(key) 
Method returns false), the method returns -1. Otherwise, it retrieves the value associated with the key using the cache.get(key) method.
It then updates the key's position in the cache so that it is considered the most recently used by removing the 
key-value pair using cache.delete(key) and re-inserting it using cache.set(key, value).

put method: The put method adds a new key-value pair to the cache. If the key already exists in the cache, 
it updates the key's position in the cache by removing the key-value pair using cache.delete(key) and 
re-inserting it using cache.set(key, value). If the cache has reached its maximum capacity (i.e., cache.size > this.capacity),
it removes the least recently used item from the cache by calling cache.delete(this.cache.keys().next().value). 
This line of code works as follows: this.cache.keys() returns an iterator for the keys in the cache, in the order 
they were added; next().value retrieves the next key in the iterator, which is the first (least recently used) 
Key in the cache; this.cache.delete(...) removes the key-value pair associated with the key from the cache.
That's it! This implementation of LRU Cache uses a Map object to store the cache data and provides constant 
time get and put operations, making it an efficient data structure for caching.
*/

/*
   Time and Space : 

The time complexity of the get and put operations in this implementation of LRU Cache are both O(1) on average.
This is because the Map data structure in JavaScript provides constant time get and set operations.

The space complexity of this implementation is O(n), where n is the capacity of the cache.
This is because the cache stores at most n key-value pairs, and the size of the cache is proportional to n.
*/
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.catch = new Map(); // try to use more often this rather then {} this
  }
  // Now understand this one line that whatever we are going to do ahead in this problem is only possible because
  // map data structure preserves then order of key in which they are inserted

  get(key) {
    // First thing first do we even have this key in map if no then return -1
    if (!this.catch.has(key)) return -1;

    // Now what if we have key then
    // First delete that from map and add again  WHY THIS BECAUSE WHEN YOU GET THE KEY IT MEANS ITS THE RECENTLY USED ONE AND IF IT IS
    // MOST RECENTLY USED ONE AND THIS SHOULD BE DELETED LAST AND THIS WILL HAPPEN EVERY TIME WHEN YOU USE GET AND THIS WAY MOST RECENTLY
    // USED ARE GOING TO AT LAST AND LEAST RECENTLY USED ARE GOING TO BE FIRST

    let value = this.catch.get(key);
    this.catch.delete(key);
    this.catch.set(key, value); // this way now it will go to last in map as we just added

    return value;
  }

  put(key, value) {
    // here also first thing first we have that key then delete it and add it again because of same above reason as now it become most recently
    // visited key
    if (this.catch.has(key)) {
      this.catch.delete(key);
    }
    // now see we are just adding everything without even checking that do we have capacity and thats not an issue because we will handle that
    // in next step
    this.catch.set(key, value);

    // Now add to kr diya sb lets check if capacity se jyada items hai map me then remove first one because vhi least visited hai and last
    // item most visited hoti he
    if (this.catch.size() > this.capacity) {
      this.catch.delete(this.catch.keys().next().value); // THIS IS HOW YOU REMOVE FIRST ITEM BHAI KEYS USE KRNA HE ENTRIES ME VALUE MILTI HE KEYS ME KEY
    }
  }
}
