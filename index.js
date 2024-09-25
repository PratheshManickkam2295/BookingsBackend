// ASYNCHRONOUS CODE

const fs = require('fs/promises');
async function createFile() {
  try {
    const content = new Date().toString();
    await fs.writeFile('./files/test.txt', content);
  } catch (err) {
    console.log(err);
  }
}
createFile();

// Create a filename with current timestamp

const fs = require("fs");
const content = new Date().toString().replace(/[:.]/g,'-');
const path = `./files/${content}.txt`;

try {
  // files written successfully
  fs.writeFileSync(path, content);
  // Read the same file
  fs.readFile(path, "utf8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data)
    }
  });
} catch (err) {
  console.log(err);
}

// creating node application
console.log(`Hello Node.js v${process.versions.node}!`);

async function createFile() {
  try {
    const content = new Date().toString();
    await fs.writeFile("./files/test.txt", content);
    console.log("Hey all");
  } catch (err) {
    console.log(err);
  }
}
createFile();