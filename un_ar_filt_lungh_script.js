let array1=["cane","gatto","pesciolino rosso", "uccellino","tartaruga"]
let array2=["squalo martello","volpe artica","lupo","tigre","leone"]

function filtraPerLunghezza(ar1,ar2,lungh_min) {
    let ar_conc = ar1.concat(ar2);
    let ar_filt = ar_conc.filter(parola => parola.length >= lungh_min);
    return ar_filt
}
lista_filtrata = filtraPerLunghezza(array1,array2,8)
console.log(lista_filtrata)