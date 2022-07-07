let result = 0
let resultant = 0
let operant = 0
let resultA = 0
let resultB = 0
let regExp = /[0-9.]/;
function plus(a,b) {
    result = parseFloat(a) + parseFloat(b)
    if (a%1 == 0 && b%1 == 0){
        return result
    }else {
        return result.toFixed(3)
    }
}
function minus(a,b) {
    result = parseFloat(a) - parseFloat(b)
    if (a%1 == 0 && b%1 == 0){
        return result
    }else {
        return result.toFixed(3)
    }
}
function divide(a,b) {

    if (parseInt(b) !== 0) {
        result = parseFloat(a) / parseFloat(b)
        if (a%b == 0) {
            return result
        }else {
            return result.toFixed(3)
        }
    }else {
        result = "SYNTAX ERROR"
        return result
    }
}
function multiply(a,b) {
    result = parseFloat(a) * parseFloat(b)
    if (a%1 == 0 && b%1 == 0){
        return result
    }else {
        return result.toFixed(3)
    }
}
function enter(a,b,c){
    if (c == 1) {
        result = plus(a,b)
    }else if (c == 2) {
        result = minus(a,b)
    }else if (c == 3) {
        result = divide(a,b)
    }else if (c == 4) {
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
let btnDecimal = document.getElementById('decimal')
let btnNumbers = [btnZero, btnOne, btnTwo, btnThree, btnFour, btnFive,
    btnSix, btnSeven, btnEight, btnNine, btnDecimal]
let btnPlus = document.getElementById('plus')
let btnMinus = document.getElementById('minus')
let btnDivide = document.getElementById('divide')
let btnMultiply = document.getElementById('multiply')
let btnClear = document.getElementById('clear')
let btnEnter = document.getElementById('equals')
let btnBack = document.getElementById('backspace')

result = " "
window.addEventListener('keydown', function (e) {
    console.log(e.key)
    if (e.key == 'Backspace') {
        resultA = resultA.slice(0, -1)
        calcInput.textContent = `${resultA}`
    }else if (e.key == '+') {
        calcInput.textContent = "0"
        if (operant == 0){
            if (resultant !== 0){
                resultB = resultant;
            }else if (resultant == 0) {
                resultB = resultA
            }
            resultA = " "
            operant = 1
        }else if (operant !== 0){
            resultant = enter(resultB, resultA, operant)
            calcInput.textContent = `${resultant}`
            resultA = " "
            resultB = resultant
            operant = 1
        }
    }else if (e.key == '-') {
        calcInput.textContent = "0"
        if (operant == 0){
            if (resultant !== 0){
                resultB = resultant;
            }else if (resultant == 0) {
                resultB = resultA
            }
            resultA = " "
            operant = 2
        }else if (operant !== 0){
            resultant = enter(resultB, resultA, operant)
            calcInput.textContent = `${resultant}`
            resultA = " "
            resultB = resultant
            operant = 2
        }
    }else if (e.key == '*'){
        calcInput.textContent = "0"
        if (operant == 0){
            if (resultant !== 0){
                resultB = resultant;
            }else if (resultant == 0) {
                resultB = resultA
            }
            resultA = " "
            operant = 4
        }else if (operant !== 0){
            resultant = enter(resultB, resultA, operant)
            calcInput.textContent = `${resultant}`
            resultA = " "
            resultB = resultant
            operant = 4
        }
    }else if (e.key == '/') {
        calcInput.textContent = "0"
        if (operant == 0){
            if (resultant !== 0){
                resultB = resultant;
            }else if (resultant == 0) {
                resultB = resultA
            }
            resultA = " "
            operant = 3
        }else if (operant !== 0){
            resultant = enter(resultB, resultA, operant)
            calcInput.textContent = `${resultant}`
            resultA = " "
            resultB = resultant
            operant = 3
        }
    }else if (e.key == 'Enter') {
        if (resultB !== 0) {
            resultant = enter(resultB, resultA, operant)
            calcInput.textContent = `${resultant}`
            resultA = " "
            resultB = 0
        }else if (resultA !== 0){
            resultant = resultA
            resultA = 0
            calcInput.textContent = `${resultant}`
        }else if (resultant !== 0){
            resultant = enter(resultant, resultA, operant)
            calcInput.textContent = `${resultant}`
        }else if (resultB == 0) {
            resultA = resultB
            calcInput.textContent = `${resultant}`
        }
        console.log(resultant)
    }else if (regExp.test(e.key)){
        resultA = resultA + `${e.key}`
        calcInput.textContent = `${resultA}`
    }else {
        calcInput.textContent = 0
    }
})

btnClear.onclick = function() {
    calcInput.textContent = "0"
    resultB = " "
    resultA = " "
    resultant = 0
}

for (x = 0; x <= btnNumbers.length; x++) {
    resultA = " "
    btnNumbers[x].addEventListener('click', function() {
        if (resultant == "SYNTAX ERROR") {
            resultant = 0
        }
        if (calcInput.textContent == 0) {
            resultA = " "
        }
        calcInput.textContent = "0"
        resultant = 0
        if (resultA.includes('.') == true && this.id == 'decimal'){
            resultA = resultA
        }else if (this.id == 'decimal') {
            resultA = resultA + '.'
        }else {
            resultA = resultA + this.id
        }
        calcInput.textContent = `${resultA}`
        console.log(resultA, resultB, resultant, operant)
        btnBack.onclick = function() {
            resultA = resultA.slice(0, -1)
            calcInput.textContent = `${resultA}`
        }
        btnPlus.onclick = function() {
            calcInput.textContent = "0"
            if (operant == 0){
                if (resultant !== 0){
                    resultB = resultant;
                }else if (resultant == 0) {
                    resultB = resultA
                }
                resultA = " "
                operant = 1
            }else if (operant !== 0){
                resultant = enter(resultB, resultA, operant)
                calcInput.textContent = `${resultant}`
                resultA = " "
                resultB = resultant
                operant = 1
            }
        }
        btnMinus.onclick = function() {
            calcInput.textContent = "0"
            if (operant == 0){
                if (resultant !== 0){
                    resultB = resultant;
                }else if (resultant == 0) {
                    resultB = resultA
                }
                resultA = " "
                operant = 2
            }else if (operant !== 0){
                resultant = enter(resultB, resultA, operant)
                calcInput.textContent = `${resultant}`
                resultA = " "
                resultB = resultant
                operant = 2
            }
        }
        btnDivide.onclick = function() {
            calcInput.textContent = "0"
            if (operant == 0){
                if (resultant !== 0){
                    resultB = resultant;
                }else if (resultant == 0) {
                    resultB = resultA
                }
                resultA = " "
                operant = 3
            }else if (operant !== 0){
                resultant = enter(resultB, resultA, operant)
                calcInput.textContent = `${resultant}`
                resultA = " "
                resultB = resultant
                operant = 3
            }

        }
        btnMultiply.onclick = function() {
            calcInput.textContent = "0"
            if (operant == 0){
                if (resultant !== 0){
                    resultB = resultant;
                }else if (resultant == 0) {
                    resultB = resultA
                }
                resultA = " "
                operant = 4
            }else if (operant !== 0){
                resultant = enter(resultB, resultA, operant)
                calcInput.textContent = `${resultant}`
                resultA = " "
                resultB = resultant
                operant = 4
            }
        }
        btnEnter.onclick = function() {
            if (resultB !== 0) {
                resultant = enter(resultB, resultA, operant)
                calcInput.textContent = `${resultant}`
                resultA = " "
                resultB = 0
            }else if (resultA !== 0){
                resultant = resultA
                resultA = 0
            }else if (resultant !== 0){
                resultant = enter(resultant, resultA, operant)
                calcInput.textContent = `${resultant}`
            }else if (resultB == 0) {
                resultA = resultB
                resultA = 0
            }
            console.log(resultant)
        }
    })
}

/* 
To-do ||

eventually scientific calculators

*/