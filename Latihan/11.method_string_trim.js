const { parse } = require("path");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Masukkan sebuah kalimat: ", (kalimat) => {
    //Gunakan method trim untuk menghapus spasi diawal dan akhir kalimat 
    const kalimatTrimed = kalimat.trim();
    console.log(`Kalimat setelah di-trim : ${kalimatTrimed}`);
    rl.close();
});