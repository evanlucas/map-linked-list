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

## API

### L.init(list)

### L.get(list)

### L.destroy(list)

### L.peek(list)

### L.remove(item)

### L.shift(list)

### L.append(list, item)

### L.isEmpty(list)

## Author

Evan Lucas

## License

MIT (See `LICENSE` for more info)
