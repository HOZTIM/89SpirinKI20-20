const operations = require('./assets/js/calc')

const assert = require('assert')

it('корректная сумма 1 и 3', () => {
  assert.equal(operations.add(1, 3), 4)
})
it('корректная сумма -1 и 3', () => {
    assert.equal(operations.add(-1, 3), 2)
})
it('корректная сумма 1 и -3', () => {
  assert.equal(operations.add(1, -3), -2)
})
it('корректная сумма 0 и -3', () => {
  assert.equal(operations.add(0, -3), -3)
})
it('корректная сумма 1 и 0', () => {
  assert.equal(operations.add(1, 0), 1)
})

it('корректное деление 4 на 2', () => {
  assert.equal(operations.divide(4, 2), 2)
})
it('корректное деление 2 на 4', () => {
  assert.equal(operations.divide(2, 4), 0.5)
})
it('корректное деление 0 на любое число', () => {
  assert.equal(operations.divide(0, 4), 0)
})
it('корректное деление любого числа на 0', () => {
  assert.equal(operations.divide(2, 0), "Infinity")
})
it('корректное деление -4 на 2', () => {
  assert.equal(operations.divide(-4, 2), -2)
})
it('корректное деление 2 на -4', () => {
  assert.equal(operations.divide(2, -4), -0.5)
})

it('Решить уравнение: x^2 - 4x - 5 (D>0, два корня)', () => {
  assert.equal(operations.quadraticEquation(1, -4, -5), "x1 = 5 x2 = -1")
})
it('Решить уравнение: x^2 - 6x + 9 = 0 (D=0, один корень', () => {
  assert.equal(operations.quadraticEquation(1, -6, 9), "x = 3")
})
it('Решить уравнение: 3x^2 - 4x + 2 = 0 (D<0, нет корней', () => {
  assert.equal(operations.quadraticEquation(3, -4, 2), "корней нет")
})
it('Если вводятся буквы', () => {
  assert.equal(operations.quadraticEquation(3, -4, "ы"), undefined)
})
it('Если вводятся буквы', () => {
  assert.equal(operations.quadraticEquation(3, "s", "а"), undefined)
})
it('Если вводятся буквы', () => {
  assert.equal(operations.quadraticEquation("f", -4, "и"), undefined)
})
it('Неполное квадратное уравнение вида ax^2= 0', () => {
  assert.equal(operations.quadraticEquation(4,0,0), "0")
})
it('если a = 0', () => {
  assert.equal(operations.quadraticEquation(0, -4, 2), "Линейное ур-е")
})
it('если b,c = 0; a не равно 0', () => {
  assert.equal(operations.quadraticEquation(4, 0, 0), 0)
})
it('если b = 0; a,c не равно 0: Найти решение уравнения 8x^2 + 5 = 0', () => {
  assert.equal(operations.quadraticEquation(8, 0, 5), "корней нет")
})
it('расстояние между точками point1(x1,y1), point2(x2,y2)', () => {
  assert.equal(operations.distance(0,0,0,9), 9)
})
it('расстояние между точками point1(x1,y1), point2(x2,y2) (отрицательные числа)', () => {
  assert.equal(operations.distance(-1,-1,-1,10), 11)
})