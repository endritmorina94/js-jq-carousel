//Dichiaro una variabile che indica il contenitore delle immagini
var images = $(".images");

//Rilevo l'altezza della prima immagine e la indico in una variabile
var imgHeight = $("#prima").css("height");

//Assegno l'altezza dell'immagine al contenitore
$(images).css("height", imgHeight);


// Indico la freccia destra con una variabile
var arrRight = $(".arrow.right");

//Creo una funzione che si attiva al click della freccia destra
arrRight.click(function() {

    //Dichiaro una variabile che inidica l'immagine attualmente visibile
    var currentImg = $(".images .displayed");

    var currentBtn = $(".btn.active-btn");

    //Le tolgo la classe displayed, quindi la nascondo
    currentImg.removeClass("displayed").fadeOut("slow");

    currentBtn.removeClass("active-btn");

    //Indico l'immagine dopo con una variabile
    var nextImg = currentImg.next();

    var nextBtn = currentBtn.next();

    //Se l'immagine attuale ha la classe last ed è quindi l'ultima
    //tornerà visibile la prima immagine della lista
    if (currentImg.hasClass("last")) {

        $(".images .first").addClass("displayed").fadeIn("slow");

        $(".btn.first").addClass("active-btn");

    //Altrimenti do la classe displayed (rendo quindi visibile), l'immagine dopo
    } else {

        nextImg.addClass("displayed").fadeIn("slow");

        nextBtn.addClass("active-btn");

    }

});


// DI SEGUITO: TUTTO QUELLO CHE C'è SCRITTO SOPRA MA AL CONTRARIO
//PER SLIDEARE LE IMMAGINI ALL'INDIETRO ANZICHè IN AVANTI
var arrLeft = $(".arrow.left");

arrLeft.click(function() {

    var currentImg = $(".images .displayed");
    var currentBtn = $(".btn.active-btn");

    currentImg.removeClass("displayed").fadeOut("slow");
    currentBtn.removeClass("active-btn");


    var prevImg = currentImg.prev();
    var prevBtn = currentBtn.prev();

    if (currentImg.hasClass("first")) {

        $(".images .last").addClass("displayed").fadeIn("slow");
        $(".btn.last").addClass("active-btn");

    } else {

        prevImg.addClass("displayed").fadeIn("slow");
        prevBtn.addClass("active-btn");

    }

});


// BONUS: BOTTONI DELLO SLIDER

//Aggiungo una funzione che si attiva al click di uno dei bottoni
$(".btn").on("click", function() {

    //Stabilisco una variabile che indica l'indice del bottone appena cliccato
    var index = $(this).index();

    //Tolgo la classe active-btn al bottone che la aveva
    $(".btn.active-btn").removeClass("active-btn");

    //Do la classe active-btn al bottone che è stato appena cliccato
    $(this).addClass("active-btn");

    //Tolgo la classe displayed all'immagine che la aveva
    $(".images .displayed").removeClass("displayed").fadeOut("slow");

    //Do la classe displayed all'immagine che ha lo stesso indice del bottone appena cliccato
    $("img").eq(index).addClass("displayed").fadeIn("slow");
})
