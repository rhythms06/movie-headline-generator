var lines;
var randomNumberA;
var randomActor;
var randomNumberR;
var randomRole;
var randomNumberG;
var randomGenre;
var randomNumberD;
var randomDirector;
var lastRandomNumber;

$(document.body).ready(function () {

  var loadFile1 = $.ajax({
    url: "actors.txt",
    async: true,
    success: function (content) {
      console.log("Found the actor database, parsing...");
      // normalize the line breaks, then split into lines
      lines = content.replace(/\r\n|\r/g, '\n').trim().split('\n');
    
      // only set up the click handler if there were lines found
      if (lines && lines.length) {
        $('#showLine').on('click', function () {
          randomNumberA = parseInt(Math.random() * lines.length);
          // // check to prevent infinite loop
          // if (lines.length === 1) { break; }
          
          randomActor = lines[randomNumberA];
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
      success: function (content) {
        console.log("Found the role database, parsing...");
        // normalize the line breaks, then split into lines
        lines = content.replace(/\r\n|\r/g, '\n').trim().split('\n');
            
        // only set up the click handler if there were lines found
        if (lines && lines.length) {
          $('#showLine').on('click', function () {
            randomNumberR = parseInt(Math.random() * lines.length);
            // // check to prevent infinite loop
            // if (lines.length === 1) { break; }
                
            randomRole = lines[randomNumberR];
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
        success: function (content) {
          console.log("Found the genre database, parsing...");
          // normalize the line breaks, then split into lines
          lines = content.replace(/\r\n|\r/g, '\n').trim().split('\n');
            
          // only set up the click handler if there were lines found
          if (lines && lines.length) {
            $('#showLine').on('click', function () {
              randomNumberG = parseInt(Math.random() * lines.length);
              // // check to prevent infinite loop
              // if (lines.length === 1) { break; }
                
              randomGenre = lines[randomNumberG];
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
          success: function (content) {
            console.log("Found the director database, parsing...");
            // normalize the line breaks, then split into lines
            lines = content.replace(/\r\n|\r/g, '\n').trim().split('\n');
        
            // only set up the click handler if there were lines found
            if (lines && lines.length) {
              $('#showLine').on('click', function () {
                randomNumberD = parseInt(Math.random() * lines.length);
                // // check to prevent infinite loop
                // if (lines.length === 1) { break; }
                
                randomDirector = lines[randomNumberD];
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
    $('#headline').text(randomDirector);
  });

});