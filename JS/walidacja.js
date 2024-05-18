function sprawdzPole(pole_id, obiektRegex) {
//Funkcja sprawdza czy wartość wprowadzona do pola tekstowego
//pasuje do wzorca zdefiniowanego za pomocą wyrażenia regularnego
//Parametry funkcji:
//pole_id - id sprawdzanego pola tekstowego
//obiektRegex - wyrażenie regularne
//---------------------------------
    var obiektPole = document.getElementById(pole_id);
    return obiektRegex.test(obiektPole.value);
}

function sprawdz_radio(nazwa_radio) {
//Funkcja sprawdza czy wybrano przycisk radio
//z grupy przycisków o nazwie nazwa_radio
//---------------------------------------
    var obiekt = document.getElementsByName(nazwa_radio);
    for (i = 0; i < obiekt.length; i++) {
        wybrany = obiekt[i].checked;
        if (wybrany) return true;
    }
    return false;
}

function sprawdz_box(box_id) {//Funkcja sprawdza czy przycisk typu checkbox
//o identyfikatorze box_id jest zaznaczony
//----------------------------------------
    var obiekt = document.getElementById(box_id);
    return obiekt.checked;
}

function sprawdz() { //Funkcja realizujaca sprawdzanie całego fomularza
//wykorzystując funkcje pomocnicze
//--------------------------------
    var ok = true; //zmienna informująca o poprawnym wypełnieniu formularza
//Definicje odpowiednich wyrażeń regularnych dla sprawdzenia
//poprawności danych wprowadzonych do pól tekstowych
    obiektNazw = /^[a-zA-Z]{2,20}$/; //wyrażenie regularne dla nazwiska
    obiektemail =
        /^([a-zA-Z0-9])+([.a-zA-Z0-9_-])*@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-]+)+/;
    obiektWiek = /^[1-9][0-9]{1,2}$/;
//Sprawdzanie kolejnych pól formularza.
//w przypadku błędu - pojawia się odpowiedni komunikat
    if (!sprawdzPole("nazw", obiektNazw)) {
        ok = false;
        document.getElementById("nazw_error").innerHTML =
            "Wpisz poprawnie nazwisko!";
    } else document.getElementById("nazw_error").innerHTML = "";
//Uzupełnij – sprawdz kolejne pola formularza
// if ...
    return ok;
}