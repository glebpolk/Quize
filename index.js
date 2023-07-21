const {EOL} = require("os");
const fs = require("fs/promises");
const readlineSync = require("readline-sync");

function getData(path, code = "utf-8") {
  const text = fs
    .readFile(path, code)
    .then(d => d)
    .then(d => d.split(EOL).filter(e => e !== ""))
    .then(arr => {
      const resultArr = [];

      arr.forEach((e, i, array) => {
        const obj = {};
        obj.answer = array.pop();
        obj.question = array.pop();
        resultArr.push(obj);
      });
      return resultArr;
    })
    .then(d =>
      d.forEach(e => {
        const userAnswer = readlineSync.question(e.question);
        if (userAnswer.trim().toLowerCase() === e.answer) {
          console.log("Верно👍");
        } else {
          console.log(
            `Правильный ответ: ${e.answer}. Ваш ответ: ${userAnswer}`
          );
        }
      })
    );
}
// const topics = ["cat", "dog"];

// const indexTheme = readlineSync.keyInSelect(topics, "Choose theme");
(() => {
  const topics = ["nighthawk", "otter", "raccoon"];
  const index = readlineSync.keyInSelect(topics, "Choose theme");
  getData(`${__dirname}/topics/${topics[index]}_flashcard_data.txt`);
})();
