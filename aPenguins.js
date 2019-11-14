//Promise//

var penguinePromise= d3.json("penguins/classData.json")
           penguinePromise.then(function(data)
                   {
                     console.log("here",data);
                     setup(data);
                   }, 
                   function(err)
                   {
                   console.log("WWHHHHHYYYYYYYYYYY",err);
                   }

//Set up//

var screen = {width: 600, height:600}
var margins = {top: 10, right: 50, bottom: 50, left: 50}

//set up of svg, scales, and axes//

var setup = function(penguins)
           {
           d3.select("svg")
             .attr("width",screen.width)
             .attr("height",screen.height)
             .append("g").attr("id","graph")
             .attr("transform","translate("+margins.left+ ","+ margins.top+")");
             
var width = screen.width - margins.left - margins.right;
var height = screen.height - margins.top - margins.bottom;

var xScale = d3.scaleLinear()
               .domain([0,29]) //DOUBLE CHECK NUMBER OF QUIZZES!!!!//
               .range([0,width])
                
var yScale= d3.scaleLinear()
              .domain([0,11]) //made extra number for ascetics//
              .range([height,0])
//colors//

var cScale = d3.scaleOrdinal(d3.schemeTableau10)

//Axes//

 var xAxis = d3.axisBottom(xScale)
 var yAxis = d3.axisLeft(yScale)
   
           d3.select("svg")
             .append("g")
             .classed("axis",true);
    
           d3.select(".axis")
             .append("g").style("font","16px times")
             .attr("id","xAxis")
             .attr("transform","translate("+margins.left+","+(margins.top+height)+")")
             .call(xAxis)
    
           d3.select(".axis")
             .append("g").style("font","16px times")
             .attr("id","yAxis")
             .attr("transform","translate(25,"+margins.top+")")
             .call(yAxis)
                      
    drawArray(penguins,xScale,yScale,cScale,0);
   
           } //function ends here//

var drawArray = function(penguins, xScale, yScale, cScale, position)
          {
           var arrays = d3.select("#graph")
                          .selectAll("circle")
                          .data(penguins[index].arr)
                          .enter()
                          .append("circle")
                          .attr("fill", function(sweet)
                                {
                                 return cScale(penguins[index].quizes);
                                 })
                          .attr("cx", function(num, position)
                                {
                                 return xScale(position);
                                })
                          .attr("r", 2)
           }
//go,go,go//
setup(data);
                                
    
