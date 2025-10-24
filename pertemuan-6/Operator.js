// Operator Aritmatika (+ , - , * , / , % )

let tambah = 10 + 5 ; 
let kurang = 11 - 4; 
let kali = 5 * 2 ;
let bagi = 20 / 4; 
let sisabagi = 10 % 3; 

console.log("Hasil Penjumlahan : " + tambah);
console.log("Hasil Pengurangan : " + kurang);
console.log("Hasil Perkalian : " + kali);
console.log("Hasil Pembagian : " + bagi);
console.log("Hasil Modulus : " + sisabagi);


// Operator perbandingan ( > , < , >= , <= , == , != )

let LebihBesar = 10 > 5 ;
let LebihKecil = 5 < 10 ;
let LebihBesarSamaDengan = 10 >= 10 ;
let LebihKecilSamaDengan = 5 <= 10 ;
let SamaDengan = 10 == 10 ;
let TidakSamaDengan = 10 != 5 ;

console.log("Bilangan 10 Lebih Besar dari 5 adalah : " + LebihBesar);
console.log("Bilangan 5 Lebih Kecil dari 10 adalah : " + LebihKecil);
console.log("Bilangan 10 Lebih Besar Sama Dengan 10 adalah : " + LebihBesarSamaDengan);
console.log("Bilangan 5 Lebih Kecil Sama Dengan 10 adalah : " + LebihKecilSamaDengan);
console.log("Bilangan 10 Sama Dengan 10 adalah : " + SamaDengan);
console.log("Bilangan 10 Tidak Sama Dengan 5 adalah : " + TidakSamaDengan);

// Operator Logika ( && , || , ! )

let dan = (10 > 5) && (5 < 10) ;
let atau = (10 > 5) || (5 > 10) ;
let tidak = !(10 > 5) ;

console.log("Bahwa 10 > 5 dan 5 < 10 adalah : " + dan)
console.log("Bahwa 10 > 5 atau 5 > 10 adalah : " + atau)
console.log("Negasi dari 10 > 5 adalah : " + tidak)