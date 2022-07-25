function ValidAnagram242(s,t){
  if(s.length !== t.length) return false
  let sMap = {};
  let tMap ={};
  for(let i = 0 ; i < s.length ; i++){
      if(s[i] in sMap){
        sMap[s[i]]+=1;
      }else{
        sMap[s[i]] = 1;
      }
  }
  for(let i = 0 ; i < t.length ; i++){
    if(t[i] in tMap){
      tMap[t[i]]+=1;
    }else{
      tMap[t[i]] = 1;
    } 
}
 
 let sArr = Object.keys(sMap)
 let rArr = Object.keys(tMap)
 if(sArr.length !== rArr.length) return false
 for(let i = 0 ; i < rArr.length ; i++){
  if(sMap[rArr[i]] !== tMap[rArr[i]]){
    return false;
  }
 }
 return true;
}

console.log(ValidAnagram242('car','rac'));