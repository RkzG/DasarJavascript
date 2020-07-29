let a = 4
const r = 3
const n = 10 
let total = 0
//mencari suku ke 10

const suku = a*(Math.pow(r,n)-1)/(r-1);

for(i=1;i<=n;i++){
    total = a +total
    if(i<n){
        if(a===a*i){
            console.log(a)
        }
        a=a*r
        console.log(a);
    }else{
        console.log("Total hasil dari geometri = " + total)
    }
}