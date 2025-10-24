// kita bisa iterate atau melakukan perulangan pada properti objek menggunakan beberapa cara, diantaranya:

// 1. menggunakan for...in loop
let mahasiswa ={
    nama : "Salsabilla salwa sukana",
    umur : 19,
    jurusan : "Teknik Informatika",
    npm : "624C011"
}

for (let key in mahasiswa){
    console.log(key + " : " + mahasiswa[key]);
}

// 2. iterasi array of objek menggunakan for...of loop
let buah =[ "apel", "jeruk", "mangga", "pisang" ];
for (let i = 0; i < buah.length; i++){
    console.log(buah[i]);
}

// 3. menggunakan forEach method

buah.forEach(function(buah){
    console.log(buah);
});

//4. menggunakan map method

let uppercaseBuah = buah.map(function(buah){
    return buah.toUpperCase();
});
console.log(uppercaseBuah);