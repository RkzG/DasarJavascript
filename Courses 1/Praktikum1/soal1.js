class tanah{
    constructor(p,l){
        this.panjang = p
        this.lebar = l
    }
    luas(){
        return this.panjang * this.lebar
    }
}
class harga extends tanah{
    constructor(p,l,h,t){
    super(p,l)
    this.harga = h
    this.pajak = t
}
    hargaTanah(){
        return super.luas() * this.harga
    }
    biayaPajak(){
        return this.hargaTanah() * this.pajak
    }
    pembayaran(){
        return this.hargaTanah() + this.biayaPajak()
    }
}
let hasil = new harga(20.5,30,1500000,15/100)
console.log("Total yang harus dibayar : " + hasil.pembayaran());