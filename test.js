const test = require('tape')
const keyedArray = require('.')

test('keyedArray', function (t) {
  var fruits = [{
    name: 'apple',
    color: 'red'
  }, {
    id: 'banana',
    color: 'yellow',
    ingredients: [{
      name: 'sugar',
      taste: 'sugary'
    }, {
      name: 'water',
      taste: 'none'
    }]
  }]

  t.comment('addKeys')
  keyedArray.addKeys(fruits)
  t.equal(fruits.apple.color, 'red', 'uses `name` as key')
  t.equal(fruits.banana.color, 'yellow', 'uses `id` as key')
  t.equal(fruits.banana.ingredients.sugar.taste, 'sugary', 'recursively adds named keys to child objects')
  t.deepEqual(Object.keys(fruits), ['0', '1', 'apple', 'banana'], 'adds named keys')

  t.comment('removeKeys')
  keyedArray.removeKeys(fruits)
  t.notOk(fruits.apple)
  t.notOk(fruits.banana)
  t.deepEqual(Object.keys(fruits), ['0', '1'], 'removes named keys')
  t.deepEqual(Object.keys(fruits[1].ingredients), ['0', '1'], 'removes named keys recursively')

  t.end()
})
