$(document).ready(function(){

    var counter = 240;
    var startButton = $('#startButton');

    var questionArray = [
        {
            question: 'What is a group of crows called?',
            answerChoices: ['A bike accident', 'A hanganail', 'A killing', 'A murder'],
            correctAnswer: 3,
            photo: "assets/images/1.gif"
        }, 
        {
            question: 'What is the first thing a caterpillar usually eats after it is born?',
            answerChoices: ['Other bugs', 'Grass ', 'Its own eggshell ', 'Cheerios'],
            correctAnswer: 3,
            photo: "assets/images/2.jpg"
        }, 
        {
            question: 'The trumpeter swan weighs about how many pounds?',
            answerChoices: ['10', '30', '50', '70'],
            correctAnswer: 1,
            photo: "assets/images/3.gif"
        },
        {
            question: 'Which of the following animals is not nocturnal?',
            answerChoices: ['Sheep', 'Skunk', 'Leopard', 'Tiger'],
            correctAnswer: 0,
            photo: "assets/images/4.gif"
        },
        {
            question: 'Walruses can eat about how many clams in one day?',
            answerChoices: ['5,000', '10,000', '12,000', '16,000'],
            correctAnswer:0,
            photo: "assets/images/5.gif"
        },
        {
            question: 'What is a baby rabbit called?',
            answerChoices: ['Doe', 'Kit', 'Buck', 'Hare'],
            correctAnswer: 1,
            photo: "assets/images/6.gif"
        },
        {
            question: 'An an says, "Danger ahead!" by doing what?',
            answerChoices: ['Squealing', 'Running toward water', 'Rolling on its back', 'Oozing chemicals'],
            correctAnswer: 3,
            photo: "assets/images/7.gif"
        },
        {
            question: 'Lions only live in the wild in two parts of the world, which two?',
            answerChoices: ['Africa and India', 'Africa and Indonesia', 'Africa and Australia', 'Africa and China'],
            correctAnswer: 0,
            photo: "assets/images/8.gif"
        },
        {
            question: 'What type of animal is a seahorse?',
            answerChoices: ['Crustacean', 'Arachnid', 'Fish', 'Shell'],
            correctAnswer: 0, 
            photo: "assets/images/9.gif"
        },
        {
            question: 'What is the fastest water animal?',
            answerChoices: ['Porpoise', 'Sailfish', 'Flying fish', 'Tuna'],
            correctAnswer: 1,
            photo: "assets/images/10.gif"
        }   
    ];
   

    // Variables to keep correct, wrong, timer

    var correct = 0;
    var wrong = 0;
    var unaswer = 0;
    var timer = 240;
    var intervalID;
    var guess = '';
    var running = false;
    var questionCount = questionArray.length;



    $('#play-again').hide();
    $('#done').hide();

    $('#start').on('click', function () {
        $('#start').remove();
        displayQuestions();
        runTimer();
    });
    
    console.log(questionArray[0].question);
    console.log(questionArray.length);
    console.log(questionArray[0].answerChoices.length);

    function displayQuestions() {

        for(var i = 0; i < questionArray.length; i++) {

            var question = questionArray[i].question;
            $('#questions-div').append("<br>");
            $('#questions-div').append(question);
            $('#questions-div').append("<br>");
            console.log(question);

            for(var j = 0; j <= 3; j++){

                var choice = questionArray[i].answerChoices[j];
                console.log(choice);

                var userSelection = $('<button>');
                userSelection.addClass('answerChoice');
                userSelection.append(choice);
                

                userSelection.attr('guess-value', j);
                $('#questions-div').append(userSelection);
            }
            
        }
    }

    $(document).on('click', '.answerChoice', function(){

        
        var selected = $('.answerChoice').html();
        console.log("you selected: " + selected);
        //$('.answerChoice').style.backgroundColor = "green";
        guess = parseInt($('.answerChoice').attr('guess-value'));
        console.log(guess);
        if(guess === questionArray.correctAnswer) {
            correct++;
            guess= '';
        }
        else {
            wrong++;
            guess = '';
        }
    });

    function hideQuestions() {
        if((wrong + correct + unaswer) === questionCount) {
            $('#questions-div').empty();
            $('#questions-div').html("<h3>Game Over!</h3>");
            $('#questions-div').append("<h4> Correct" + correct + "</h4>");
            $('#questions-div').append("<h4> Incorrect" + wrong + "</h4>");
            $('#questions-div').append("<h4> Unanswered" + unaswer + "</h4>");
            $("play-again").show();
            correct = 0;
            wrong = 0;
            unaswer = 0; 
        }
        else {
            runTimer();
            displayQuestions();
        }
    }

    // Time starts
    function runTimer() {
        if(!running) {
            intervalID = setInterval(decrement, 1000);
            running = true; 
        }
    }

    // Time counts down
    function decrement() {
        $('#remaining-time').html("Time Remaining: " + timer);
        timer--;

        if(timer === 0){
            stop();
            hideQuestions();
        }
    }

    // Stop the time
    function stop() {
        running = false;
        clearInterval(intervalID);
    }
    // console.log(answerOptions);
    
    // var arrayAnswerKeys = Object.keys(answerOptions);
    // console.log(arrayAnswerKeys); 
    // var correctAnswers = ['A murder', 'Its own eggshell', '30', 'sheep', '5,000', 'Kit', 'Oozing chemicals', 'Africa and India', 'Crustacean', 'Sailfish'  ];

    // var cardContentDOM = $('#card-content');

    // var counter = 240;
    
   


    // startButton.on('click', function () {
    //     $(startButton).remove();

    //     var timer = function(){
    //         counter--;
    //         $('#time-remaining-div').prepend("<h2 class='text-center'> Time Remaining: " + counter  +" </h2>")
    
    //         setTimeout(time, 1000);
    //         }
    //         timer();
        // var timer = setInterval(function() {
            
        //     $('#card-content').html("<h2 class='text-center'> Time Remaining: " + --counter  +" </h2>");
            
        //  // To do:When the counter reaches to zero 
        //     if(counter <= 0){
        //         $('#card-content').html("<h2> TIME UP! </h2>");
        //     }
        
             
        //  }, 1000);
        
//          for(var i = 0; i < questionArray.length; i++){
//             $('#card-content').append("<p>" + questionArray[i] + "</p>");
            
//             // console.log(answerOptions.question);
//             for(var index = 0; index < answerOptions[arrayAnswerKeys[i]].length; index++ ) {
//                 var optionsArray = answerOptions[arrayAnswerKeys[i]];
//                 var option = optionsArray[index];
//                 var questionName = "question" + (i + 1);
                
//                 $('#card-content').append("<input type='radio' name=" + questionName + "'value='" + option + "''>" + option);
//             }
           
//         }
// });

});


