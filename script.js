let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'

const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number
    } else {
        currentNumber += number
    }
}

const calculatorScreen = document.querySelector('.calculator-screen')

const updateScreen = (number) => {
    calculatorScreen.value = number
}

const numbers = document.querySelectorAll(".number")

numbers.forEach((number)=>{
    number.addEventListener("click", (event)=>{
        inputNumber(event.target.value)
        const math = prevNumber + calculationOperator + currentNumber
        updateScreen(math)
    })
})

const inputOperator = (operator) => {
    if (calculationOperator === '') {
        prevNumber = currentNumber
    }
    calculationOperator = operator
    currentNumber = ''
}

const operators = document.querySelectorAll(".operator")

operators.forEach((operator) => {
    operator.addEventListener("click", (event) =>{
        inputOperator(event.target.value)
        const math = prevNumber + calculationOperator + currentNumber
        updateScreen(math)
    })
})

const calculate = () => {
    let result = ''
    switch (calculationOperator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break;
        case "-":
            result = parseFloat(prevNumber) - parseFloat(currentNumber)
            break;
        case "*":
            result = parseFloat(prevNumber) * parseFloat(currentNumber)
            break;
        case "/":
            result = parseFloat(prevNumber) / parseFloat(currentNumber)
            break;
        case "%":
            result = parseFloat(prevNumber)/100 * parseFloat(currentNumber)
            break;
        case "^":
            result = Math.pow(parseFloat(prevNumber),parseFloat(currentNumber))
            break;
        case " akar dari":
            result = Math.sqrt(prevNumber)
            break;
        case "sin":
            result = Math.sin(prevNumber)
            break;
        case "cos":
            result = Math.cos(prevNumber)
            break;
        case "tan":
            result = Math.tan(prevNumber)
            break;    
        default:
            break;
    }
    currentNumber = result
    calculationOperator = ''
}

const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener('click', () => {
    calculate()
    updateScreen(currentNumber)
})

const clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
}

const clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener('click', () => {
    clearAll()
    updateScreen(currentNumber)
})

const deleted = () => {
    currentNumber = currentNumber.toString().slice(0, -1)
    updateScreen(currentNumber)
} 

const deleteBtn = document.querySelector('.delete')

deleteBtn.addEventListener('click', () => {
    deleted()
})

inputDecimal = (dot) => {
    currentNumber += dot
}

const decimal = document.querySelector('.decimal')

decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})

inputDecimal = (dot) => {
    if (currentNumber.includes('.')) {
        return
    }
    currentNumber += dot
}