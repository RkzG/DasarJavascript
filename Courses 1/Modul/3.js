let barang = [
    { nama: "Rinsoo", harga: 5000},
    { nama: "Moonlight", harga: 4000}
]

console.log("Isi Array barang");
console.log(barang);
console.log("Jumlah data = " + barang.length);

console.log("------------------------------------");

//Tambah data baru
barang.push(
    { nama: "Mloto", harga: 1000}
)

console.log("Isi Array barang saat ini");
console.log(barang);
console.log("Jumlah data saat ini = " + barang.length);