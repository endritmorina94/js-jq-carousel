$(document).ready(function(){

    // Indico la freccia destra con una variabile
    var arrRight = $(".arrow.right");

    //Creo una funzione che si attiva al click della freccia destra
    arrRight.click(function() {

        //Dichiaro una variabile che inidica l'immagine attualmente visibile
        var currentImg = $(".images .active");

        //Le tolgo la classe active, quindi la nascondo
        currentImg.removeClass("active");

        //Indico l'immagine dopo con una variabile
        var nextImg = currentImg.next();

        //Se l'immagine attuale ha la classe last ed è quindi l'ultima
        //tornerà visibile la prima immagine della lista
        if (currentImg.hasClass("last")){

            $(".images .first").addClass("active");

        //Altrimenti do la classe active (rendo quindi visibile), l'immagine dopo
        } else {

            nextImg.addClass("active");

        }

    });


    // DI SEGUITO: TUTTO QUELLO CHE C'è SCRITTO SOPRA MA AL CONTRARIO
    //PER SLIDEARE LE IMMAGINI ALL'INDIETRO ANZICHè IN AVANTI
    var arrLeft = $(".arrow.left");

    arrLeft.click(function() {

        var currentImg = $(".images .active");

        currentImg.removeClass("active");

        var prevImg = currentImg.prev();

        if (currentImg.hasClass("first")){

            $(".images .last").addClass("active");

        } else {

            prevImg.addClass("active");

        }

    });

})
