// Game States
// "WIN" - Player robot has defeated all enemy-robots
//  * Fight all enemy-robots
//  * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
if(playerHealth > 0) {
    console.log("Your player is still alive!");
}

//Array of enemy names
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

//fight function
var fight = function(enemyName) {
    window.alert("Welcome to Robot Gladiators!");
    var promptFight = window.prompt("Would you like to Fight or Skip this battle? Enter 'FIGHT' or 'SKIP to choose.");
    if (promptFight === 'fight' || promptFight === 'FIGHT' || promptFight === 'Fight') {   
    enemyHealth = enemyHealth - playerAttack;
    console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
    if(enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
    playerHealth = playerHealth -enemyAttack;
    console.log(enemyName + ' attacked ' + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
    if (playerHealth <=0) {
        window.alert(playerName + " has died!");
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health left.")
    }
    } else if (promptFight === 'skip' || promptFight === 'SKIP' ||  promptFight === 'Skip'){
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            playerMoney = playerMoney - 2;
        }
    } else {
        fight();
    }
};


for(var i=0 ; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}
//fight();