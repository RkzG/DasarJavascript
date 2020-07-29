let bb = 90
let tb = 1.7

Kondisi=()=>{
    return bb / (tb*tb)
}
if (Kondisi() < 18.5){
    console.log("Status: Kekurangan berat badan")
}else if (Kondisi() >= 18.5 && Kondisi <= 24.9){
    console.log("Status: Normal(Ideal)")
}else if (Kondisi() >= 25.0 && Kondisi <= 29.9){
    console.log("Status: Kelebihan berat badan")
}else if (Kondisi() >= 30.0){
    console.log("Status: Kegemukan(Obesitas)")
}else{
    console.log("Error")
}