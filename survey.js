const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :)", (nickname) => {
  rl.question("What's an activity you like doing?", (hobby) => {
    rl.question("What do you listen to while doing that?", (music) => {
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)", (mealOfDay) => {
        rl.question("What's your favourite thing to eat for that meal?", (food) => {
          rl.question("Which sport is your absolute favourite", (sport) => {
            rl.question("What is your superpower? In a few words, tell us what you are amazing at!", (superpower) => {
              console.log(`My name is ${nickname}! My hobby is ${hobby}. My favorite food to eat is ${food} at ${mealOfDay}. I love to go out and play ${sport} or exercise my ability to ${superpower}. My favorit music is ${music}.`);
              rl.close();
            });
          });
        });
      });
    });
  });
});