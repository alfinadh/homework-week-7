const fs = require('fs');

    fs.readFile('./log.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data);
    });

const content = "Tambahkan Fungsi!";

    fs.writeFile('./log.txt', content, (err) => {
        if (err) console.log(err);
        console.log("Fungsi Berhasil Ditambahkan");
    });


