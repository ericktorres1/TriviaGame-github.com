var counter = 240;
var timer = setInterval(function() {
    $('#card-content').html("<h2> Time Remaining: " + --counter  +" </h2>");

 // To do:When the counter reaches to zero 
    if(counter <= 0){
        $('#card-content').html("<h2> TIME UP! </h2>");
    }

     
 }, 1000);

$(document).ready(function(){

    

    var startButton = $('#startButton');
    var cardContentDOM = $('#card-content');
    startButton.on('click', function () {
        $(startButton).remove();
        cardContentDOM.html(timer());

        
    
    });
});


