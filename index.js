let result = 0
let resultant = 0
let operant = 0
let resultA = 0
let resultB = 0
function plus(a,b) {
    result = parseFloat(a) + parseFloat(b)
    return result
}
function minus(a,b) {
    result = parseFloat(a) - parseFloat(b)
    return result
}
function divide(a,b) {
    result = parseFloat(a) / parseFloat(b)
    if (a%b == 0) {
        return result
    }else {
        return result.toFixed(3)
    }
}
function multiply(a,b) {
    result = parseFloat(a) * parseFloat(b)
    return result
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
    }

    return result
}

let calcInput = document.getElementById('calcInput')
let btnZero = document.getElementById('0')
let btnOne = document.getElementById('1')
let btnTwo = document.getElementById('2')
let btnThree = document.getElementById('3')
let btnFour = document.getElementById('4')
let btnFive = document.getElementById('5')
let btnSix = document.getElementById('6')
let btnSeven = document.getElementById('7')
let btnEight = document.getElementById('8')
let btnNine = document.getElementById('9')
let btnNumbers = [btnZero, btnOne, btnTwo, btnThree, btnFour, btnFive,
    btnSix, btnSeven, btnEight, btnNine]
let btnPlus = document.getElementById('plus')
let btnMinus = document.getElementById('minus')
let btnDivide = document.getElementById('divide')
let btnMultiply = document.getElementById('multiply')
let btnClear = document.getElementById('clear')
let btnEnter = document.getElementById('equals')

for (x = 0; x <= btnNumbers.length; x++) {
    resultA = " "
    btnNumbers[x].addEventListener('click', function() {
        if (calcInput.textContent == 0) {
            resultA = " "
        }
        calcInput.textContent = "0"
        resultant = 0
        resultA = resultA + this.id
        calcInput.textContent = `${resultA}`
        btnPlus.onclick = function() {
            calcInput.textContent = "0"
            if (resultant !== 0){
                resultB = resultant;
            }else if (resultant == 0) {
                resultB = resultA
            }
            resultA = " "
            operant = 0
        }
        btnMinus.onclick = function() {
            calcInput.textContent = "0"
            if (resultant !== 0){
                resultB = resultant;
            }else if (resultant == 0) {
                resultB = resultA
            }
            resultA = " "
            operant = 1
        }
        btnDivide.onclick = function() {
            calcInput.textContent = "0"
            if (resultant !== 0){
                resultB = resultant;
            }else if (resultant == 0) {
                resultB = resultA
            }
            resultA = " "
            operant = 2
        }
        btnMultiply.onclick = function() {
            calcInput.textContent = "0"
            if (resultant !== 0){
                resultB = resultant;
            }else if (resultant == 0) {
                resultB = resultA
            }
            resultA = " "
            operant = 3
        }
        btnEnter.onclick = function() {
            if (resultB !== 0) {
                resultant = enter(resultB, resultA, operant)
                calcInput.textContent = `${resultant}`
                console.log(resultant)
                resultA = " "
                resultB = " "
            }
        }
        btnClear.onclick = function() {
            calcInput.textContent = "0"
            resultB = 0
            resultA = 0
            resultant = 0
        }
    })
}

/* 
To-do ||

if pressing equals on just one number, still returns that number
eventually scientific calculators

*/