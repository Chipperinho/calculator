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
function clear(){
    a = 0;
    b = 0;
    c = 0;
    const screenInput = document.getElementById('calcInput')
    screenInput.textContent = "0"

    return
}

let parent = document.querySelector('innerBtns')
let calcInput = document.getElementById('calcInput')
let resultA = 0
let resultB = 0
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
let btnInt = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
let btnPlus = document.getElementById('plus')
let btnMinus = document.getElementById('minus')
let btnDivide = document.getElementById('divide')
let btnMultiply = document.getElementById('multiply')
let btnClear = document.getElementById('clear')
let btnEnter = document.getElementById('equals')
let btnOps = [btnPlus, btnMinus, btnDivide, btnMultiply, btnEnter]
let btnPressed = 'string'
let resultant = 0

for (x = 0; x <= btnNumbers.length; x++) {
    resultA = " "
    btnNumbers[x].addEventListener('click', function() {
        if (calcInput.textContent == 0) {
            resultA = " "
        }
        resultA = resultA + this.id
        calcInput.textContent = `${resultA}`
        btnClear.addEventListener('click', function() {
            calcInput.textContent = "0"
            resultB = resultA
            resultA = " "
            console.log(resultB)
        })
    })
}

/* for (y = 0; y <= btnOps.length; y++) {
    resultB = resultA
    btnOps[y].addEventListener('click', function() {
        resultB = resultA
    })
} */


/*
    btnEnter.addEventListener('click', function() {
        return btnPressed = true
    })

} */
/*
btnOne.addEventListener('click', function() {
    console.log("1")
})
btnTwo.addEventListener('click', function() {
    console.log("2")
})
btnThree.addEventListener('click', function() {
    console.log("3")
})
btnFour.addEventListener('click', function() {
    console.log("4")
})
btnFive.addEventListener('click', function() {
    console.log("5")
})
btnSix.addEventListener('click', function() {
    console.log("6")
})
btnSeven.addEventListener('click', function() {
    console.log("7")
})
btnEight.addEventListener('click', function() {
    console.log("8")
})
btnNine.addEventListener('click', function() {
    console.log("9")
})
btnPlus.addEventListener('click', function() {
    console.log("+")
})
btnMinus.addEventListener('click', function() {
    console.log("-")
})
btnDivide.addEventListener('click', function() {
    console.log("/")
})
btnMultiply.addEventListener('click', function() {
    console.log("*")
})
btnClear.addEventListener('click', function() {
    console.log("cleared")
})
btnEnter.addEventListener('click', function() {
    console.log("=")
})
*/

/* get number from button press, add it to total string, 
once operator button is pressed
it ends the function adding to string
while btnPressed !== true
    btnNumbers.addEventListener('click', function() {
        resultA = resultA + number
    })
    btnOps.addEventListener('click', function() {
        resultOp = string *matching the operator pressed
        btnPressed = true
    })
end while

c = resultOp *operator
btnPressed = false

while btnPressed !== true
    btnNumbers.addEventListener('click', function() {
        result = result + number
    })
    btnOps.addEventListener('click', function() {
        resultOp = string *matching the operator pressed
        btnPressed = true
    })
end while

enter(resultA, resultB)

after complete ||
if pressing equals on just one number, still returns that number
function runs and based on operator press so:
number -> op press -> result -> op press *takes result as numberA, takes input for numberB
eventually scientific calculators

*/