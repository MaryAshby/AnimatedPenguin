
var setBanner = function(message)
                {
                d3.select("#banner").text(message);
                }
//Promise//

var penguinePromise= d3.json("penguins/classData.json")
           penguinePromise.then(function(data)
                   {
                     console.log("here",data);
                     setBanner("Penguin Quizzes");
                     setup(data);
                   }, 
                   function(err)
                   {
                   console.log("WWHHHHHYYYYYYYYYYY",err);
                   setBanner("Penguins Ditched the Test");
                   })

//Set up//
//making data//
  
var getGrade = function(quiz)
                {
                return quiz.grade;
                }

var screen = {width: 600, height:600}
var margins = {top: 10, right: 50, bottom: 50, left: 50}

//making buttons//

var changePenguin = function(penguin)
                   {
                    d3.select("#buttons")
                      .selectAll("img")       //what is easiest way to make penguins clickable//
                      .data(penguin[0].picture) //what data do I want to bind?//
                      .enter()
                      .append("img")
                      .attr("src", function(d)
                        {
                         return d.picture;
                         })
                      .on("click", function(d)
                        {
                         d3.selectAll("circle")
                           .remove()
        
                        return setup(penguin, d.quizes.grade); //this be calling the graph?//
                                                            
                        })
            
             console.log("WWHHHHHYYYYYYYYYYY2")     //This one isn't logging, the rest are, figure issue is this function//
                   }
                   


//set up of svg, scales, and axes//

var setup = function(penguin)
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
                      
    drawArray(getGrade,xScale,yScale,cScale,0); //should this be getGrade?//
   
      console.log("WWHHHHHYYYYYYYYYYY3")    
           } //function ends here//

var drawArray = function(getGrade, xScale, yScale, cScale, position) //should this be getGrade?//
          {          
           var arrays = d3.select("#graph")
                          .selectAll("circle")
                          .datum(function(obj)
                                 {return obj.quizes.map(getGrade)}) //is use of datum correct?//
                         // .transition()
                          .enter()
                          .append("circle")
                          .attr("fill", function(sweet)
                                {
                                 return cScale(penguin[0].quizes.grade);
                                 })
                          .attr("cx", function(num, position)
                                {
                                 return xScale(position);
                                })
                          .attr("cy", function(num)
                                {
                                 return yScale(num);
                                 })
                                
                          .attr("r", 2)
          
         console.log("WWHHHHHYYYYYYYYYYY4")  
          }
                 
    
