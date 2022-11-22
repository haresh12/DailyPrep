/*
   In interview its hard not to get atleast one question on this data structure . Now till now whatever
   data struture we learned we know that somehow all of them use object or array internally its just
   different way of representing those data structure. So same goes with graphs.

   In graphs we mainly have three things Vertices , Edges and Weight these are the main three things that
   need to understand and how its useful.

   Vertices : Simple meaning different points , different location , different cities or different networks

   Ahemdabad  , Surat , Jaipur , Pune example this are the for different vertices we have.

   Eges : Connection between vertices is called Edges Example :

     Ahemdabad <-> Surat  (50 km)
     Surat <-> Jaipur  (30km)
     Jaipur <-> Pune (20 km)
     Ahemdabad <-> Pune (120 km)

  These all are the edges which showes us connection between two vertices like in above case Ahemdabad to Surat
  we have one edge between them.
  
  Also this kilometers that we see here are known as weight of that specific edges.

  SO IN SIMPLE WORD GRAPH CONTAIN MAINLY THREE 3 THINGS VERTICES , EDGES AND WEIGHT.

  Also graph can be directed and undirected but right now we will focus only on undirected graph.
  (ONLY DIFFERENCE IS THAT IN DIRECTED GRAPH THERE MIGHT BE POSSIBLITY THAT WE CAN GO FROM
  AHEMDABAD TO PUNE BUT THERE WAY FROM PUNE TO AHEMDABAD : (There is no coming back))

  To represent graph data we will use array inside array but that we will do in practical.

  [[edge,edge,edge], [edge,edge]] where edge will contain source and neighbor and weight between them

  Example of Ahemdabad : [[{'Ahemdabad','Surat',50},{'Ahemdabad','Pune',120}]]
*/