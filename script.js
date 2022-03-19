let pScore = 0;
let cScore = 0;


function computerSelection(){
let choice = Math.floor(Math.random() * 3) + 1;

if (choice == 3) {
    return 'Rock'
} else if(choice == 2) {
    return 'Paper'
}else{
    return 'Scissors'
}
}

function playerSelection(){
    let choice = ''
   do {
    let input = prompt('Rock Paper or Scissors ?');

    choice = input.toLocaleLowerCase();

    if (choice == 'rock' || choice == 'paper' || choice =='scissors') {
        choice = choice.charAt(0).toUpperCase() + choice.substring(1);
    } else {
        choice ='ERROR';
        console.log('Invalid value, try again');
    }

   } while (choice == 'ERROR');
    

   return choice;
    
}

function playRound (cS , pS){
let result  =  '';
    if (pS == cS) {
        result = 'Tie';
      } else if (pS == 'Rock' && cS == 'Scissors') {
        result = 'You Win';
        
      } else if (pS == 'Paper' && cS == 'Rock') {
        result = 'You Win';
        
      } else if (pS == 'Scissors' && cS == 'Paper') {
        result = 'You Win';
        
      } else {
        result = 'You Lose';
        
      }
        console.log(result);
        return result
    }


function game () {

    for (let i = 0; i < 5; i++) {

        if (pScore == 3) {
            return 'Player win the game!'
        } else if (cScore == 3) {
            return 'Computer win the game'
        } {
            
        }


        let result = playRound(computerSelection() , playerSelection());
        if (result == 'You Win') {
            pScore ++ ;
            console.log('Player:'+ pScore + ' ' + 'Computer:' + cScore )
        } else if (result == 'You Lose') {
            cScore ++
            console.log('Player:'+ pScore + ' ' + 'Computer:' + cScore )
        } else if (result == 'Tie') {
            i--
            console.log('Player:'+ pScore + ' ' + 'Computer:' + cScore )
        }
    } 
    
}





