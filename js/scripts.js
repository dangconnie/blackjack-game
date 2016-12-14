// JS, wait for the DOM
$(document).ready(function(){
// --------------------------
// ---------Globals----------
// --------------------------
	var theDeck = [];
	var playersHand = [];
	var dealersHand = [];
	// Need a way to make the deck
	// Make the deck out of her to stop recreating the deck every time we call the shuffle function
	createDeck();

	//Get deal working
	$('.deal-button').click(function(){
		//Shuffle the new deck
		shuffleDeck();
		// Add card 0 to playersHand
		playersHand.push(theDeck[0]);
		// Add card 1 to dealersHand
		dealersHand.push(theDeck[1]);
		// Add card 2 to playersHand
		playersHand.push(theDeck[2]);
		// Add card 3 to dealersHand
		dealersHand.push(theDeck[3]);

	
		// Put the first card in the playersHand(what, who, slot)
		placeCard(playersHand[0], 'player', 'one');
		// Put the second card in the playersHand(what, who, slot)
		placeCard(playersHand[1], 'player', 'two');
		// Put the first card in the dealersHand(what, who, slot)
		placeCard(dealersHand[0], 'dealer', 'one');
		// Put the second card in the dealersHand(what, who, slot)
		placeCard(dealersHand[1], 'dealer', 'two');

		calculateTotal('player', playersHand);
		calculateTotal('dealer', dealersHand);

	});

	// Get hit working
	$('.hit-button').click(function(){

	});

	// Get stand working
	$('.stand-button').click(function(){

	});




// Update the DOM with the player cards
// Put the card in the right place
// Update the total
// Check if the player busted
// Run the dealer “hit” until it has more than 16
// Once dealer has more than 16, checkwin
// Post a message after checkwin

// Set messages after game over
// The table/game looks like Rob made it. Change this.
// What about those stupid 11, 12, 13?
// What about Aces?
// The player can hit forever?
// There is no win counter/bet system
// There is no "deck" to draw from.
// There is no delay on showing the cards... it's instant. 
// You can see the dealers 2nd card on deal. That's unfair (to the house).




	function createDeck(){
		// Fill the deck with:
		// -52 cards
		// --4 suits(hears, spades, diamonds, clubs)
		// ---1-13(11 = J, 12 = Q, 13 + K)
		var suits = ['h', 's', 'd','c'];
		// Loop through all 4 suits (suits array)
		for(let s = 0; s < suits.length; s++){
			// Loop through all 13 cards for each suits
			for(let c = 1; c <= 13; c++){
				theDeck.push(c + suits[s]);
			}
		}
		console.log(theDeck);
	}

	function shuffleDeck(){
		for(let i = 0; i < 9001; i++){
			var card1ToSwitch = Math.floor(Math.random() * theDeck.length);
			var card2ToSwitch = Math.floor(Math.random() * theDeck.length);
			var temp = theDeck[card1ToSwitch]; 
			theDeck[card1ToSwitch] = theDeck[card2ToSwitch];
			theDeck[card2ToSwitch] = temp;
		}
	}
	function placeCard(whatCard, who, whichSlot){
		//We need to target the parameters from above
		var classToTarget = '.'+who+'-cards .card-'+whichSlot;
		// console.log(classToTarget);
		//This will update the DOM
		$(classToTarget).html('<img src="images/'+whatCard+'.png">');
	}

	function calculateTotal(who, theirHand){
		var cardValue = 0;
		var total = 0;
		for(let i=0; i<theirHand.length; i++){
			// -1 because it is the end of the array and it will not include the last element of the array. slice (0, 1) would not include one.
			cardValue = Number(theirHand[i].slice(0, -1));
			console.log(cardValue);
			total += cardValue;
		}
		var classToTarget = '.'+who+'-total-number';
		$(classToTarget).text(total);
	}

	

});
