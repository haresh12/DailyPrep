
// HARD DO AS MANY AS TIME YOU UNDERSTAND
class NestedListIterator {

  constructor(nestedList){
    this.stack = [nestedList]
  }

  hasNext(){
    while (Array.isArray(this.stack[this.stack.length - 1])) {
      let top = this.stack.pop()
      for (let i = top.length - 1; i >= 0; i--)
        this.stack.push(top[i].isInteger() ? top[i] : top[i].getList())
    }
    return !!this.stack.length
  }
  
  next(){
    this.hasNext()
    return this.stack.pop().getInteger()
  }
}

const data =  new NestedListIterator([[1,[4,[6]]]]);

console.log(data.stack)