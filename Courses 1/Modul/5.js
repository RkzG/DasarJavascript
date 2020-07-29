let siswa = [
    { nama_Depan: "Jack" , nama_Belakang: "Ma"},
    { nama_Depan: "Johny" , nama_Belakang: "English"},
    { nama_Depan: "John" , nama_Belakang: "Cena"},
]

//Menampilkan nama lengkap dari array
siswa.map(
    (sis,index)=> {
        console.log(sis.nama_Depan + " " + sis.nama_Belakang);
    }
)