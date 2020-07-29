class persegiPanjang{
    constructor(p,l){
        this.panjang = p
        this.lebar = l
    }
    luas = () => {
        return this.panjang * this.lebar
    }
    keliling = () => {
        return 2 * (this.panjang + this.lebar)
    }
}
class Balok extends persegiPanjang{
    constructor(p,l,t){
        super(p,l)
        this.tinggi = t
    }
    luas = () => {
        return ( 2 * this.panjang * this.lebar) + ( 2 * this.panjang * this.tinggi) +
        (2 * this.tinggi * this.lebar)
    }
    volume = () => {
        return this.panjang * this.lebar * this.tinggi
    }
}
let Lemari =  new Balok(10,5,2)
console.log("Luas Lemari = " + Lemari.luas());
console.log("Volume Lemari = " + Lemari.volume());