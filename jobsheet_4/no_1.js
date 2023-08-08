const { parse } = require("path");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Masukkan sebuah Kalimat: ", (inputString) => {
    console.log(`Panjang kalimat: ${inputString.length}`);
    rl.close();
});