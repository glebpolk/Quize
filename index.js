const {EOL} = require("os");
const fs = require("fs/promises");

async function fn(path, code = "utf-8") {
  const text = await fs.readFile(path, code);
  const splitTxt = text.split(EOL).filter(e => e !== "");
  function creatObj(arr) {
    const resultArr = [];
    const obj = {};
    arr.forEach((e, i) => {
      if (i % 2) {
        obj.answer = e;
      } else {
        obj.question = e;
      }
      resultArr.push(obj);
    });
    return resultArr;
  }

  const cardArr = creatObj(splitTxt);
  console.log(cardArr);
}

fn(`${__dirname}/topics/nighthawk_flashcard_data.txt`);
