import { curry } from 'ramda'

const sum = (a, b) => a + b

const curriedSum = curry(sum)

const sumTen = curriedSum(a)

sumTen(5)
// 15


import { curry, __ } from 'ramda'

const divide = (a, b) => a / b

const curriedDivide = curry(divide)

const divideByTen = curriedDivide(__, 10)

divideByTen(1000)
// 10
