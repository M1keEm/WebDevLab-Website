function obliczRate() {
    var kwota = parseFloat(document.getElementById('kwota').value);
    var oprocentowanieRoczne = parseFloat(document.getElementById('oprocRoczne').value);
    var liczbaRat = parseInt(document.getElementById('liczbaRat').value);
    var wynik = document.getElementById('rata');

    // Validate inputs
    if (isNaN(kwota) || isNaN(oprocentowanieRoczne) || isNaN(liczbaRat)) {
        alert("Proszę wprowadzić prawidłowe liczby.");
        wynik.value = '';
        return;
    }

    // Calculate monthly interest rate
    var pr_mc = (oprocentowanieRoczne / 100) / 12;

    // Validate that monthly interest rate and number of installments are finite numbers
    if (!isFinite(pr_mc) || !isFinite(liczbaRat) || liczbaRat <= 0) {
        alert("Proszę wprowadzić prawidłowe oprocentowanie i liczbę rat.");
        wynik.value = '';
        return;
    }

    // Calculate the installment
    var rata = (kwota * pr_mc) / (1 - Math.pow(1 + pr_mc, -liczbaRat));
    var koszt = document.getElementById('koszt');

    // Validate the result
    if (!isFinite(rata) || isNaN(rata)) {
        alert("Wystąpił błąd w obliczeniach. Proszę sprawdzić wprowadzone dane.");
        wynik.value = '';
    } else {
        wynik.value = rata.toFixed(2);
        koszt.value = (rata*12-kwota).toFixed(2);
    }
}
