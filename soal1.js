// menghitung luas dan keliling persegi
const persegi = require ('./persegi');

const s1Persegi = 5;
const s2Persegi = 5;

const luasPersegi = persegi.luasPersegi(s1Persegi, s2Persegi);
const kelilingPersegi = persegi.kelilingPersegi(s1Persegi);

console.log('Bangun datar persegi dengan ukuran masing-masing sisi 5cm memiliki luas bangun datar persegi yaitu', luasPersegi, 'dan keliling sebesar', kelilingPersegi);

// menghitung luas dan keliling persegi panjang

const persegiPanjang = require ('./persegipanjang');

const panjangPersegi = 4;
const lebarPersegi = 2;

const luasPersegiPanjang = persegiPanjang.luasPersegiPanjang(panjangPersegi, lebarPersegi);
const kelilingPersegiPanjang = persegiPanjang.kelilingPersegiPanjang(panjangPersegi, lebarPersegi);

console.log('Keliling dari persegi panjang dengan panjang sisi 4cm dan lebar 2cm adalah', luasPersegiPanjang, 'dan luas bangun datar yaitu', kelilingPersegiPanjang);





