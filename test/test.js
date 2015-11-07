'use strict'

const test = require('tap').test
const L = require('../')

test('basic ops', function(t) {
  const list = { name: 'list' }
  const A = { name: 'A' }
  const B = { name: 'B' }
  const C = { name: 'C' }
  const D = { name: 'D' }

  L.init(list)
  L.init(A)
  L.init(B)
  L.init(C)
  L.init(D)

  t.ok(L.isEmpty(list), 'list is empty')
  t.equal(L.peek(list), null)

  L.append(list, A)
  // list -> A
  t.ok(L.get(A) === L.peek(list))

  L.append(list, B)
  // list -> A -> B
  t.ok(L.get(A) === L.peek(list))

  L.append(list, C)
  // list -> A -> B -> C
  t.ok(L.get(A) === L.peek(list))

  L.append(list, D)
  // list -> A -> B -> C -> D
  t.ok(L.get(A) === L.peek(list))

  var x = L.shift(list)
  t.ok(L.get(A) === L.get(x))
  // list -> B -> C -> D
  t.ok(L.get(B) === L.peek(list))

  x = L.shift(list)
  t.ok(L.get(B) === L.get(x))
  // list -> C -> D
  t.ok(L.get(C) === L.peek(list))

  // B is already removed, so removing it again shouldn't hurt.
  L.remove(B)
  // list -> C -> D
  t.ok(L.get(C) === L.peek(list))

  // Put B back on the list
  L.append(list, B)
  // list -> C -> D -> B
  t.ok(L.get(C) === L.peek(list))

  L.remove(C)
  // list -> D -> B
  t.ok(L.get(D) === L.peek(list))

  L.remove(B)
  // list -> D
  t.ok(L.get(D) === L.peek(list))

  L.remove(D)
  // list
  t.equal(null, L.peek(list))

  t.ok(L.isEmpty(list))

  L.append(list, D)
  // list -> D
  t.ok(L.get(D) === L.peek(list))

  L.append(list, C)
  L.append(list, B)
  L.append(list, A)
  // list -> D -> C -> B -> A

  // Append should REMOVE C from the list and append it to the end.
  L.append(list, C)

  // list -> D -> B -> A -> C
  t.ok(L.get(D) === L.shift(list), 'list -> D -> B -> A -> C')

  // list -> B -> A -> C
  t.ok(L.get(B) === L.peek(list), 'list -> B -> A -> C')
  t.ok(L.get(B) === L.shift(list), 'list -> B -> A -> C')
  // list -> A -> C
  t.ok(L.get(A) === L.peek(list), 'list -> A -> C')
  t.ok(L.get(A) === L.shift(list), 'list -> A -> C')
  // list -> C
  t.ok(L.get(C) === L.peek(list), 'list -> C')
  t.ok(L.get(C) === L.shift(list), 'list -> C')
  // list
  t.ok(L.isEmpty(list), 'empty')

  L.destroy(list)
  L.destroy(A)
  L.destroy(B)
  L.destroy(C)
  L.destroy(D)

  t.equal(L.lists.size, 0, 'L.lists is empty')
  t.end()
})
