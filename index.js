const isNumber = require('is-number')

function addKeys (array) {
  if (!Array.isArray(array)) return array

  array.forEach(element => {
    var identifier = element.name || element.id
    if (identifier) array[identifier] = element

    if (element && typeof element === 'object') {
      Object.keys(element).forEach(function (e) {
        addKeys(element[e])
      })
    }
  })
}

function removeKeys (array) {
  if (!Array.isArray(array)) return array

  Object.keys(array).forEach(key => {
    var element = array[key]

    if (element && typeof element === 'object') {
      Object.keys(element).forEach(function (e) {
        removeKeys(element[e])
      })
    }

    if (!isNumber(key)) delete array[key]
  })
}

module.exports = {
  addKeys: addKeys,
  removeKeys: removeKeys
}
