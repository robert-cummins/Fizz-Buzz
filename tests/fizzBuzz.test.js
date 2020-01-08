const fizzBuzz = require('../fizzBuzz')

test('test setup working', () => {
    expect(2).toBeGreaterThan(1)
})

test('the number 3 prints Fizz', () => {
    const expected = 'Fizz'
    const actual = fizzBuzz.numberInterpreter(3)
    expect(actual).toEqual(expected)
})

test('the number 5 prints Buzz ', () => {
    const expected = 'Buzz'
    const actual = fizzBuzz.numberInterpreter(5)
    expect(actual).toEqual(expected)
})

test('a number divisible by 3 and 5 prints FizzBuzz', () => {
    const expected = 'FizzBuzz'
    const actual = fizzBuzz.numberInterpreter(15)
    expect(actual).toEqual(expected)
})

test('a number not divisible by 3 or 5 prints the number', () => {
    const expected = 11
    const actual = fizzBuzz.numberInterpreter(11)
    expect(actual).toEqual(expected)
})
