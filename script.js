let result = document.getElementById("result");

function appendValue(value) {
    if (value === '±') {
        result.value = result.value ? -parseFloat(result.value) : '';
    } else {
        result.value += value;
    }
}

function clearResult() {
    result.value = "";
}

function deleteLast() {
    result.value = result.value.slice(0, -1);
}

function calculate() {
    try {
        result.value = eval(result.value.replace('÷', '/').replace('×', '*'));
    } catch (error) {
        alert("Invalid calculation!");
        result.value = "";
    }
}
