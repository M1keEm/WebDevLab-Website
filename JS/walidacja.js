function sprawdzPole(pole_id, obiektRegex) {
    var obiektPole = document.getElementById(pole_id);
    return obiektRegex.test(obiektPole.value);
}

function sprawdz_radio(nazwa_radio) {
    var obiekt = document.getElementsByName(nazwa_radio);
    for (let i = 0; i < obiekt.length; i++) {
        if (obiekt[i].checked) return true;
    }
    return false;
}

function sprawdz_box(box_id) {
    var obiekt = document.getElementById(box_id);
    return obiekt.checked;
}

function sprawdz() {
    var ok = true;

    let obiektNazw = /^[a-zA-Z\s\-]{1,30}$/;
    let obiektWiek = /^(1[6-9]|[2-9][0-9]|1[0-1][0-9]|120)$/;
    let obiektemail = /^([a-zA-Z0-9])+([.a-zA-Z0-9_-])*@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-]+)+$/;
    let obiektTelefon = /^\d{9}$/;

    if (!sprawdzPole("surname", obiektNazw)) {
        ok = false;
        document.getElementById("surname_error").innerHTML = "Wpisz poprawnie nazwisko!";
    } else document.getElementById("surname_error").innerHTML = "";

    if (!sprawdzPole("age", obiektWiek)) {
        ok = false;
        document.getElementById("age_error").innerHTML = "Wpisz poprawnie wiek!";
    } else document.getElementById("age_error").innerHTML = "";

    if(!sprawdzPole("phone", obiektTelefon)) {
        ok = false;
        document.getElementById("phone_error").innerHTML = "Wpisz poprawnie numer telefonu!";
    } else document.getElementById("phone_error").innerHTML = "";

    if (!sprawdzPole("email", obiektemail)) {
        ok = false;
        document.getElementById("mail_error").innerHTML = "Wpisz poprawnie mail!";
    } else document.getElementById("mail_error").innerHTML = "";

    if (!sprawdz_radio("payment_method")) {
        ok = false;
        document.getElementById("payment_error").innerHTML = "Wybierz metodę płatności!";
    } else document.getElementById("payment_error").innerHTML = "";

    if (!(sprawdz_box("PHP") || sprawdz_box("C/C++") || sprawdz_box("Java"))) {
        ok = false;
        document.getElementById("language_error").innerHTML = "Wybierz co najmniej jeden język!";
    } else document.getElementById("language_error").innerHTML = "";

    return ok;
}

function pokazDane() {
//Funkcja zbiera dane wpisane w pola formularza i wyświetla okienko typu confirm do zatwierdzenia przez użytkownika:
    var dane = "Dane z wypełnionego przez ciebie formularza: \n";

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