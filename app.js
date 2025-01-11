const search = () =>{
    const searchbox = document.getElementById("search-item").ariaValueMax.toUpperCase();
    const storeitem = document.getElementById("manga-list")
    const manga = document.querySelectorAll(".naruto-front")

    for(var i=0; i < manga.length; i++){
        let match =manga[i].querySelectorAll(".naruto-front")[0];

       /*if(match){
            let textvalue.toUpperCase().indexOf(searchbox) > -1 {
                product[i].style.display ="";

            }
            else{
                product[i].style.display = "none";

            } */
        }
    }
}