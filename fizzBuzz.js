const fizzBuzz = (num) => {
    Array.from(Array(num).keys()).map(element => {
        console.log(numberInterpreter(element + 1))
    })
}

const numberInterpreter = (num) => {
    if (num % 3 === 0 && num % 5 === 0) {
        return 'FizzBuzz'
    } else if(num % 3 === 0){
        return 'Fizz'
    } else if(num % 5 === 0){
        return 'Buzz'
    } else {
        return num
    }
}

fizzBuzz(100)

module.exports = {
    fizzBuzz,
    numberInterpreter
}