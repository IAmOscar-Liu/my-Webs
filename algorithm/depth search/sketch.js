var data;
var graph;
var dropdown;
var data={
    "movies": [{
            "title": "Diner",
            "cast": [
                "Steve Guttenberg",
                "Daniel Stern",
                "Mickey Rourke",
                "Kevin Bacon",
                "Tim Daly",
                "Ellen Barkin",
                "Paul Reiser",
                "Kathryn Dowling",
                "Michael Tucker",
                "Jessica James",
                "Colette Blonigan",
                "Kelle Kipp",
                "Clement Fowler",
                "Claudia Cron"
            ]
        },
        {
            "title": "Footloose",
            "cast": [
                "Kevin Bacon",
                "Lori Singer",
                "Dianne Wiest",
                "John Lithgow",
                "Sarah Jessica Parker",
                "Chris Penn",
                "Frances Lee McCain",
                "Jim Youngs",
                "John Laughlin",
                "Lynne Marta",
                "Douglas Dirkson"
            ]
        },
        {
            "title": "Flatliners",
            "cast": [
                "Kiefer Sutherland",
                "Julia Roberts",
                "Kevin Bacon",
                "William Baldwin",
                "Oliver Platt",
                "Kimberly Scott",
                "Joshua Rudoy",
                "Benjamin Mouton",
                "Hope Davis",
                "Patricia Belcher",
                "Beth Grant"
            ]
        },
        {
            "title": "Eat Pray Love",
            "cast": [
                "Julia Roberts",
                "Javier Bardem",
                "Billy Crudup",
                "Richard Jenkins",
                "Viola Davis",
                "James Franco",
                "Sophie Thompson",
                "Mike O 'Malley",
                "Christine Hakim",
                "Arlene Tur",
                "Hadi Subiyanto",
                "Gita Reddy",
                "Tuva Novotny",
                "Luca Argentero",
                "Rushita Singh"
            ]
        },
        {
            "title": "Spotlight",
            "cast": [
                "Mark Ruffalo",
                "Michael Keaton",
                "Rachel McAdams",
                "Liev Schreiber",
                "John Slattery",
                "Brian d'Arcy James",
                "Stanley Tucci",
                "Gene Amoroso",
                "Jamey Sheridan",
                "Billy Crudup",
                "Maureen Keiller",
                "Richard Jenkins",
                "Paul Guilfoyle",
                "Len Cariou",
                "Neal Huff",
                "Michael Cyril Creighton",
                "Laurie Heineman",
                "Tim Progosh"
            ]
        },
        {
            "title":"Oscar's movie",
            "cast":[
              "Oscar Liu",
              "Oscar Liu jr"
            ]
        }
    ]
}

// function preload() {
//   data = loadJSON('kevinbacon.json');
// }
//var data;
//function preload(){
    //data = loadData()
    // function loadData() {
    //     var json = null;
    //     $.ajax({
    //         'async': false,
    //         'global': false,
    //         'url': "kevinbacon.json",
    //         'dataType': "json",
    //         'success': function (data) {
    //             json = data;
    //         }
    //     });
    //     return json;
    // }
//}


function setup() {
  graph = new Graph();
  dropdown = createSelect();
  dropdown.changed(dfs);
  noCanvas();
  //console.log(data);

  var movies = data.movies;

  for (var i = 0; i < movies.length; i++) {
    var movie = movies[i].title;
    var cast = movies[i].cast;
    var movieNode = new Node(movie);
    graph.addNode(movieNode);

    for (var j = 0; j < cast.length; j++) {
      var actor = cast[j];
      var actorNode = graph.getNode(actor);
      if (actorNode == undefined) {
        actorNode = new Node(actor);
        dropdown.option(actor);
      }
      graph.addNode(actorNode);
      movieNode.addEdge(actorNode);
    }
  }
}


function dfs() {
    graph.reset();
    var start = graph.setStart(dropdown.value());
    // var start = graph.setStart("Kevin Bacon");
    var end = graph.setEnd("Kevin Bacon");//shallow copy, end will be changed
  
    console.log(graph);
  
    var stack = [];
  
  
    //start.searched = true;
    stack.push(start);
  
    while (stack.length > 0) {
        let current = stack.pop();
        if (current == end) {
            console.log("Found " + current.value);
            break;
        }
        
        current.searched = true;
        for(edge of current.edges){
            if(!edge.searched){
                edge.parent = current
                stack.push(edge);
            }
        }       
    }
  
    var path = [];
    path.push(end);
    var next = end.parent;
    while (next != null) {
      path.push(next);
      next = next.parent;
    }
  
    var txt = '';
    
    if(path.length == 1){
      txt = "Not found"
    }else{
      for (var i = path.length - 1; i >= 0; i--) {
        var n = path[i];
        txt += n.value
        if (i != 0) {
          txt += ' --> '
        };
      }
    }
  
    // for (var i = path.length - 1; i >= 0; i--) {
    //   var n = path[i];
    //   txt += n.value
    //   if (i != 0) {
    //     txt += ' --> '
    //   };
    // }
    createP(txt);
  }

