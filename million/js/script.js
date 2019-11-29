$(document).ready(function () {

    
    $('.start').click(() => {
   
        var audio2 = new Audio('sounds/commerical break.mp3');
        audio2.play();
        
        $('.question').removeClass('hide');
        $('.answers').removeClass('hide');
        $('.next').removeClass('hide');
        $('.take').removeClass('hide');
        $('.score-table').removeClass('hide');
        $('img').addClass('image');
        $('.start').addClass('hide');
        $('img').removeClass('firstLook');


        var harcer = [
            {
                question: ' 10 + 10 = ?',
                answer1: 'A. 60',
                answer2: 'B. 20',
                answer3: 'C. 30',
                answer4: 'D. 40',
                rightAnswer: 'B. 20'
            },

            {
                question: ' 20 + 20 = ?',
                answer1: 'A. 10',
                answer2: 'B. 20',
                answer3: 'C. 30',
                answer4: 'D. 40',
                rightAnswer: 'D. 40'
            },

            {
                question: ' 30 + 30 = ?',
                answer1: 'A. 60',
                answer2: 'B. 20',
                answer3: 'C. 30',
                answer4: 'D. 40',
                rightAnswer: 'A. 60'
            },

            {
                question: ' 40 + 40 = ?',
                answer1: 'A. 60',
                answer2: 'B. 20',
                answer3: 'C. 80',
                answer4: 'D. 40',
                rightAnswer: 'C. 80'
            },

            {
                question: ' 50 + 50 = ?',
                answer1: 'A. 60',
                answer2: 'B. 100',
                answer3: 'C. 30',
                answer4: 'D. 40',
                rightAnswer: 'B. 100'
            },

            {
                question: ' 150 + 150 = ?',
                answer1: 'A. 60',
                answer2: 'B. 300',
                answer3: 'C. 30',
                answer4: 'D. 40',
                rightAnswer: 'B. 300'
            },

            {
                question: ' 250 + 250 = ?',
                answer1: 'A. 60',
                answer2: 'B. 100',
                answer3: 'C. 500',
                answer4: 'D. 40',
                rightAnswer: 'C. 500'
            },

            {
                question: ' 500 + 500 = ?',
                answer1: 'A. 60',
                answer2: 'B. 100',
                answer3: 'C. 30',
                answer4: 'D. 1000',
                rightAnswer: 'D. 1000'
            },

            {
                question: ' 520 + 250 = ?',
                answer1: 'A. 770',
                answer2: 'B. 100',
                answer3: 'C. 30',
                answer4: 'D. 40',
                rightAnswer: 'A. 770'
            },

            {
                question: ' 1150 + 50 = ?',
                answer1: 'A. 60',
                answer2: 'B. 100',
                answer3: 'C. 1200',
                answer4: 'D. 40',
                rightAnswer: 'C. 1200'
            }
        ]
        
        
         var poxvacharcer = [
            {
                question: ' aaaaaaaaaa = ?',
                answer1: 'A. b',
                answer2: 'B. a',
                answer3: 'C. c',
                answer4: 'D. d',
                rightAnswer: 'B. a'
            },

            {
                question: ' bbbbbbbbb = ?',
                answer1: 'A. a',
                answer2: 'B. d',
                answer3: 'C. c',
                answer4: 'D. b',
                rightAnswer: 'D. b'
            },

            {
                question: ' 30 + 30 = ?',
                answer1: 'A. 60',
                answer2: 'B. 20',
                answer3: 'C. 30',
                answer4: 'D. 40',
                rightAnswer: 'A. 60'
            },

            {
                question: ' 40 + 40 = ?',
                answer1: 'A. 60',
                answer2: 'B. 20',
                answer3: 'C. 80',
                answer4: 'D. 40',
                rightAnswer: 'C. 80'
            },

            {
                question: ' 50 + 50 = ?',
                answer1: 'A. 60',
                answer2: 'B. 100',
                answer3: 'C. 30',
                answer4: 'D. 40',
                rightAnswer: 'B. 100'
            },

            {
                question: ' 150 + 150 = ?',
                answer1: 'A. 60',
                answer2: 'B. 300',
                answer3: 'C. 30',
                answer4: 'D. 40',
                rightAnswer: 'B. 300'
            },

            {
                question: ' 250 + 250 = ?',
                answer1: 'A. 60',
                answer2: 'B. 100',
                answer3: 'C. 500',
                answer4: 'D. 40',
                rightAnswer: 'C. 500'
            },

            {
                question: ' 500 + 500 = ?',
                answer1: 'A. 60',
                answer2: 'B. 100',
                answer3: 'C. 30',
                answer4: 'D. 1000',
                rightAnswer: 'D. 1000'
            },

            {
                question: ' 520 + 250 = ?',
                answer1: 'A. 770',
                answer2: 'B. 100',
                answer3: 'C. 30',
                answer4: 'D. 40',
                rightAnswer: 'A. 770'
            },

            {
                question: ' 1150 + 50 = ?',
                answer1: 'A. 60',
                answer2: 'B. 100',
                answer3: 'C. 1200',
                answer4: 'D. 40',
                rightAnswer: 'C. 1200'
            }
        ]


        var level = 0;
        var gameover = undefined;
        var clickagain = undefined;

        
        

        function showQuestion() {

            $('.quest-text').text(harcer[level].question);
            $('.answer-text1').text(harcer[level].answer1);
            $('.answer-text2').text(harcer[level].answer2);
            $('.answer-text3').text(harcer[level].answer3);
            $('.answer-text4').text(harcer[level].answer4);


        }

        showQuestion();
        
      
        
                
            $('.answer-text').click(function() {
        
            if ($(this).text() === (harcer[level].rightAnswer)  || $(this).text() === (poxvacharcer[level].rightAnswer)) { 
                
                $(this).parent().addClass('green');
                level++;
                clickagain = false;
                var audio3 = new Audio('sounds/correct answer.mp3');
                audio3.play();
                showScore();
                firstFixedScore();
                final();
                
                
                   
        }
            else {
                $(this).parent().addClass('red');
                gameover = true;
                var audio4 = new Audio('sounds/wrong answer.mp3');
                audio4.play();
                clickagain = false;
                $(".answer-text").unbind();
                failed()
            }
        })
    
       

        $('.next').click(function () {
              
            if (gameover != true) {
                $('.answer-text').parent().removeClass('green');
                var audio1 = new Audio('sounds/lets play.mp3');
                audio1.play();
                showQuestion();
                failed();
                $('.answer1').removeClass('hide');
                $('.answer2').removeClass('hide');
                $('.answer3').removeClass('hide');
                $('.answer4').removeClass('hide');

            }
        })

       function showScore() {
                $(`.score${level}`).addClass('win');
                $(`.score${level - 1}`).removeClass('win');
                
            }

        
        //if you achieve score 5000
        function firstFixedScore() {
                if(level == 5){
                    $('.score5').addClass('fix');
                }
            }
        
        //if you fail
        
        function failed(){
           setTimeout(function () {
               if(level >= 5 && gameover == true){
                   $('.upper-row').remove();
                   $('.lower-row').remove();
                   $('.container').remove();
                   var div = $('<div><p>Your score is 5000!</p></div>');
                   $('.container-fluid').append(div);
                   div.addClass('final-div')
               }else if(level < 5 && gameover == true){
                   $('.upper-row').remove();
                   $('.lower-row').remove();
                   $('.container').remove();
                   var div = $('<div><p>What a pity!</br>Your score is 0</p></div>');
                   $('.container-fluid').append(div);
                   div.addClass('final-div')
               }
           },1500)
        }
        
        
        
        //show this if you win a million
        function final(){
            setTimeout(function () {
                if(level == 10){
                    $('.upper-row').remove();
                    $('.lower-row').remove();
                    $('.container').remove();
                    var div = $('<div><p>Congratulations!<br> You won a million!</p></div>');
                    $('.container-fluid').append(div);
                    div.addClass('final-div')
                }
            },1500)
        }
        
        
        //if you give up and take money
        $('.take').one( "click", function(){

            
                $('.upper-row').remove();
                $('.lower-row').remove();
                $('.container').remove();
                var div = $('<div><p></p></div>');
                $('.container-fluid').append(div);
                div.addClass('final-div')
         })  
    
      
        // help '50-50'
        $('.help1').one( "click", function(){
                 
              $('.help1').css('background','red');
             if (((harcer[level].answer1) != (harcer[level].rightAnswer)) &&
                ((harcer[level].answer2) != (harcer[level].rightAnswer))){
                    
                $('.answer1').addClass('hide');
                $('.answer2').addClass('hide');
                    
            } else if(((harcer[level].answer3) != (harcer[level].rightAnswer)) && ((harcer[level].answer4) != (harcer[level].rightAnswer))){
                $('.answer3').addClass('hide');
                $('.answer4').addClass('hide');
               
                }
         })
        
        //help 'call'
        $('.help3').one( "click", function(){
            var audio1 = new Audio('sounds/Ringing_Phone.mp3');
            audio1.play();
            setTimeout(function(){
             $('.help3').css('background','red');
                  audio1.pause();

              var friendSays = [harcer[level].rightAnswer,harcer[level].answer1,harcer[level].rightAnswer,harcer[level].rightAnswer,harcer[level].rightAnswer,harcer[level].rightAnswer,harcer[level].answer4,harcer[level].answer2,harcer[level].answer3,harcer[level].rightAnswer,harcer[level].rightAnswer,]
            
              var randomAnswer = Math.floor(Math.random() * friendSays.length);
              alert(`I think the answer is ${friendSays[randomAnswer]}`);  
            },4000)
         
        })
        
     
        //help 'Change the question'
         $('.help4').one( "click", function(){
         $('.help4').css('background','red');  
           
             function changeQuestion() {

            $('.quest-text').text(poxvacharcer[level].question);
            $('.answer-text1').text(poxvacharcer[level].answer1);
            $('.answer-text2').text(poxvacharcer[level].answer2);
            $('.answer-text3').text(poxvacharcer[level].answer3);
            $('.answer-text4').text(poxvacharcer[level].answer4);


        }
             changeQuestion();
         })
        

        
        
    })

})