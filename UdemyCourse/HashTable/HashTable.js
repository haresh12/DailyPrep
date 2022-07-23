class HashTable {

  constructor(size){
    this.data = new Array(size);
    // [[grapes,1000],['mango',5],[key,value]]
  }

  _hash(key) {
    let hash = 0;
    for (let i =0; i < key.length; i++){
        hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash;
  }

  // This is the hecky solution but this is only comes in mind first
  // Used to set value in hashtable
  set(key, value){
   if(!key || !value) return;
   let currentItem = [key,value]
   const index  = this._hash(key);
   if(this.data[index]){
    if(typeof this.data[index][0] === 'string'){
      const item = this.data[index];
      const newArray = [item,currentItem]
      this.data[index] = newArray
    }else{
      this.data[index].push(currentItem)
    }
   }else{
      this.data[index] = currentItem;
   }
  }
  // Used to get value for specific key. 
  // In most cased time complexity is going be O(1) but in case of collision its going to O(n)
  get(key){
    if(!key) return;
    let index = this._hash(key)
    if(this.data[index]){
      if(typeof this.data[index][0] === 'string'){
         return this.data[index][1]
      }else{
        for(let i=0 ; i <this.data[index].length ; i++){
           if(this.data[index][i][0] === key){
            return this.data[index][i][1];
           }else{
            return 'Invalid key'
           }
        }
      }
    }
  } 

  // This keys will not be orderded because of the _hash function we have so we won't get 
  // same order in which we have are adding the data
  // key function with and without collision.
  // Time complexity O(n^2) in worst case.
  keys(){
    let newArray = [];
    for(let i = 0 ; i < this.data.length ; i++){
     if(this.data[i] && typeof this.data[i][0] === 'string' ){
       newArray.push(this.data[i][0]);
     }else if(this.data[i]){
      for(let j = 0 ; j < this.data[i].length ; j++){
           newArray.push(this.data[i][j][0]);
      }
     }
    }
    return newArray;
  }
}
const table = new HashTable(2);
table.set('2',11);
table.set('2412',12);
table.set('2124',122);
table.set('24112',13);
table.set('231',1313);
table.set('11121',1433);
table.set('1121',113);
table.set('121',1311);
table.set('21',141);
// console.log(table.get('2'))
console.log(table.keys().length)


