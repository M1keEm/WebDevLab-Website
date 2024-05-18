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

    if (!sprawdzPole("phone", obiektTelefon)) {
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
    if (ok) {
        return pokazDane();
    }
    return false;
}

function pokazDane() {
    // Funkcja zbiera dane wpisane w pola formularza i wyświetla okienko typu confirm do zatwierdzenia przez użytkownika
    var dane = "Dane z wypełnionego przez ciebie formularza: \n";

    dane += "Nazwisko: " + document.getElementById('surname').value + "\n";
    dane += "Wiek: " + document.getElementById('age').value + "\n";
    dane += "Państwo: " + document.getElementById('country').value + "\n";
    dane += "Telefon: " + document.getElementById('phone').value + "\n";
    dane += "Email: " + document.getElementById('email').value + "\n";

    var interests = [];
    if (document.getElementById('PHP').checked) {
        interests.push(document.getElementById('PHP').value);
    }
    if (document.getElementById('C/C++').checked) {
        interests.push(document.getElementById('C/C++').value);
    }
    if (document.getElementById('Java').checked) {
        interests.push(document.getElementById('Java').value);
    }
    dane += "Zainteresowania: " + interests.join(", ") + "\n";

    var paymentMethods = document.querySelectorAll('input[name="payment_method"]:checked');
    var paymentMethodsArray = [];
    paymentMethods.forEach(function (method) {
        paymentMethodsArray.push(method.value);
    });
    dane += "Sposób zapłaty: " + paymentMethodsArray.join(", ") + "\n";

    return window.confirm(dane);
}