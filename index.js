function plus(a,b) {
    return a + b
}

function minus(a,b) {
    return a - b
}

function divide(a,b) {
    return a / b
}

function multiply(a,b) {
    return a * b
}

function exponent(a,b) {
    return a ** b
}

function enter(a,b,c){
    if (c == 0) {
        result = plus(a,b)
    }else if (c == 1) {
        result = minus(a,b)
    }else if (c == 2) {
        result = divide(a,b)
    }else if (c == 3) {
        result = multiply(a,b)
    }else if (c == 4) {
        result = exponent(a,b)
    }

    return result
}

function clear(){
    a = 0;
    b = 0;
    c = 0;

    return
}


