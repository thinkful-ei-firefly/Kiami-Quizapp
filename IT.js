'use strict'

$(document).ready(function(){
    let counter = 0;
    $('#startButton').click(function(){
        $('.quizStart').hide();
        $('.questionAnswerForm').show();
        $('#question-0').show();
    }); 
    $('.submitButton').click(function(event){
        event.preventDefault();
        let answer = $('.answerOption input[type=radio]:checked').val();
        $('#question-'+counter).hide();
        switch(counter) {
            case 0:
                if( answer === 'Female') {
                    $('#correctFeedback'+counter).show();
                } else{
                    $('#incorrectFeedback'+counter).show();
                }
                break;
            case 1:
                if( answer === 'Georgie') {
                    $('#correctFeedback'+counter).show();
                } else{
                    $('#incorrectFeedback'+counter).show();
                }
                break;
        }
        counter++;
    });
    $('.nextButton').click(function(event){
        event.preventDefault();
        $('.correctFeedback,.incorrectFeedback').hide();
        $('#question-'+counter).show();
    });
})
