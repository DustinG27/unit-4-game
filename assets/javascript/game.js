$(document).ready(function() {
  // random numbers generated into variables

  var random = Math.floor(Math.random() * 101 + 19);
  var crystal1 = Math.floor(Math.random() * 12 + 1);
  var crystal2 = Math.floor(Math.random() * 12 + 1);
  var crystal3 = Math.floor(Math.random() * 12 + 1);
  var crystal4 = Math.floor(Math.random() * 12 + 1);

  console.log(crystal1);
  console.log(crystal2);
  console.log(crystal3);
  console.log(crystal4);

  // variables for wins losses and damage output

  var wins = 0;
  var loses = 0;
  var damage = 0;

  // attach the random numbers to their proper id's

  $("#health").text("Health: " + random);
  $("#you-win").text("Heir of Fire Destroyed: " + wins);
  $("#you-died").text("You died: " + loses);
  $("#total-damage").text("Damage: " + damage);

  // reset fucntiopn for the game

  function reset() {
    damage = 0;
    random = Math.floor(Math.random() * 101 + 19);
    $("#health").text("Health: " + random);
    crystal1 = Math.floor(Math.random() * 12 + 1);
    crystal2 = Math.floor(Math.random() * 12 + 1);
    crystal3 = Math.floor(Math.random() * 12 + 1);
    crystal4 = Math.floor(Math.random() * 12 + 1);
    $("#total-damage").text("Damage: " + damage);
  }

  function destroyed() {
    loses++;
    $("#you-died").text("You died: " + loses);
    reset();
  }

  function embered() {
    wins++;
    $("#you-win").text("Heir of Fire Destroyed: " + wins);
    reset();
  }

  // functioning clickable crystals that add to the respective score

  $(".soul").on("click", function() {
    damage = damage + crystal1;
    $("#total-damage").text("Damage: " + damage);
    if (damage === random) {
      embered();
    } else if (damage > random) {
      destroyed();
    }
  });

  $(".spear").on("click", function() {
    damage = damage + crystal2;
    $("#total-damage").text("Damage: " + damage);
    if (damage === random) {
      embered();
    } else if (damage > random) {
      destroyed();
    }
  });

  $(".weapon").on("click", function() {
    damage = damage + crystal3;
    $("#total-damage").text("Damage: " + damage);
    if (damage === random) {
      embered();
    } else if (damage > random) {
      destroyed();
    }
  });

  $(".breath").on("click", function() {
    damage = damage + crystal4;
    $("#total-damage").text("Damage: " + damage);
    if (damage === random) {
      embered();
    } else if (damage > random) {
      destroyed();
    }
  });
});
