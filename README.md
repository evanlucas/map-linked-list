# map-linked-list

[![Build Status](https://travis-ci.org/evanlucas/map-linked-list.svg)](https://travis-ci.org/evanlucas/map-linked-list)
[![Coverage Status](https://coveralls.io/repos/evanlucas/map-linked-list/badge.svg?branch=master&service=github)](https://coveralls.io/github/evanlucas/map-linked-list?branch=master)

Node core linked list module converted to use a map.

I know this somewhat defeats the purpose of a linked list, but the aim
was to have a linked list without modifying the original objects the way
that Node's version does.

## Install

```bash
$ npm install --save map-linked-list
```

## Test

```bash
$ npm test
```

## Example

```js
'use strict'

const L = require('map-linked-list')

const list = { name: 'list' }
const a = { name: 'a' }
const b = { name: 'b' }
L.init(list)
L.init(a)
L.init(b)

L.append(list, A)
// L.get(A) === L.peek(list)
```

## API

### L.init(list)

Creates the underlying map for the given _list_.

**Note: You will leak memory if you do not (at some time) `L.destroy(_list_)`.**

### L.get(list)

Returns the `Item` map for the given _list_.

### L.destroy(list)

Cleans up the underlying map for the given _list_.

### L.peek(list)

Returns the `Item` for the given _list_. To access the original object
passed to `L.init`, use the `_item` property.

### L.remove(item)

Removes the given _item_, but does not cleanup the underlying `Item`.

### L.shift(list)

Similar to `Array#shift`. Removes and returns the previous `Item`.
*Note: does not cleanup the underlying `Item`.*

### L.append(list, item)

Removes _item_ from the list and appends it to the end.

### L.isEmpty(list)

Returns boolean for whether the list is empty.

## Author

Evan Lucas

## License

MIT (See `LICENSE` for more info)
