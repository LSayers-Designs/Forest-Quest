"use strict"
/*
Name: Letisha Rahming
Project Title:  Troll Game
Description:  Script File for the Troll Game: A Sci-Fi/ Fantasy text based choose your adventure game using JS, HTML and CSS.  
event listener (see EHS rpg)
Creation Date:	1/9/2020
Date Completed: In Progress
Last Updated: 1/9/2020
*/

/*GAME SUMMARY
Decision making process for a 'choose your own adventure' type game.  User will be prompted by a dialog box,
based on thier response, they can either win or lose in various ways.*/


//Set up an event listener for the button to trigger the game
document.getElementById("button").addEventListener("click",trollBattle);


/*TROLL BATTLE FUNCTION
Create a function called troll battle based on the event listener to run the game. 
	Then Create the initial prompt question for the user whose answer is stored in a variable called 'action'. For readability of text string(s)for the gamer, \n is used, User input is stored and converted to upper case letters for "===" purposes.

	Create a swtich statement to handle the initial players choice to analyze the action variable.  Use case to describe actions based on user input in the variable action.  
		'Case' branches case has its own variables for menu choices
		'If' statments analyzes the gamers responses based on one choice and/or '||' the other to validate the statment for the if statement to continue into its plot.  Clear any  messages from the page.  Convert any numeric value entered to an integer.
		'Break' is included consistantly to end the action of each case even for default.
		*/

function trollBattle(){
	var action = window.prompt("You are traveling through the forest of Verdes heading towards Luma, when a troll suddenly appears! \nWill you FIGHT the troll? \nWill you RUN from the troll? \nWill you BRIBE the troll?").toUpperCase()

	switch(action){
		case "FIGHT":
			var smart = window.prompt("Are you a valient warrior? (YES or NO)").toUpperCase();
			var strong = window.prompt("Are you stonger than this troll? (YES or NO)").toUpperCase();
			if(smart==="YES" || strong==="YES"){
				document.getElementById("result").innerHTML = "You are mightier than the troll!<br>Your victories will be added to your lore to be sung for generations to come!";
				document.getElementById("death").innerHTML = "";
				document.getElementById("win").play();
			}
			else{
				document.getElementById("death").innerHTML="You have been defeated by the troll!<br> The Goddess of Luma weeps for thee!";
				document.getElementById("result").innerHTML = "";
				document.getElementById("die").play();
			}
			break;
	
		case "RUN":
			var fast = window.prompt("Can you run swiftly? (YES or NO)").toUpperCase();
			if(fast==="YES"){
				document.getElementById("result").innerHTML = "You have outrun the troll. \nHowever now you must find another route to Luma.";
				document.getElementById("death").innerHTML = "";
				document.getElementById("win").play();
			}
			else{
				document.getElementById("death").innerHTML="The troll was able to outrun you!<br> You have been captured!";
				document.getElementById("result").innerHTML = "";
				document.getElementById("die").play();
			}
			break;
		case"BRIBE":
			var coin = window.prompt("The troll demands a fee to continue into the woods unharmed.\nCan youpart with some heavy coin? (YES or NO)").toUpperCase();
			if(coin==="YES"){
				var bank= window.prompt("Enter a numberic value of how much coin will you part with")
				bank = parseInt(bank);
				console.log(bank);
				if(bank > 50){
				document.getElementById("result").innerHTML = "The troll accepts your offer.  However you now have little coin left.";
				document.getElementById("death").innerHTML = "";
				document.getElementById("win").play();
					
				}
				else{
				document.getElementById("death").innerHTML = "The troll scoffs at your bribe and mugs you of all your coin. Sadly, your quest has ended!";
				document.getElementById("result").innerHTML = "";
				document.getElementById("die").play();
				}
			}
			else{
				document.getElementById("death").innerHTML = "The troll mugs you of all your coin. Sadly, your quest has ended!";
				document.getElementById("result").innerHTML = "";
				document.getElementById("die").play();
			}
			break;
		default:
			window.alert("You have three options.  Choose wisely.");
			trollBattle();
			break;
	}
}