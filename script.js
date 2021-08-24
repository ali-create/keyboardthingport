const main = {
  key: document.querySelector(".key"),
  keyContainer: document.querySelector(".keyContainer"),
  scoreElem: document.querySelector(".score"),
  bar: document.querySelector(".bar"),
  highScore: document.querySelector(".highScore"),
  barVal: 100,
  score: 0,
  chars: [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "n",
    "m",
    "o",
    "p",
    "q",
    "r",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ],
  curLetter: "a",
  random: function (min, max) {
    return Math.trunc(Math.random() * (max - min + 1) + min);
  },
  scores: [],
};
document.addEventListener("keypress", function (e) {
  if (e.key === main.curLetter) {
    main.curLetter = main.chars[main.random(0, main.chars.length - 1)];
    main.key.textContent = main.curLetter;
    main.score++;
    main.scoreElem.textContent = "KPS: " + String(main.score);
    main.barVal = 100;
    let test = setInterval(function () {
      main.barVal--;
      main.bar.value = main.barVal;
    }, 10);
    setTimeout(function () {
      clearTimeout(test);
      main.score--;
      main.scoreElem.textContent = "KPS: " + String(main.score);
      main.scores.push(main.score + 1);
      main.highScore.textContent =
        "Highscore: " + Math.max(...main.scores) + " KPS";
    }, 1000);
  }
});
