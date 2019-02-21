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
  
  // load the trivia from the server
  $.ajax({
    url: 'actors.txt'
  }).done(function(content) {
    
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
  });

  // load the trivia from the server
  $.ajax({
    url: 'roles.txt'
  }).done(function(content) {
    
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
  });

  // load the trivia from the server
  $.ajax({
    url: 'genres.txt'
  }).done(function(content) {
    
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
  });

  // load the trivia from the server
  $.ajax({
    url: 'directors.txt'
  }).done(function(content) {
    
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
  });

  $('#showLine').on('click', function () {
    $('#headline').text(randomDirector);
  });

});