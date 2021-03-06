# keyed-array [![Build Status](https://travis-ci.org/zeke/keyed-array.svg?branch=master)](https://travis-ci.org/zeke/keyed-array)

Recursively add named keys to arrays of objects

I wrote a blog post about the idea here: http://zeke.sikelianos.com/keyed-arrays-in-javascript

## Installation

```sh
npm install keyed-array --save
```

## Usage

For more extensive usage examples, see [test.js](test.js)

```js
const keyedArray = require('keyed-array')

let people = [
  {id: 'bob', name: 'Bob', isCool: false},
  {id: 'sue', name: 'Sue', isCool: false},
  {id: 'hal', name: 'Hal', isCool: true},
  {id: 'ann', name: 'Ann', isCool: true}
]

people = keyedArray(people)

// `people` is still an array, but now it also has keys based on the `id`
// value of each object
people.bob
// {id: 'bob', name: 'Bob', isCool: false}
```


## Tests

```sh
npm install
npm test
```

## Dependencies

None

## Dev Dependencies

- [standard](https://github.com/feross/standard): JavaScript Standard Style
- [tap-spec](https://github.com/scottcorgan/tap-spec): Formatted TAP output like Mocha&#39;s spec reporter
- [tape](https://github.com/substack/tape): tap-producing test harness for node and browsers


## License

MIT

_Generated by [package-json-to-readme](https://github.com/zeke/package-json-to-readme)_
