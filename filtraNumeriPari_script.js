let filtraNumeriPari = n_i =>{
    let nPari = n_i.filter(n => n % 2 == 0);
    console.log(nPari);
   
}
let es_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
filtraNumeriPari(es_array);