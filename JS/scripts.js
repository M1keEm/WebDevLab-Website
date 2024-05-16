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
        koszt.value = (rata * 12 - kwota).toFixed(2);
    }
}

function calculate() {
    var number1 = parseFloat(document.getElementById('number1').value);
    var number2 = parseFloat(document.getElementById('number2').value);
    var result = document.getElementById('result');
    var error = document.getElementById('error');

    var operation = document.querySelector('input[name="operation"]:checked');

    error.textContent = '';
    result.value = '';

    if (isNaN(number1) || (isNaN(number2) && operation && operation.value !== 'sqrt')) {
        error.textContent = 'Proszę wprowadzić prawidłowe liczby.';
        return;
    }

    if (!operation) {
        error.textContent = 'Proszę wybrać jedną operację.';
        return;
    }

    var op = operation.value;
    var resultValue;

    switch (op) {
        case 'addition':
            resultValue = number1 + number2;
            break;
        case 'subtraction':
            resultValue = number1 - number2;
            break;
        case 'multiplication':
            resultValue = number1 * number2;
            break;
        case 'division':
            if (number2 === 0) {
                error.textContent = 'Dzielenie przez zero jest niemożliwe.';
                return;
            }
            resultValue = number1 / number2;
            break;
        case 'sqrt':
            if (number1 < 0) {
                error.textContent = 'Pierwiastkowanie liczby ujemnej jest niemożliwe.';
                return;
            }
            resultValue = Math.sqrt(number1);
            break;
        default:
            error.textContent = 'Nieznana operacja.';
            return;
    }

    result.value = resultValue;
}
