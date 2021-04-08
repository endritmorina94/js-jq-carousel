// Indico la freccia destra con una variabile
var arrRight = $(".arrow.right");

//Creo una funzione che si attiva al click della freccia destra
arrRight.click(function() {

    //Dichiaro una variabile che inidica l'immagine attualmente visibile
    var currentImg = $(".images .active");

    var currentBtn = $(".btn.active-btn");

    //Le tolgo la classe active, quindi la nascondo
    currentImg.removeClass("active");

    currentBtn.removeClass("active-btn");

    //Indico l'immagine dopo con una variabile
    var nextImg = currentImg.next();

    var nextBtn = currentBtn.next();

    //Se l'immagine attuale ha la classe last ed è quindi l'ultima
    //tornerà visibile la prima immagine della lista
    if (currentImg.hasClass("last")){

        $(".images .first").addClass("active");

        $(".btn.first").addClass("active-btn");

    //Altrimenti do la classe active (rendo quindi visibile), l'immagine dopo
    } else {

        nextImg.addClass("active");

        nextBtn.addClass("active-btn");

    }

});


// DI SEGUITO: TUTTO QUELLO CHE C'è SCRITTO SOPRA MA AL CONTRARIO
//PER SLIDEARE LE IMMAGINI ALL'INDIETRO ANZICHè IN AVANTI
var arrLeft = $(".arrow.left");

arrLeft.click(function() {

    var currentImg = $(".images .active");
    var currentBtn = $(".btn.active-btn");

    currentImg.removeClass("active");
    currentBtn.removeClass("active-btn");


    var prevImg = currentImg.prev();
    var prevBtn = currentBtn.prev();

    if (currentImg.hasClass("first")){

        $(".images .last").addClass("active");
        $(".btn.last").addClass("active-btn");

    } else {

        prevImg.addClass("active");
        prevBtn.addClass("active-btn");

    }

});




// BONUS: BOTTONI DELLO SLIDER

var btn
