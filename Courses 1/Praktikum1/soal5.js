class lingkaran{
    constructor(j){
        this.jari_jari = j;
    }
    luasLingkaran(){
        return 3.14 * Math.pow(this.jari_jari,2)
    }
    kelilingLingkaran(){
        return 3.14*this.jari_jari*2
    }
}

class bola extends lingkaran{
    constructor(j,d){
        super(j)
        this.diameter = d
    }
    volume(){
        return 4/3*3.14*Math.pow(this.jari_jari,3)
    }
    luasPermukaan(){
        return 4 * super.luasLingkaran()
    }
}

class kerucut extends lingkaran{
    constructor(j,t){
        super(j);
        this.tinggi = t
    }


    volume(){
        return 1/3*super.luasLingkaran()*this.tinggi;
    }
    sisiPelukis(){
        return Math.pow(Math.pow(this.jari_jari,2)+Math.pow(this.tinggi,2),1/2);
    }
    luasPermukaan(){
        return super.luasLingkaran() + (3.14*this.jari_jari*this.sisiPelukis());   
    }
    luasSelimut(){
        return 3.14*this.jari_jari*this.sisiPelukis();
    }
}

class tabung extends lingkaran{
    constructor(j,t){
        super(j)
        this.tinggi = t
    }
    volume(){
        return super.luasLingkaran() * this.tinggi
    }
    luasSelimut(){
        return super.kelilingLingkaran()*this.tinggi
    }
    luasPermukaan(){
        return 2*super.luasLingkaran()*this.luasSelimut()
    }
}
console.log("----------LINGKARAN----------")
const l = new lingkaran(10)
console.log("Luas lingkaran = " + l.luasLingkaran());
console.log("Keliling lingkaran = " + l.kelilingLingkaran());
console.log("----------TABUNG----------")
const t = new tabung(7.5,50)
console.log("Volume tabung = " + t.volume())
console.log("Luas Selimut tabung = " + t.luasSelimut())
console.log("Luas Permukaan tabung = " + t.luasPermukaan())
console.log("----------KERUCUT----------")
const k = new kerucut(10,40)
console.log("Volume Kerucut = " + k.volume());
console.log("Luas Permukaan Kerucut = " + k.luasPermukaan());
console.log("Luas Selimut Kerucut = " + k.luasSelimut());
console.log("----------BOLA----------")
const b = new bola(15,30)
console.log("Luas permukaan bola = "+b.luasPermukaan())
console.log("Volume bola "+b.volume())
