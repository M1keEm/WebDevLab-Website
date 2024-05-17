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
    var tresc = '<h2><br>Pierwsze kroki</h2> ';
//operator += uzupełnia łańcuch kolejną porcją znaków:
    tresc += '<p> W aplikacjach typu SPA ......</p>' +
        '<p class="srodek"><img src="images/baner.jpg" alt="Zdjęcie" /></p>' +
        '<article><h2>Wady SPA</h2><p>' +
        ' Czas wytworzenia oraz nakład pracy ... </p></article>';
//przekaż wynik – gotową zawartość – do miejsca wywołania funkcji:
    return tresc;
}

function pokazGalerie() {
    var tresc = '<h2><br>Moja galeria</h2>';
    tresc += ' <div class="galeria">';
//wygeneruj kod HTML z obrazami za pomocą pętli for:
    for (let i = 1; i <= 10; i++) {
        var source = "zdjecia/zdjecia/obraz" + i + ".JPG";
        tresc += '<div class="slajd"><img src="' + source + '" alt="obraz ' + i + '"></div>';
    }
    return tresc + '</div>';
}

function pokazKontakt() {
    var tresc = '<h2><br>Kontakt</h2>';
//uzupełnij treść:
    tresc += "Coś tam coś tam";
    return tresc;
}

function pokazPost() {
//funkcja generuje kod formularza – dane wpisane w odpowiednie pola przez
//użytkownika zostaną przekazane mailem na wskazany adres, ale najpierw po
//zajściu zdarzenia submit (wyślij) – zostanie wywołana funkcja pokazDane()
    var tresc = '<h2><br>Dodaj post</h2>';
    tresc += '<article class="srodek"><form action="mailto:michalbanaszek03@gmail.com" method="post" onsubmit="return pokazDane();">' +
        'Twój email:<br><input type="email" name="email" id="email" required><br>' +
        'Imię i nazwisko: <br><input type="text" name="imie" id="imie" required><br>' +
        'Telefon: <br><input type="tel" name="phone" id="phone" pattern="[0-9]{9}" maxlength="9" minlength="9" title="Prosze wprowadzic nr telefonu" required><br>' +
        '<br>Zainteresowania: <br><input type="checkbox" name="interests" id="music" value="muzyka"><label for="music">Muzyka  </label>' +
        '<input type="checkbox" name="interests" id="sport" value="sport"><label for="sport">Sport  </label>' +
        '<input type="checkbox" name="interests" id="film" value="film"><label for="film">Film  </label>' +
        '<input type="checkbox" name="interests" id="other" value="inne"><label for="other">Inne</label><br>' +
        '<br>Wiek: <br><input type="radio" name="age" id="lessThan10" value="lessThan10"><label for="lessThan10">Mniej niż 10 </label>' +
        '<input type="radio" name="age" id="10-20" value="10-20"><label for="10-20"> 10-20 </label>' +
        '<input type="radio" name="age" id="21-30" value="21-30"><label for="21-30"> 21-30 </label>' +
        '<input type="radio" name="age" id="31-40" value="31-40"><label for="31-40"> 31-40 </label>' +
        '<input type="radio" name="age" id="41-50" value="41-50"><label for="41-50"> 41-50 </label>' +
        '<input type="radio" name="age" id="moreThan50" value="Więcej niż 50"><label for="moreThan50"> Więcej niż 50</label><br><br>' +
        'Komentarz:<br><textarea rows="3" cols="20" id="wiadomosc" name="wiadomosc" required></textarea><br>' +
        '<input type="submit" name="wyslij" value="Wyślij">' +
        '</form></article>';
    return tresc;
}

function pokazDane() {
//Funkcja zbiera dane wpisane w pola formularza i wyświetla okienko
//typu confirm do zatwierdzenia przez użytkownika:
    var dane = "Następujące dane zostaną wysłane:\n";

    dane += "Email: " + document.getElementById('email').value + "\n";
    dane += "Imię i nazwisko: " + document.getElementById('imie').value + "\n";
    dane += "Telefon: " + document.getElementById('phone').value + "\n";

    var interests = document.querySelectorAll('input[name="interests"]:checked');
    var interestsArray = [];
    interests.forEach(function (interest) {
        interestsArray.push(interest.value);
    });
    dane += "Zainteresowania: " + interestsArray.join(", ") + "\n";

    // Zbierz wybraną grupę wiekową
    var age = document.querySelector('input[name="age"]:checked');
    if (age) {
        dane += "Wiek: " + age.value + "\n";
    }

    dane += "Treść komentarza:" + document.getElementById('wiadomosc').value;
// uzupełnij dane ...
    return window.confirm(dane);
}