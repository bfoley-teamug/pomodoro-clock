//Remaining To Do's:
//move reset button
//add a pause button


$(document).ready(function() {
  var count = parseInt($("#numSess").html());
  var countBreak = parseInt($("#numBreak").html());
  $('#reset').hide(); 
   
  
  //start button
  $('#start').click(function() {
    var counter = setInterval(timer, 1000); 
    count *= 60; 
    countBreak *= 60;
    
    function timer() {
      $('#start, #subtractSess, #addSess, #sessionOne').hide();
      $('#timeDigits').html('Session ');
      count -= 1; 
      if (count === 0) { 
        clearInterval(counter);
        var startBreak = setInterval(breakTimer, 1000); 
        $('#numSess').hide(); 
      };       
      
      //turn into mins
      if (count % 60 >= 10) {
 $('#numSess').html(Math.floor(count/60)+":"+count % 60); 
       } else {
       //less than 10 secs
 $('#numSess').html(Math.floor(count/60)+":"+"0"+count % 60);
       }
      
        function breakTimer() {
        $('#start, #subtractBreak, #addBreak, #sessionTwo, #timeDigits').hide();
        $('#timeDigitsTwo').html('Break ');
        countBreak -= 1; 
          if (countBreak % 60 >= 10) {
            $('#numBreak').html(Math.floor(countBreak/60)+":"+countBreak % 60);     
          } else {
             $('#numBreak').html(Math.floor(countBreak/60)+":"+"0"+countBreak % 60);
          }         
          
          if (countBreak === 0) {
            clearInterval(startBreak); 
            $('#timeDigitsTwo').html('Break Over!'); 
            $('#numBreak').hide(); 
            $('#reset').fadeIn(1200); 
            
            $('#reset').click(function() {
              location.reload(true);
            });
          }
        }
       } 
     });
  
  $("#subtractSess").click(function() { 
    if(count >= 0) {
      count -=1; 
      $("#numSess").html(count); 
    }
  });
  $("#addSess").click(function() { 
    if(count >= 0) {
      count +=1; 
      $("#numSess").html(count); 
    }
  });
  
  $("#subtractBreak").click(function() { 
    if(countBreak >= 0) {
      countBreak -=1; 
      $("#numBreak").html(countBreak); 
    }
  });
  
  $("#addBreak").click(function() { 
    if(countBreak >= 0) {
      countBreak +=1; 
      $("#numBreak").html(countBreak); 
    }
  });
  
});

 