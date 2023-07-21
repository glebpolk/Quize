const readlineSync = require("readline-sync");
const fs = require("fs");
const Card = require("./Card");
const {EOL} = require("os");

class Reader {
  constructor() {}

  readThemes() {
    const data = fs.readFileSync(
      `${__dirname}/topics/nighthawk_flashcard_data.txt`,
      "utf-8"
    );
    const arr = data.split(EOL);

    const newArr = [];
    for (let i = 0; i < arr.length; i += 2) {
      newArr.push(new Card({quest: arr[i], answer: arr[i + 1]}));
    }
    /* console.log(newArr); */
    return newArr;
  }

  questions() {
    for (let i = 0; i < this.readThemes().length; i += 1) {
      console.log(`Тема: Космос\nВОПРОС: ${this.readThemes()[i].quest}`);
      const name = readlineSync.question("OTBET: ");
      if (name.toLowerCase() === this.readThemes()[i].answer.toLowerCase()) {
        console.log("Правильно");
      } else {
        console.log(
          `Неправильно! \n Правильный ответ: ${this.readThemes()[i].answer}`
        );
      }
    }
  }
}

const rr = new Reader();
console.log(rr.questions());
