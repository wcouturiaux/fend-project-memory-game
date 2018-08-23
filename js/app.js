/*
 * Create a list that holds all of your cards
 */


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

//Global Variable Declarations
let openCardList = [];
let count = 0;
let numMatches = 0;


function flipCard(event){
	if (event.target.className === 'card'){
		event.target.className = 'card open show';
	}
}

function openCards(event){
	openCardList.push(event.target.innerHTML.toString());
	if (openCardList.length === 1){
		numMoves();
	}
	if (openCardList.length === 2){
		if (openCardList[0] === openCardList[1]){
			 [].forEach.call(document.querySelectorAll('.card.open.show'),function(item){item.className='card match';});
			 openCardList.length = 0;
			 numMatches += 1;
		}
		else{
			setTimeout(function(){[].forEach.call(document.querySelectorAll('.card.open.show'),function(item){item.className="card";});},1000);
			openCardList.length = 0;
		}
	}
}

function numMoves(){
	count +=1;
	document.querySelector('.moves').textContent=count;
}

function starRemoval(event){
	stars = document.querySelectorAll('.fa-star');
	starCount = count;
	switch (starCount) {
		case 10:
			stars[stars.length-1].className='fa fa-star-o';
			break;
		case 13:
			stars[stars.length-1].className='fa fa-star-o';
			break;
		case 16:
			stars[stars.length-1].className='fa fa-star-o';
			break;
		case 19:
			stars[stars.length-1].className='fa fa-star-o';
			break;
		default:
			break;
	}
}


document.querySelector('.deck').addEventListener('click', function(event){event.preventDefault(); flipCard(event); openCards(event); starRemoval(event);})
document.querySelector('.score-panel').addEventListener('click', function(){location.reload();;})


