var svg = document.getElementById("svg");

var clicked = function(e){
    if(e.target.getAttribute("fill") == "red"){
	e.stopPropagation();
	 e.target.setAttribute("fill", "green");
    }
    else if(e.target.getAttribute("fill") == "green"){
	e.stopPropagation();
	 svg.removeChild(e.target);
	  var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	  circle.setAttribute("cx", Math.floor(Math.random()*500));
	   circle.setAttribute("cy", 10 + Math.floor(Math.random()*500));
	    circle.setAttribute("r", 20);
	     circle.setAttribute("fill","red");
	      svg.appendChild(circle);
    }
}

var circle = function(e){
    var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
     circle.setAttribute("cx", e.offsetX);
      circle.setAttribute("cy", e.offsetY);
       circle.setAttribute("r", 20);
        circle.setAttribute("fill","red");
         circle.addEventListener("click", clicked);
          svg.appendChild(circle);
}

var clean = function(e){
    while(svg.firstChild){
	svg.removeChild(svg.firstChild);
    }
}
svg.addEventListener("click", circle)
clear.addEventListener("click", clean);
