function obliczRate() {
    var K = parseInt(document.getElementById('kwota').value);

    var pr_mc = (parseFloat(document.getElementById('oprocRoczne').value) / 100) / 12;

    var n = parseInt(document.getElementById('liczbaRat').value);

    var wynik = document.getElementById('rata');

    wynik.value = (K * pr_mc) / (1 - Math.pow(1 + pr_mc, -n));
}