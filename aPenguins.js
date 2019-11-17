
var setBanner = function(message)
                {
                d3.select("#banner").text(message);
                }


//Set up//
//making data//

var screen = {width: 600, height:600}
var margins = {top: 10, right: 50, bottom: 50, left: 50}
     

//set up of svg, scales, axes, buttons//

var setup = function(penguins)
           {
           d3.select("svg")
             .attr("width",screen.width)
             .attr("height",screen.height)
             .append("g")
             .attr("id","graph")
             .attr("transform","translate("+margins.left+ ","+ margins.top+")");
             
var width = screen.width - margins.left - margins.right;
var height = screen.height - margins.top - margins.bottom;

var xScale = d3.scaleLinear()
               .domain([0,39]) //made extra number for ascetics//
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
             .append("g")
             .attr("id","xAxis")
             .attr("transform","translate("+margins.left+","+(margins.top+height)+")")
             .call(xAxis)
    
           d3.select(".axis")
             .append("g")
             .attr("id","yAxis")
             .attr("transform","translate(25,"+margins.top+")")
             .call(yAxis)
                      
           d3.select("#buttons")
             .selectAll("img")      
             .data(penguins) 
             .enter()
             .append("img")
             .attr("src", function(penguin)
                        {
                         return "penguins/"+penguin.picture;
                         })
             .on("click", function(penguin, position)
                        {
                          drawArray(penguins,xScale,yScale,cScale,position);
                        })

   
     console.log("Hey! I'm working 2")    
               
           } //function ends here//

//WHY DOESN'T THIS WORK?!//

var drawArray = function(penguins, xScale, yScale, cScale, position)
            {              
           var arrays = d3.select("#graph")
                          .selectAll("circle")
                          .data(penguins[position].quizes)
                          .transition()
                          .duration(2000)
                          .attr("fill", function(quiz)
                                {
                                 return cScale(penguins[position].quizes);
                              console.log ("dots");
                                 })
                          .attr("cx", function(quiz, position)
                                {
                                 return xScale(position);
                                })
                          .attr("cy", function(quiz)
                                { 
                                 console.log ("C ya")
                                 return yScale(quiz.grade);
                                 })    
                          .attr("r", 4)
                       
          
        console.log("Hey! I'm working3")  
    
            }
                 
    //Promise//

var penguinePromise= d3.json("penguins/classData.json")
           penguinePromise.then(function(data)
                   {
                     console.log("here");
                     setBanner("Penguin Quizzes");
                     setup(data);
                   }, 
                   function(err)
                   {
                   console.log("WWHHHHHYYYYYYYYYYY won't it work?",err);
                   setBanner("Penguins Ditched the Test");
                   })

