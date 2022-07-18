// Before we understand array we need to understand what is data structures so in this intro 
// we are going to talk about that only.

/* Data structures are ways to store the data and in different programing language we have
   different  data structure to store the data according to our needs or requirement.
   same thing we do at home like in school bages we store ours books and floder we store
   our files and in fridge we store fruites and all. And that is because those things are
   good at storing specific type of things. Same way when we do programing we have different
   data structure to choose on according to our requirement and needs.
 */

/*
  It would be good if we understand how our computer stores the data and also understand 
  below few words.
  1. RAM 
  2. Persistant storage (slower the RAM): 
  3. Catch 

  These all terms are releated to storage in our computer get more idea from wiki you will love it
*/

/*
   Now there are some comman operation that we are going to see in all of the data structure.
   1. insert : how easliy we can insert data
   2. delete : how easliy we can delete data
   3. traversal : looping througt the data
   4. searching : scan entire data and search for specific data
   5. sorting 
   6. Access

   Most of the time above are the 6 parameters that we are going to look for all the problems
   and will decide which data strucuture to use .

   Common Data Structure Operations : https://www.bigocheatsheet.com  good to look atleast once
*/

/*
  Arrays :  Array is most widly used data structure which is like list and array stores
            data in ordered like one after another. (Contigous memory)
          
    Big o notation for different array operations.
    1. Push :O(1)  //  it always add item to last. 
    2. Pop : O(1)  //  it always remove item from last
    3. Insert : O(n)  // We are adding in between so we need to move other items
    4. Delete : O(n) // We need to shift all other item to in place of deleted item index.
    5. Access : O(1) // We know the index thats why we can directly access that and it fast operation.
    6. Search : O(n)  // We need to traverse entire array to search the item.
    
    These are the basic operation that we gone have in most of other data structures. We will
    build these method by our self and will understand Big o() for all.
*/

// Different methods on array with there Big(O) notations 

const strings = ['a','b','c','d'];

strings[2] // Access item from array its O(1) because we know the index which we want to access
strings.push('e'); // Added at last item of arrary and Big(o) will be O(1)

strings.pop(); // Remove last item of array and Big(o) will be O(1).

strings.unshift('1'); // Now this one is intersting as with unshift we are adding as first
// item and because of that our new array will be ['1','a','b','c','d'] and as we can see
// we have to move all other items to add item at first index and thats why Big is O(n).

strings.shift(); // The way unshift is adding item at first place the shift method is used
// to remove item from first place so if we apply this method to our original array then
// new array will be like ['b','c','d'] and as we are removing item from first place we 
// need to first all other indices and thats why Big O will be O(n)

strings.slice(2,0,'middle'); 
/* This method is used to add item in middle or any specific index we want to add the data.
   If we want to add data in second index just need to pass that index as first parameter
   and value as last parameter. Second parameter its for delete count we can ignore it for
   now but basically usefull when we want to delete some values.
   Big O here will be O(n) becasue we need to move other indices after added this value at
   index 2 
*/

// STATIC AND DYNAMIC ARRAY (TWO TYPE OF ARRAY)

/*
   This is most important topic to understand we basically have two types of array static
   and dynamic array so basically in static array we specify the size of array before even
   we add any items into that.
   // Example of java language 
   int a[] = new int[50]; // this will create 50 block of memory and the max number of item we can add into this 
   array is 50 which is basically good when you know how many max item you will have in your array.

   But languages like javascript only have dynamic array where we don't need to worry about memory management
   but machine will take care of it or we can say language will take care of it.

   Default array size in javascript is 10 so if you try to add 11th item in array then javascript will create 
   new array with size 20 (USELLY DOUBLE THE SIZE) and will copy previous array and then will add 11th item
   into that new array. But js handle all this stuff in background and we don't have to worry much about it but
   it always good to know about stuff.  
*/
