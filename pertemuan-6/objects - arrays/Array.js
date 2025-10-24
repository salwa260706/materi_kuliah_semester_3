// membuat array
let buah = [ "apel", "jeruk", "mangga", "pisang" ];

// mengakses elemen array, indeks dimulai dari 0
console.log(buah[1]); // maka yang akan keluar adalah 'jeruk '

// mengubah elemen array 
buah[1] = "semangka"; // mengubah elemen yang berindeks 1
buah.push("durian"); // menambah elemen di akhir array
console.log(buah); // maka yang akan keluar adalah [ 'apel', 'semangka', 'mangga', 'pisang', 'durian' ]

// menghapus elemen array 
buah.pop(); // menghapus elemen terakhir
console.log(buah); // maka yang akan keluar adalah [ 'apel', 'semangka', 'mangga', 'pisang' ]
buah.shift(); // menghapus elemen pertama
console.log(buah); // maka yang akan keluar adalah [ 'semangka', 'mangga', 'pisang' ]
buah.splice(1, 2); // menghapus 2 elemen mulai dari indeks 1
console.log(buah); // maka yang akan keluar adalah [ 'semangka' ]

// mendapatkan panjang array
console.log(buah.length); // maka yang akan keluar adalah 1