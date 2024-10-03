const fs = require("fs");
const path = require("path");

const logsDirectory = path.join(__dirname, "Logs");

function removeLogs() {
  if (fs.existsSync(logsDirectory)) {
    const files = fs.readdirSync(logsDirectory);

    console.log("Files to delete:");
    files.forEach((file) => {
      console.log(file);
      fs.unlinkSync(path.join(logsDirectory, file));
    });

    process.chdir(__dirname);

    fs.rmdirSync(logsDirectory);
    console.log(`Directory 'Logs' removed.`);
  } else {
    console.log(`Directory 'Logs' does not exist.`);
  }
}

module.exports = { removeLogs };
