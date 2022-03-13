var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
if(playerHealth > 0) {
    console.log("Your player is still alive!");
}

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
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

fight();