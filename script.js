var linesA;
var randomNumberA;
var randomActor;
var linesR;
var randomNumberR;
var randomRole;
var linesG;
var randomNumberG;
var randomGenre;
var linesD;
var randomNumberD;
var randomDirector;

$(document.body).ready(function () {

  var loadFile1 = $.ajax({
    url: "actors.txt",
    async: true,
    success: function (contentA) {
      console.log("Found the actor database, parsing...");
      // normalize the line breaks, then split into lines
      linesA = contentA.replace(/\r\n|\r/g, '\n').trim().split('\n');
    
      // only set up the click handler if there were lines found
      if (linesA && linesA.length) {
        $('#showLine').on('click', function () {
          randomNumberA = parseInt(Math.random() * linesA.length);
          // // check to prevent infinite loop
          // if (lines.length === 1) { break; }
          
          randomActor = linesA[randomNumberA];
        });
      }
    }
    // error: function(e) {
        // var errorMsg = e? (e.status + ' ' + e.statusText) : "";
        // console.log(errorMsg);
    // },
    // dataType: "text"
  });


  $.when(loadFile1).then(function(){
    var loadFile2 = $.ajax({
      url: "roles.txt",
      async: true,
      success: function (contentR) {
        console.log("Found the role database, parsing...");
        // normalize the line breaks, then split into lines
        linesR = contentR.replace(/\r\n|\r/g, '\n').trim().split('\n');
            
        // only set up the click handler if there were lines found
        if (linesR && linesR.length) {
          $('#showLine').on('click', function () {
            randomNumberR = parseInt(Math.random() * linesR.length);
            // // check to prevent infinite loop
            // if (lines.length === 1) { break; }
                
            randomRole = linesR[randomNumberR];
          });
        }
      }
    });
    // error: function(e) {
    //   var errorMsg = e? (e.status + ' ' + e.statusText) : "";
    //   console.log(errorMsg);
    // },
    // dataType: "text"


    $.when(loadFile2).then(function(){
      var loadFile3 = $.ajax({
        url: "genres.txt",
        async: true,
        success: function (contentG) {
          console.log("Found the genre database, parsing...");
          // normalize the line breaks, then split into lines
          linesG = contentG.replace(/\r\n|\r/g, '\n').trim().split('\n');
            
          // only set up the click handler if there were lines found
          if (linesG && linesG.length) {
            $('#showLine').on('click', function () {
              randomNumberG = parseInt(Math.random() * linesG.length);
              // // check to prevent infinite loop
              // if (lines.length === 1) { break; }
                
              randomGenre = linesG[randomNumberG];
            });
          }
        }
      });
      // error: function(e) {
      //   var errorMsg = e? (e.status + ' ' + e.statusText) : "";
      //   console.log(errorMsg);
      // },
      // dataType: "text"


      $.when(loadFile3).then(function(){
        var loadFile4 = $.ajax({
          url: "directors.txt",
          async: true,
          success: function (contentD) {
            console.log("Found the director database, parsing...");
            // normalize the line breaks, then split into lines
            linesD = contentD.replace(/\r\n|\r/g, '\n').trim().split('\n');
        
            // only set up the click handler if there were lines found
            if (linesD && linesD.length) {
              $('#showLine').on('click', function () {
                randomNumberD = parseInt(Math.random() * linesD.length);
                // // check to prevent infinite loop
                // if (lines.length === 1) { break; }
                
                randomDirector = linesD[randomNumberD];
              });
            }
          }
        });
        // error: function(e) {
        //   var errorMsg = e? (e.status + ' ' + e.statusText) : "";
        //   console.log(errorMsg);
        // },
        // dataType: "text"
      });
    });
  });

  $('#showLine').on('click', function () {
    $('#headline').text(randomActor + " to Play " + randomRole + " in " + randomGenre + " Directed by " + randomDirector);
  });

});