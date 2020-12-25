function ageInDays() {
    var birthYear = prompt('When were you born... Good friend?');
    var ageInDayss = (2020 - birthYear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + ageInDayss + ' days old.');
    h1.appendChild(textAnswer);
    h1.setAttribute('id', 'ageInDays');
    document.getElementById('flex-box-result').appendChild(h1);
    }
    function reset() {
        document.getElementById('ageInDays').remove();
    }
    // Challenge 2: Cat Generator
    function generateCat() {
        var image = document.createElement('img');
        var div = document.getElementById('flex-cat-gen');
        image.src = "http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
        div.appendChild(image);
    }
    
    // Challenge 3: Rock, Paper, Scissors
    function rpsGame(yourChoice) {
        console.log(yourChoice);
        var humanChoice, botChoice;
        humanChoice = yourChoice.id 
        botChoice = numberToChoice(randToRpsInt());
        console.log('Computer choice:', botChoice);
        results = decideWinner(humanChoice, botChoice); // [0, 1]
        console.log(results);
        message = finalMessage(results);
        console.log(message);
        rpsFrontEnd(yourChoice.id, botChoice, message);  
    }
    
    function randToRpsInt() {
        return Math.floor(Math.random()* 3);
    }
    function numberToChoice(number) {
        return ['rock', 'paper', 'scissors'] [number];
    }
    
    function decideWinner(yourChoice, computerChoice) {
        var rpsDatabase = {
            'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
            'paper': {'rock':1, 'paper':0.5, 'scissors': 0},
            'scissors': {'rock':0, 'paper':1, 'scissors': 0.5}
        };
    
        var yourScore = rpsDatabase[yourChoice] [computerChoice];
        var computerScore = rpsDatabase[computerChoice] [yourChoice];
    
        return [yourScore, computerScore];
    }
    
    function finalMessage([yourScore, computerScore]) {
        if (yourScore === 0) {
            return {'message': 'You lost!', 'color': 'red'};
        } else if (yourScore === 0.5) {
            return {'message': 'You tied', 'color': 'yellow'};
        }else {
            return {'message': 'You won!', 'color': 'green'};
        }
    }
    
    function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
        var imagesDatabase = {
            'rock': document.getElementById("rock").src,
            'paper': document.getElementById("paper").src,
            'scissors': document.getElementById("scissors").src
        }
        //let's remove all the images
        document.getElementById('rock').remove();
        document.getElementById('paper').remove();
        document.getElementById('scissors').remove();
    
        var humanDiv = document.createElement('div');
        var messageDiv = document.createElement('div');
        var botDiv = document.createElement('div');
        
    
    
         humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "'height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>";
         messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage['message'] + "</h1>";
         botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] + "'height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'>";
       
         
        document.getElementById('flex-box-rps-div').appendChild(humanDiv);
        document.getElementById('flex-box-rps-div').appendChild(messageDiv);
        document.getElementById('flex-box-rps-div').appendChild(botDiv);
    
    
       
        
    
    }
    
    
    
    // Challenge 4: Change the color of all buttons
    
    let allButtons = document.getElementsByTagName('button');
    
    
    
    let copyAllButtons=[];
    for (let i=0; i<allButtons.length; i++) {
        copyAllButtons.push(allButtons[i]);
    } 
    
    function buttonColorChange(buttonThingy) {
        if (buttonThingy.value==='red') {
            buttonsRed();
        }else if (buttonThingy.value ==='green') {
            buttonsGreen();
        }else if (buttonThingy.value==='reset') {
            buttonColorReset();
        }else if (buttonThingy.value==='random') {
            randomColors();
        }
    }
    function buttonsRed() {
        for (let i=0; i<allButtons.length; i++) {
            allButtons[i].classList.remove(allButtons[i].classList[1]);
            allButtons[i].classList.add('btn-danger');
        }
    }
    function buttonsGreen() {
        for (let i=0; i<allButtons.length; i++) {
            allButtons[i].classList.remove(allButtons[i].classList[1]);
            allButtons[i].classList.add('btn-success');
        }
    }
    
    function buttonColorReset(){
        for (let i=0; i<allButtons.length; i++){
            allButtons[i].classList.remove(allButtons[i].classList[1]);
            allButtons[i].classList.add(copyAllButtons[i]);
    
        }
    }
    function randomColors() {
        let choices=['btn-primary', 'btn-danger', 'btn-success', 'btn-warning']
        for (let i=0; i<allButtons.length; i++) {
            let randomNumber=Math.floor(Math.random()*4);
            allButtons[i].classList.remove(allButtons[i].classList[1]);
            console.log(allButtons[i]);
            allButtons[i].classList.add(choices[randomNumber]);
        }
    
    }






















