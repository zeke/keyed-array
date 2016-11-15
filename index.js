'use strict'

// Clone arrays and override the behavior of console.log
// https://groups.google.com/forum/#!topic/nodejs/1wTDLb20xac
class KeyedArray extends Array {
  constructor (sourceArray) {
    super()
    if (Array.isArray(sourceArray)) {
      sourceArray.forEach(element => this.push(element))
    }
  }

  // Disable for now, because it's causing some weird resursion errors sometimes
  // inspect () {
  //   // `map` rids the array of named keys
  //   return this.map(e => e)
  // }
}

module.exports = function keyedArray (array) {
  if (!Array.isArray(array)) return array

  array = new KeyedArray(array)

  array.forEach(element => {
    var identifier = element.name || element.id
    if (identifier && identifier !== 'length') array[identifier] = element

    if (element && typeof element === 'object') {
      Object.keys(element).forEach(function (e) {
        element[e] = keyedArray(element[e])
      })
    }
  })

  return array
}
