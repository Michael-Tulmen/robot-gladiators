// Game States
// "WIN" - Player robot has defeated all enemy-robots
//  * Fight all enemy-robots
//  * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less

//wrap all of this in a start game function
//if player dies or all enemies are defeated, employ endgame function
window.alert("Welcome to Robot Gladiators!");
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

console.log(enemyNames);
console.log(enemyNames.legnth);
console.log(enemyNames[0]);
console.log(enemyNames[3]);

var fight = function(enemyName) {
    while (playerHealth > 0 && enemyHealth > 0) {
      // ask player if they'd like to fight or run
      var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
  
      // if player picks "skip" confirm and then stop the loop
      if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
  
        // if yes (true), leave fight
        if (confirmSkip) {
          window.alert(playerName + ' has decided to skip this fight. Goodbye!');
          // subtract money from playerMoney for skipping
          playerMoney = Math.max(0, playerMoney -10);
          console.log("playerMoney", playerMoney);
          break;
        }
      }
  
      // remove enemy's health by subtracting the amount set in the playerAttack variable
      //generates random damage value based on player's attackpower
      var damage = randomNumber(playerAttack - 3, playerAttack);

      enemyHealth = Math.max(0, enemyHealth - damage);
      console.log(
        playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
      );
  
      // check enemy's health
      if (enemyHealth <= 0) {
        window.alert(enemyName + ' has died!');
  
        // award player money for winning
        playerMoney = playerMoney + 20;
  
        // leave while() loop since enemy is dead
        break;
      } else {
        window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
      }
  
      // remove players's health by subtracting the amount set in the enemyAttack variable
      //generates a random damage value based on enemy attack power
      var damage = randomNumber(enemyAttack - 3, enemyAttack);

      playerHealth = Math.max(0, playerHealth - damage);
      console.log(
        enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.'
      );
  
      // check player's health
      if (playerHealth <= 0) {
        window.alert(playerName + ' has died!');
        // leave while() loop if player is dead
        break;
      } else {
        window.alert(playerName + ' still has ' + playerHealth + ' health left.');
      }
    }
  };
  //function to start a new game
  var startGame = function (){
      //reset stats at beginning of new game
      playerHealth = 100;
      playerAttack = 10;
      playerMoney = 10;
  // fight each enemy-robot by looping over them and fighting them one at a time
  for (var i = 0; i < enemyNames.length; i++) {
    // if player is still alive, keep fighting
    if (playerHealth > 0) {
      // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
      window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));
  
      // pick new enemy to fight based on the index of the enemyNames array
      var pickedEnemyName = enemyNames[i];
  
      // reset enemyHealth before starting new fight
      enemyHealth = randomNumber(40, 60);
  
      // use debugger to pause script from running and check what's going on at that moment in the code
      // debugger;
  
      // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
      fight(pickedEnemyName);
      //if we're not at the last enemy in the array
      if (playerHealth > 0 && i < enemyNames.length - 1) {
        var storeConfirm = window.confirm("The fight is over, visit the secret shop before next round?");
        //if yes take to shop
        if(storeConfirm){  
        shop();
        }
      }
    }
    // if player isn't alive, stop the game
    else {
      window.alert('You have lost your robot in battle! Game Over!');
      break;
    }
   }
   endGame();
 
  };
var endGame = function() {
    // if player is alive at the end of the game they win
    if (playerHealth > 0) {
        window.alert("Great Job, you've survived the game! You now have a score of " + playerMoney + "." );
    }
    else {
        window.alert("You've lost your robot in battle");
    }
// ask player if they'd like to play again
var playAgainConfirm = window.confirm("Would you like to play again?");

if (playAgainConfirm) {
    //restart game
    startGame();
}
else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
 }
};

var shop = function() {
    //ask player what they'd like to do
    var shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.");
    switch (shopOptionPrompt) {
        case "REFILL": //in case of all caps
        case "refill":
            if (playerMoney >= 7) {
            window.alert("Refilling player's health by 20 for 7 coin.");
            //increase health and decrease money
            playerHealth = playerHealth + 20;
            playerMoney = playerMoney - 7;
    } 
    else {
        window.alert("Insufficient Coin!")
    }
            break;
        case "UPGRADE": //in case of all caps     
        case "upgrade":
            if (playerMoney >= 7) {
            window.alert("Upgrade attack power by 6 for 7 coin");
            //increase attack and decrease money    
            playerAttack = playerAttack +6
            playerMoney = playerMoney -7
}
else {
    window.alert("Insufficient Coin!")
}
            break;
        case "LEAVE": //in case of all caps    
        case "leave":
            window.alert("Leaving Secret Shop");
            //do nothing, end function
            break;
        default:
            window.alert("You did not pick a valid option. Try again");
            //recall shop() pick valid option
            shop();
            break;    
    }
};
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1)) + min;

    return value;
}
  //start the game when the page loads
startGame();
