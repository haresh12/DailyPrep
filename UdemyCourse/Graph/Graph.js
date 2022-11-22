class Edge {
  constructor(src,nbr,weight){
    this.src = src;
    this.nbr = nbr;
    this.weight = weight;
  }
}

let vertices = 7;
// THIS WAY TO REPRESENT GRAPH IS KNOWN AS ADJANCY ARRAY
let graph = [];
let visited = new Array(7).fill(false);

for(let i = 0 ; i < vertices ; i++){
   graph[i] = [];
}

// Vertices 0 connection
graph[0].push(new Edge(0,1,12));
graph[0].push(new Edge(0,3,30));

// Vertices 1 connection
graph[1].push(new Edge(1,0,12));
graph[1].push(new Edge(1,2,10));


// Vertices 2 connection
graph[2].push(new Edge(2,1,10));
graph[2].push(new Edge(2,3,13));
graph[2].push(new Edge(2,5,11));

// Vertices 3 connection
graph[3].push(new Edge(3,0,30));
graph[3].push(new Edge(3,2,13));
graph[3].push(new Edge(3,4,17)); // Break connection between 3 4 and 4 3 to get different connected graph

// Vertices 4 connection
graph[4].push(new Edge(4,6,10));
graph[4].push(new Edge(4,3,17));
graph[4].push(new Edge(4,5,1)); 

// Vertices 5 connection
graph[5].push(new Edge(5,4,1));
graph[5].push(new Edge(5,6,2));
graph[5].push(new Edge(5,2,11));

// Vertices 6 connection
graph[6].push(new Edge(6,5,2));
graph[6].push(new Edge(6,4,10));

// console.log('Has path ', hasPath(graph,0,6,visited));
visited = new Array(7).fill(false);
// Add src as path so far as default
console.log('Print all paths ', printAllPath(graph,0,6,visited,0+''))

/*
  This question has same as flood fill question here importent thing to understand
  is why we need is visited array because 0 is nbr of 1 and 1 is nbr of 0 so first
  0 is going to call its nbr 1 and then 1 is going to call its nbr 0 and then again
  1 and then again 0 and this way we will be on endless loop thats why as soon as 0
  is visited we will make it true and we will only visit to nbr that are not visited
*/
function hasPath(graph,src,des,visited){
  if(src === des){
    return true;
  }
  // Marking my self visited so next time i won't get call again DO DRY ELSE ITS JUST RATA FICATION
  visited[src] = true;

  // Now i will ask my all child that from there is thier any way for destination 
  let edges = graph[src]
  for(let i =  0 ; i < edges.length ; i++){
    // visited only to your nbr if it is not visted
    if(!visited[edges[i].nbr]){
      // See phele src me 0 pass hua then ab edges[i].nbr means 1 then 1 ka nbr so on
      let nbrHasPath = hasPath(graph,edges[i].nbr,des,visited)
      if(nbrHasPath){
        return true;
      }
    }
  }
  return false
}

/*
   This questions are easy with code but dry run can only give you real idea NO MORE EXCUSE
   Do dry run for atleast two trees.
*/
function printAllPath(graph,src,des,visited,pathSoFar){
  if(src === des){
    console.log(pathSoFar);
    return;
  }
  visited[src] = true;
  let edges = graph[src];
  for(let i = 0 ; i < edges.length ; i++){
    if(!visited[edges[i].nbr]){
       printAllPath(graph,edges[i].nbr,des,visited,pathSoFar+edges[i].nbr)
    }
  }

// Just do dry run and see how this one line of code can help us to print all the paths and what happend if we don't have
// this one line of code
  visited[src] = false;
}

/*
  Here in this question we need to print the shortest path in terms of weight 
  The entire logic is same as printAllPath just need to use weight also
*/
let shortestPath;
let shortestPathWeight = Number.MAX_SAFE_INTEGER;
function printShortestPath(graph,src,des,visited,pathSoFar,weightSoFar){
if(src === des){
  if(weightSoFar < shortestPathWeight){
    shortestPath = pathSoFar;
    shortestPathWeight = weightSoFar;
  }
  return;
}
 visited[src] = true;
 let edges = graph[src]; // it will give you edges in that specific source in simple 0 ke sab nbr then 1 ke then 2 ke so on

 for(let i = 0 ; i < edges.length ; i++){
  if(!visited[edges[i].nbr]){
     printShortestPath(graph,edges[i].nbr,des,visited,pathSoFar+edges[i].nbr,weightSoFar + edges[i].weight)
  }
 }
 visited[src] = false;
}
visited = new Array(7).fill(false)
// console.log('Shortest path in graph ',printShortestPath(graph,0,6,visited,0+'',0) , shortestPath + "@" + shortestPathWeight)

/*
   Same as shortest path find the longest path in terms of edges
*/

let longestPath;
let longestPathWeight = Number.MIN_SAFE_INTEGER;
function printLongestestPath(graph,src,des,visited,pathSoFar,weightSoFar){
if(src === des){
  if(weightSoFar > longestPathWeight){
    longestPath = pathSoFar;
    longestPathWeight = weightSoFar;
  }
  return;
}
 visited[src] = true;
 let edges = graph[src];

 for(let i = 0 ; i < edges.length ; i++){
  if(!visited[edges[i].nbr]){
    printLongestestPath(graph,edges[i].nbr,des,visited,pathSoFar+edges[i].nbr,weightSoFar + edges[i].weight)
  }
 }
 visited[src] = false;
}
visited = new Array(7).fill(false)
// console.log('Longest path in graph ',printLongestestPath(graph,0,6,visited,0+'',0) , longestPath + "@" + longestPathWeight  )


/*
  Find Cail : What Cail means is you will have given one critria and you just need to find just larger
  number then that critria.

  Example : c = 42 find Cail of 42 from arr = [39,67,43,91,45,49] so answer will be 43 because its just
  larger then 42. IN SHORT UNDERSTAND LIKE THIS WE NEED TO FIND MIN FROM THAT ARRAY BUT CRITARIA IS THAT 
  MIN SHOULD BE BIGGER THEN 42. Just larger is just confustion here at last we need to find is min just
  with one critaria
*/

let critaria = 60; // just larger then 60
let cailPath = '';
let cailPathWeight = Number.MAX_SAFE_INTEGER; // SOCHO SOCHO why this
visited = new Array(7).fill(false);
function printCailPath(graph,src,des,visited,pathSoFar,weigthSoFar,critaria){
if(src ===  des){
  if(weigthSoFar > critaria && weigthSoFar < cailPathWeight){
    cailPathWeight = weigthSoFar;
    cailPath = pathSoFar
  }
  return;
}
visited[src] = true;
let edges = graph[src];

for(let i = 0 ; i < edges.length ; i++){
  if(!visited[edges[i].nbr]){
    printCailPath(graph,edges[i].nbr,des,visited,pathSoFar+edges[i].nbr,weigthSoFar+edges[i].weight,critaria)
  }
}
visited[src] = false;
}
// console.log('Cail path in graph ',printCailPath(graph,0,6,visited,0+'',0,55) , cailPath + "@" + cailPathWeight )


/*
  Floor : Cail ka ulta no explaintaion need just smaller. Agar 50 critaria hai to just smaller find
  krna hai means array me use jo small ho in short max from array but with craitria like is should
  we less then critaria
*/

let floorCritria = 55;
let floorPath = '';
let floorPathWeight = Number.MIN_SAFE_INTEGER; // SOCHO SOCHO why this
visited = new Array(7).fill(false);
function printFloorPath(graph,src,des,visited,pathSoFar,weigthSoFar,critaria){
if(src ===  des){
  if(weigthSoFar < critaria && weigthSoFar > floorPathWeight){
    floorPathWeight = weigthSoFar;
    floorPath = pathSoFar
  }
  return;
}
visited[src] = true;
let edges = graph[src];

for(let i = 0 ; i < edges.length ; i++){
  if(!visited[edges[i].nbr]){
    printFloorPath(graph,edges[i].nbr,des,visited,pathSoFar+edges[i].nbr,weigthSoFar+edges[i].weight,critaria)
  }
}
visited[src] = false;
}
// console.log('Floor path in graph ',printFloorPath(graph,0,6,visited,0+'',0,floorCritria) , floorPath + "@" + floorPathWeight )

// REGARDING FINDING K LARGEST WEIGHT WE WILL DO AFTER GETTING IDEA ABOUR PRIORITY QUEUE IN JS.


visited = new Array(7).fill(false);
// console.log(getConnectedGraph(graph,visited))

/*
  Understand there won't be always one graph where all the edges are connected with each other
  there might be possible we have 0 to 6 vertices where 0 1 2 3 are connected with each other
  and 4 5 6 are connected with each other these way you see with these 7 vertices we have two
  different graphs 0123 and 456 and these is what these question about like find all connected
  graphs.

  To do that you have to give opportunity to each verties to explore all the possible connection
  they have

  We need to return Array of array : [[0,1,2,3], [4,5,6]] like this. 
*/
function getConnectedGraph(graph,visited){
 let connectedGraphs = [];
  // 0 to 6 verticies
 for(let vertice = 0 ; vertice < vertices ; vertice++){
  if(visited[vertice] === false){
    let currentGraph = [];
    // Only come inside if that vertice is not already vistited
    drawTree(graph,vertice,visited,currentGraph);
    connectedGraphs.push(currentGraph);
  }
 }
 return connectedGraphs
}

function drawTree(graph,src,visited,arr){
// As soon as you come inside do visited true so next time if we have same src then it won't get visited
visited[src] = true;
// Now as you are visiting do a thing here add this src to current arr 
arr.push(src)

// Now for this specific src give it chance to explore path with its nbr
 graph[src].forEach(edge => {
  if(visited[edge.nbr] === false){
    drawTree(graph,edge.nbr,visited,arr)
  }    
 });
}

/*
   What this question means ? So simply we need to check that all the vertices of graph are connected
   with each other and see if in getconnected question that we did before this on if lenght of array
   is one means all the vertices are connected with each other else we would you got different connected
   graph.
*/
visited = new Array(7).fill(false);
function isGraphConnected(){
  return getConnectedGraph(graph,visited).length === 1;
}
// console.log(isGraphConnected(graph,visited))


// NOT DONE YET SOMETHING IS MISSING 
/*
   Count number of islands : One of the most important question in graph till now.
   First thing first here we have given 2D array in input which is totally different then
   other question that we did. SO WHERE IS EDGES FOR THIS QUESTION AND WHAT ARE THE VERTICES.

   Ans : All the data points that we have in 2d array are vertices so till now we were accessing
   vertices like arr[i] NOW IT WOULD BE LIKE ARR[I][J] SO REALLY NOT THAT BIG DEAL BECAUSE AT THE
   END WETHER ITS ARR[I] IN 1D ARRAY OR ARR[I][J] IN 2D ARRAY ITS ONLY VERTICE.

   What about edges in this question?

   This one is incredible question because we don't have any edges given as data but in question it
   says that each data is connected with its LEFT , RIGHT , TOP , BOTTOM SO WE CAN SAY THE ALL THE
   DATA POINTS HAVE 4 EDGES i + 1 , i -  1 , j + 1 , j - 1.

   Now next what we need to solve in this so we need to find all connected islands and return count
   of it . HERE DATA WITH 0 ARE ISLAND AND 1 WITH WATER IN THIS ENITRE QUESTION WE REALLY DON'T CARE
   ABOUT WATER SO WHEN EVERY WITH OUR RECURSION CALL IF WE REACH TO WATER WE WILL JUST RETURN FROM 
   THERE.
*/

 // For this question visited will be 2d array not 1d.
 let tdArray = [["1","1","0","0","0"],
                ["1","1","0","0","0"],
                ["0","0","1","0","0"],
                ["0","0","0","1","1"]]
 
 // ALWAYS CREATE THIS WAY 
const arr2d = [...Array(tdArray.length)].map(() => Array(tdArray[0].length).fill(false))
// NOT THIS WAY
// let tdVisited = new Array(tdArray.length).fill(new Array(tdArray[0].length).fill(false)); //  NEVER DO THIS

 /*
    This is totally similor to drawtree thing that we did in past question just give each 
    vertice chance go to all possible connected lends it can go
 */
 function getIsLandCount(graph,visited){
   let  count =  0 ;
   for(let i = 0 ; i < graph.length ; i++){
      for(let j = 0 ; j < graph[i].length ; j++){
        // Agar land ho or abi tak visit na hua ho then only go ahead
        if(graph[i][j] === '0' && visited[i][j] === false){
          //UNDERSTAND IN 2D ARRAY FOR SRC WE NEED TO PASS BOTH I AND J. (Because this is how we access data in 2d array)
          drawTreeAndIncreaseCount(graph,i,j,visited)  
          count++;
        }
      }
   }
   return count;
 }

function drawTreeAndIncreaseCount(graph,i,j,visited){
  // Smart base case
  // See this type of base case is not a new thing for us we already did in many question in recursion
  if(i < 0 || j < 0 || i >= graph.length || j >= graph[0].length || graph[i][j] === '1' || visited[i][j] === true){
    // in all this cases just return
    return;
  }
  visited[i][j] = true;
  // First thing first if you reached here means neither you are already visited nor you are water
  // So first make your self visted so don't get visited again

  // Now in this question for edges call we don't need for loop because all vertices have same number
  // of edges like left right top and bottom.

  // Stupid calls can we be handle with smart base case and thats what we do here
  drawTreeAndIncreaseCount(graph,i-1,j,visited);
  drawTreeAndIncreaseCount(graph,i,j+1,visited);
  drawTreeAndIncreaseCount(graph,i,j-1,visited);
  drawTreeAndIncreaseCount(graph,i+1,j,visited);
}

// console.log('GET ISLEND COUNT ',getIsLandCount(tdArray,arr2d))


// let tdVisited = new Array(tdArray.length).fill(new Array(tdArray[0].length).fill(false)); //  NEVER DO THIS
// tdVisited[0][0]= true
// console.log(tdVisited)

// // OUT PUT  WEIRD MEAND REALLY WEIRD CHANGING AT 0 0 EFFECTING AT 1 0 2 0 3 0
// [
//   [ true, false, false, false, false ],
//   [ true, false, false, false, false ],
//   [ true, false, false, false, false ],
//   [ true, false, false, false, false ]
// ]


/*
   Perfect friend : Need to find total number of pair from friend such a way that each friend 
   belongs from different club

   This question is totally depends on get graph component 
   Step first all graph component like this : [[0,1],[2,3],[4,5,6]]
   Now you got 3 components so best way to get pair is like take
   component 1 and 2 first and see all possible pair like 02 03 12 13 
   same way do for 23 then 31. HO GYA
*/

visited = new Array(vertices).fill(false)
// Good one done by self
function perfectFriend(graph,visited){
 let component = getConnectedGraph(graph,visited);
 let pairs = [];
  for(let i = 0 ; i < component.length ; i++){
    for(let j = i+1 ; j < component.length ; j++){
       createPairs(component[i],component[j],pairs)
    } 
  }
  return pairs;
}

function createPairs(arr1,arr2,pairs){
 for(let i = 0 ; i < arr1.length ; i++){
  for(let j = 0 ; j < arr2.length ; j++){
    pairs.push(`${arr1[i]},${arr2[j]}`)
  }
 }
}
// console.log('Pair of perfect friend',perfectFriend(graph,visited).length);



visited = new Array(7).fill(false)
/*
   What is hamiltainPath : You start with any source and visit all the vertices without visiting
   same vertices example source is 0 and from there you visited 123456 so this is hamiltain path.

   Regarding hamiltainCycle if path as there is directly connection between src and last vertice
   of the the path then it hamiltaincyle.

   Example : Path 0123456 src 0 this is hamiltainpath not cycle because there is no direct connection
   between 0 AND 6 agar hota to hmare pass input ye 0 to 6 or 6 to 0 ye dono edges hoti.

   Another example : Path 0125643 this is hamiltaincycle because we have direct connection between 0 and
   3. HOW CAN WE CHECK THIS KIND OF THING SIMPLE YARR LAST VALE KE neighbour CHECK KRE AND IF USKE 
      NEIGHBOUR ME SOURCE HE MEANS WE HAVE DIRECT CONNECTION BETWEEN THEN
*/
function hamailtainPathAndCycle(graph,src,visited,pathSoFar){
if(pathSoFar.length === vertices){
 let lastSrc = pathSoFar[pathSoFar.length-1];
 let isCycle = false;
 let edges = graph[lastSrc]
 for(let i = 0 ; i < edges.length ; i++){
  if(edges[i].nbr == pathSoFar[0]){
    isCycle= true; // becasue orignal src and last verice has direct connection
  }
 }
 if(isCycle){
  console.log("I AM HAMILTAIN CYCLE ",pathSoFar);
 }else{
  console.log("I AM HAMILTAIN PATH",pathSoFar);
 }
 return
}
visited[src] = true;
  let edges = graph[src];
  for(let i = 0 ; i < edges.length ; i++){
     if(visited[edges[i].nbr] === false){
       hamailtainPathAndCycle(graph,edges[i].nbr,visited,pathSoFar+edges[i].nbr);
     }
  }
  visited[src]=false;
}
hamailtainPathAndCycle(graph,0,visited,0);


/* 
TILL NOW ALL THE QUESTION WAS RELEATED DFS WITH GRAPHS LIKE GOING DEEP IN TO RECURSION BUT
NOW WE WILL DO BFS IN GRAPH.

For BFS IN GRAPH REMEMBER THIS ALOGORITHM : Remove , Mark* , Work , Add Nbr*.
Where * is for if it is already marked then just continue means go to next Queue item and perfrom RMWA steps.
Also same as other problem here also add nbr only if the are not added.
*/

class Pair{
  constructor(vertice,psf){
    this.vertice=vertice;
    this.psf=psf;
  }
}

visited = new Array(vertices).fill(false);
function bfs(graph,src,visited){
 let queue = [];
 let pair = new Pair(src,src+''); // Initailly we need to add src and also in path so far src.
 queue.push(pair);
 
 // After adding initial item algoritm will start SEE IT MOSTLY SAME AS REMOVE PRINT ADD CHILDREN AS WE HAD IN TREES.

 while(queue.length > 0){
  // Step first remove the item from queue
  let remove = queue.shift(); // To remove first item  if use pop then it will remove last item

  // Check if current item is already visited if yes then on further steps need to taken for this item
  if(visited[remove.vertice] ===  true){
    continue;
  }

  // BHAI AGAR VISITED NA HA NA UPER KE STEP ME TO VISITED KRNA BE PDTA HAI USKE BAAD VRNA ENDLESS LOOP ME CHLE JAOGE LIFE KI TRHA
  visited[remove.vertice] = true

  // Do work (Here only print current path so far)
  console.log(remove.vertice + '@' + remove.psf);

  // At last add nbr only if then are not added.

  let edges = graph[remove.vertice];
  
  edges.forEach(edge => {
   if(visited[edge.nbr] === false){
     let newPair = new Pair(edge.nbr,remove.psf+edge.nbr); // Path so far me current nbr add kr do if it is not added
     queue.push(newPair);
   } 
  });
 }
}

console.log('BFS in graph ',bfs(graph,2,visited))

/*
   GRAPH IS CYCLIC WHEN FROM SINGLE VERTICE WE ARE ABLE TO GO TO MULIPLE POINTS EXAMPLE FOR THAT IS 456 0123 IN THIS GRAPH
   To be real we are going to use eniter above bfs logic in this question WITH ONLY ONE CHANGE SO IN BFS FIRST PROBLEM INSIDE
   QUEUE IF VERTICE IS ALREADY VISITED THEN JUST RETURN TRUE FROM THERE BECAUSE THATS THE PROOF THAT GRAPH IS CYCLIC BECAUSE
   VERICE KE PASS JANE KE DO RASTE HAI IS LIYE HE VISITED TRUE MIL RHA HE.

   Understand here one thing what if you get graph like 01 23 and 456 like in different component as we know that all graph points
   are not always connected. SO THATS WHY ONLY DIFFERANCE BETWEEN ABOVE QUESTION AND THIS ONE IS HERE WE WILL GIVE CHANCE TO EACH VERTICE
   ONLY TO SOURCE.

   ALWAYS WHENEVER IT COMES TO GRAPH QUESTION THING ABOUT GIVING CHANCE TO ALL THE VERTICES BECAUSE
   IT MAY BE POSSIBLE THAT WE GET GRAPH WHERE ALL EDGES ARE NOT CONNECTED ACTUALLY.

*/
visited = new Array(vertices).fill(false);
function graphCyclic(graph,visited){

  //This is importent giving chance to all the vertices and as soon as we get single isCyclic graph then just return
  for(let v = 0 ; v < vertices ; v++){
    if(visited[v] === false){
      const isCycle =  isGraphIsCyclic(graph,v,visited);
      if(isCycle)return true
    }
  }
  return false
}

function isGraphIsCyclic(graph,src,visited){
  let queue = [];
  let pair = new Pair(src,src+'');
  queue.push(pair);

  // Now same alog REMOVE MARK* WORK ADD*
   while(queue.length > 0){
    let remove = queue.shift();
    if(visited[remove.vertice]){
      return true; // This one line is answer of everything in this question
    }
    visited[remove.vertice] = true;
    let edges = graph[remove.vertice];
    edges.forEach(edge => {
     if(visited[edge.nbr] === false){
      let newPair = new Pair(edge.nbr,src+edge.nbr);
      queue.push(newPair);
     } 
    });
   }
}

console.log('Is graph cyclic' ,graphCyclic(graph,visited) )

/*
    Is graph is Bipartite : No explaination just watch video one more time thats it
    https://www.youtube.com/watch?v=ZBhZ1DXGrhA&list=PL-Jc9J83PIiHfqDcLZMcO9SsUDY4S3a-v&index=13
*/

class BiaPair {
  constructor(vertice,currentlevel){
    this.vertice = vertice;
    this.currentlevel = currentlevel;
  }
}
visited = new Array(vertices).fill(false);
let prevVisitedLevel = new Array(vertices).fill(-1); // where -1 represent that its still not visited
function isGraphBipartite(graph,visited){

  for(let v = 0 ; v < vertices ; v++){
    if(visited[v] === false){
     const bipartite =  checkIfBipartite(graph,v,visited)
     console.log(bipartite)
     if(!bipartite){
      return false; // From graph component even if singl egraph component is not bipartite then entire graph won't be conciderd as bipartite
     }
    }
  }
  return true;
}

function checkIfBipartite(graph,src,visited){
 let queue = [];

 let btPair = new BiaPair(src,0); // where -1 is prev level and 0 is current

 queue.push(btPair);
 
 while(queue.length > 0){
  let remove = queue.shift();
  if(visited[remove.vertice]){
    if(prevVisitedLevel[remove.vertice] !== remove.currentlevel){
      console.log("in")
      return false; 
    }else{
      continue;
    }
  }else{
    visited[remove.vertice] = true;
    prevVisitedLevel[remove.vertice] = remove.currentlevel;
  }
  let edges = graph[remove.vertice];
  edges.forEach(edge => {
    if(visited[edge.nbr] === false){
      let newPair = new BiaPair(edge.nbr,remove.currentlevel+1); // prevlevel = currentlevel and currentlevel = currentlevel+1;
      queue.push(newPair)
    }
  });
 }
 return true
}

console.log('Check is graph is bipartite ',isGraphBipartite(graph,visited))


/*
  Spread infaction : In this question you will get time t and we need to find that in given time how many people will get infected.
*/

class SPair{
  constructor(vertice,level){
    this.vertice = vertice;
    this.level = level;
  }
}

visited = new Array(vertices).fill(false);
function spreadInfaction(graph,src,visited,time){
 let queue = [];
 let pair = new SPair(src,1);
 queue.push(pair);
 let count = 0;
 while(queue.length > 0){
  
  let remove = queue.shift();

  if(visited[remove.vertice] === true){
    continue;
  }
  visited[remove.vertice] = true;
  if(remove.level > time){
    break;
  }
  count++;
  
  let edges = graph[remove.vertice]
  edges.forEach(edge => {
    if(visited[edge.nbr] === false){
      let newPair = new SPair(edge.nbr,remove.level+1);
      queue.push(newPair);
    }
  });
 }
 return count
}

console.log('Spread infaction ',spreadInfaction(graph,0,visited,3));


/*
   ONE OF THE MOST IMPORTENT ALGORITHEM IN GRAPH : DIJKSTRA ALGORITHM
   Find shortest path in terms of weight
   OK THIS QUESTION IS USING PRIORITY QUEUE SO WE WILL DO IT LATER BUT UNDERSTAND WE HAVE ALREADY DONE SHORTEST PATH THING WITH DFS
   THEN DON'T KNOW WHY THIS ONE IS IMPORTENT AND ALSO FAMOUS

   I THING PREVIOUSLY WHEN WE DID SHORTEST PATH WE DFS THEN TO FIND IT WE HAD TO COMPARE IT WILL ALL AVALAIBLE PATH BUT IN CASE OF 
   DIJKSTRA ALGORITHEM WE ARE USING PRIORITY QUEUE AND BECAUSE OF THE WE REALLY DON'T HAVE TO VISITED ALL PATH SO MAIN DIFFERENCE IS
   TIME COMPLEXITY FOR SURE. PRECTICAL KREGE TO SMAJ AA JAYEGA

   CURRENTLY DON'T KNOW HOW TO IMPLEMENT PQ BUT STILL THERE IS ONE WAY YOU CAN DO THIS QUESTION LIKE AFTER ADDING CHILDREN JUST SORT
   ARRAY IN ASC ORDER NOT GOOD WAY BUT STILL ONE WAY

   IT WORKED INCREDIBLE JOB SO NEXT TIME UNTIL WE FIND BETTER WAY FOR PQ USE THIS TRICK
*/

class PathPair {
  constructor(vertice,psf,wsf){
    this.vertice = vertice;
    this.psf = psf;
    this.wsf = wsf;
  }
}

visited = new Array(vertices).fill(false);
function findShortesPathWithDijkstraAlgo(graph,src,visited){
let queue = [];
let pair = new PathPair(src,src+'', 0);
queue.push(pair);

while(queue.length > 0){
 let remove = queue.shift();
 if(visited[remove.vertice] === true){
  continue;
 }
 visited[remove.vertice] = true;
 console.log(remove.psf +'@'+remove.wsf);

 let edges = graph[remove.vertice];

 edges.forEach(edge => {
  if(visited[edge.nbr] === false){
    let newPair = new PathPair(edge.nbr,remove.psf+edge.nbr,remove.wsf+edge.weight);
    queue.push(newPair)
  }
 });
 // Ye jol hai har bar queue ko sort krna is tarah next time hamesha chota he bhar niklega next time
   queue = queue.sort(function(a,b){
    return a.wsf - b.wsf; // AGAR LONGEST PATH FIND KRNA HOTO JUST b.wsf - a.wsf
   })
}
}

console.log('findShortesPathWithDijkstraAlgo ',findShortesPathWithDijkstraAlgo(graph,0,6,visited))

/*
  Prims algorithm : To find minimum spening tree : Or in simple word right now we are using it for question where we need to find 
  minimum wire to connect all the pcs.

  NOW TO BE REAL ALL THESE QUESTION ARE USING SAME THING MOSTLY BFS (REMOVE , MARK* , WORK , ADD START) EVEN DIJKSTRA AND PRIMS ALGORITHEM
  ARE USING ONLY BFS BUT ONLY DIFFERENT IS THAT IN DIJKSTRA AND PRIMS ALGORITHM WE ARE  USING PRIORITY QUEUE INSTAD OF QUEUE THATS THE ONLY
  DIFFERENT.

  NOW WE DON'T HAVE IDEA OF PRIORITY QUEUE AT THIS TIME SO TO DO THIS QUESTION WE WILL USE SAME SORT FUNCTION TO ACHIVE PQ BEHAVIOUR.

*/

visited = new Array(vertices).fill(false);

class PrimsPair {

  constructor(vertice,fromWhichVertice,weight){
    this.vertice = vertice;
    this.fromWhichVertice = fromWhichVertice;
    this.weight = weight;
  }
}
function minimumWireToConnectedWithPrimsAlog(graph,src,visited){

  let queue = [];
  let pair = new PrimsPair(src,-1,0); // 0 BECAUSE SRC TK PHOCHNE KE LIYE KOI WIEGHT KI JARUR NHI 
                                      // AND REGARDING -1 ITS JUST IMAGERY VERTICE AND DON'T WORRY WE WON'T PRINT IT.

  queue.push(pair);
  
  while(queue.length > 0){
    let rem = queue.shift();
    if(visited[rem.vertice] === true){
      continue;
    }

    visited[rem.vertice] = true;
   
    //work tb he kro jab -1 fromWhichVertice -1 na ho.

    if(rem.fromWhichVertice !== -1){
      console.log(rem.vertice + ' '+ rem.fromWhichVertice + ' @ ' + rem.weight)
    }
    let edges = graph[rem.vertice]; // Make sure we need edges of remove verice not the src like graph[src];

    edges.forEach(edge => {
      if(visited[edge.nbr] === false){
        let newPair = new PrimsPair(edge.nbr,rem.vertice,edge.weight); // THIS IS THE DIFFERNT IN DIJSTRA AND PRIMS WE ARE NOT ADDING IN PREV DATA  
        queue.push(newPair);
      }
    });
     // Ye jol hai har bar queue ko sort krna is tarah next time hamesha chota he bhar niklega next time
   queue = queue.sort(function(a,b){
    return a.wsf - b.wsf; // AGAR LONGEST PATH FIND KRNA HOTO JUST b.wsf - a.wsf
   })
  }
}

console.log('Prims algo to find minimum wire',minimumWireToConnectedWithPrimsAlog(graph,0,visited));


/*
   Topological Search VMI QUESTION IN GRAPH : This is the first question where we will use directed graph.
   In this question we have n given n files and those n are denpended on each other we need to find out in which order
   we need to complie then so all of them get compile.

   To this question few more time : Simple DFS with given chance to all vertices.
*/

let directeGraph = [];
let dvertices = 3
for(let i = 0 ; i < dvertices ; i++){
  directeGraph[i] = [];
}
directeGraph[0].push(new Edge(0,1,30));
directeGraph[1].push(new Edge(1,2,13));
// 0 1 PE AND 1 2 PE AND 2 KISI PE BE DEPENDED NHI HAI SO ANSWER SHOULD BE 2 1 0

let dvisieted =  new Array(dvertices).fill(false);

function complieFileOrderWithToplogySearch(graph,visited){
 let stack = [];
 for(let dv =  0 ; dv < dvertices ; dv++){
   if(visited[dv] === false){
      drawDirectedGraphTree(graph,dv,visited,stack);
   }  
 }
 stack.forEach(element => {
  console.log(element)
 });
}

function drawDirectedGraphTree(graph,src,visited,stack){
  visited[src] = true;

 let edges = graph[src];

 edges.forEach(edge => {
  if(visited[edge.nbr] === false){
    drawDirectedGraphTree(graph,edge.nbr,visited,stack);
  }
 });
 stack.push(src); // UNDERSTEND WHY STACK HERE WHY NOT PRINT IN PRE OR POST ORDER DIRECTLY
 // ONCE YOU UNDERSTAND STACK THINK YOU UNDERSTAND THIS QUESTION LIKE KING
}

console.log('Topology Search ',complieFileOrderWithToplogySearch(directeGraph,dvisieted))


// THATS ALL QUESTION NEED TO BE DONE FOR GRAPH FOR BASIC

// https://www.youtube.com/watch?v=iUtmQ66IC_0&list=PL-Jc9J83PIiHfqDcLZMcO9SsUDY4S3a-v&index=18 (Not done yet)