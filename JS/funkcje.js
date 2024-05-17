function pokaz(id) {
    var tresc = "";
    switch (id) {
        case 2:
            tresc += pokazGalerie();
            break;
        case 3:
            tresc += pokazPost();
            break;
        case 4:
            tresc += pokazKontakt();
            break;
        default:
            tresc += pokazO();
    }
//pobierz element o wskazanym id i ustaw jego nową zawartość:
    document.getElementById('blok').innerHTML = tresc;
}

function pokazO() {
    var tresc = '<h2><br />Pierwsze kroki</h2> ';
//operator += uzupełnia łańcuch kolejną porcją znaków:
    tresc += '<p> W aplikacjach typu SPA ......</p>' +
        '<p class="srodek"><img src="images/baner.jpg" alt="Zdjęcie" /></p>' +
        '<article><h2>Wady SPA</h2><p>' +
        ' Czas wytworzenia oraz nakład pracy ... </p></article>';
//przekaż wynik – gotową zawartość – do miejsca wywołania funkcji:
    return tresc;
}

function pokazGalerie() {
    var tresc = '<h2><br />Moja galeria</h2>';
    tresc += ' <div class="galeria">';
//wygeneruj kod HTML z obrazami za pomocą pętli for:
    for (let i = 1; i <= 10; i++) {
        //var source = "../zdjecia/zdjecia/obraz" + i.toString() + ".JPG";
        //tresc += '<div class="slajd"> <img src= ></div>';
    }
    return tresc + '</div>';
}

function pokazKontakt() {
    var tresc = '<h2><br />Kontakt</h2>';
//uzupełnij treść:
    tresc += "Coś tam coś tam";
    return tresc;
}

function pokazPost() {
//funkcja generuje kod formularza – dane wpisane w odpowiednie pola przez
//użytkownika zostaną przekazane mailem na wskazany adres, ale najpierw po
//zajściu zdarzenia submit (wyślij) – zostanie wywołana funkcja pokazDane()
    tresc = '<h2><br />Dodaj post</h2>';
    tresc += '<article class="srodek" ><form action="mailto:b.panczyk@pollub.pl" method = "post" onsubmit = "return pokazDane();" > ' +
        'Twój email:<br /> <input type="email" name="email" id="email" required / > < br / > ' +
        // dodaj kolejne 2 pola formularza
        'Komentarz: <br /><textarea rows="3" cols="20" id="wiadomosc" name = "wiadomosc" required > < /textarea>' +
        '<br /> <input type="submit" name="wyslij" value="Wyślij" />' +
        '</form></article>';
    return tresc;
}

function pokazDane() {
//Funkcja zbiera dane wpisane w pola formularza i wyświetla okienko
//typu confirm do zatwierdzenia przez użytkownika:
    var dane = "Następujące dane zostaną wysłane:\n";
    dane += "Email: " + document.getElementById('email').value + "\n";
// uzupełnij dane ...
    return window.confirm(dane);
}