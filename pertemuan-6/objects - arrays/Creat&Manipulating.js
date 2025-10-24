// cara membuat object
let mahasiswa = {
    nama : "Salsabilla salwa sukana",
    umur : 19,
    jurusan : "Teknik Informatika",
    npm : "624C0011",
    alamat :{
        kelurahan : "Mundu", 
        kota : "Cirebon", 
        provinsi : "Jawa Barat"
    }

}

// mengakses properti object
console.log(mahasiswa.nama); // maka yang akan kerluar adalah "Salsabilla salwa sukana" 
console.log(mahasiswa.alamat.kelurahan);// maka yang akan keluar adalah "Mundu"

// mengubah properti object
mahasiswa.jurusan = "Sistem Informasi"; 
console.log(mahasiswa.jurusan); // maka yang akan keluar adalah "Sistem Informasi"

// menambah properto pbject
mahasiswa.email = "624c0011@yahoo.com "; 
console.log(mahasiswa.email); // maka yang akan keluar adalah "

// menghapus properti object
delete mahasiswa.alamat.provinsi; 
console.log(mahasiswa.alamat.provinsi); // maka yang akan keluar adalah undefined