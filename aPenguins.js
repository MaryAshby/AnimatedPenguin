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
               .domain([0,38])
               .range([0,width])
                
var yScale= d3.scaleLinear()
              .domain([0,10])
              .range([height,0])
    
