'use strict'

const IDLE_PREV = '_idlePrev'
const IDLE_NEXT = '_idleNext'

const lists = new Map()
const L = exports

L.lists = lists

class Item extends Map {
  constructor(list) {
    super()
    this._idlePrev = this
    this._idleNext = this
    lists.set(list, this)
    this._item = list
  }

  destroy() {
    this._idlePrev = null
    this._idleNext = null
    lists.delete(this._item)
    this.clear()
    this._item = null
  }

  get _idlePrev() {
    return this.get(IDLE_PREV)
  }

  set _idlePrev(prev) {
    this.set(IDLE_PREV, prev)
  }

  get _idleNext() {
    return this.get(IDLE_NEXT)
  }

  set _idleNext(next) {
    this.set(IDLE_NEXT, next)
  }
}

L.init = function init(list) {
  new Item(list)
}

L.get = function get(list) {
  if (list instanceof Item)
    return list
  return lists.get(list)
}

L.destroy = function destroy(list) {
  const l = L.get(list)
  if (l)
    l.destroy()
}

L.peek = function peek(list) {
  const l = L.get(list)
  if (l._idlePrev == l) return null
  return l._idlePrev
}

L.remove = function remove(item) {
  const list = L.get(item)

  if (list._idleNext) {
    list._idleNext._idlePrev = list._idlePrev
  }

  if (list._idlePrev) {
    list._idlePrev._idleNext = list._idleNext
  }

  list._idleNext = null
  list._idlePrev = null
}

L.shift = function shift(list) {
  const l = L.get(list)
  const first = l._idlePrev
  L.remove(first)
  return first
}

L.append = function append(list, item) {
  L.remove(item)
  const lItem = L.get(list)
  const iItem = L.get(item)

  iItem._idleNext = lItem._idleNext

  lItem._idleNext._idlePrev = iItem

  iItem._idlePrev = lItem

  lItem._idleNext = iItem
}

L.isEmpty = function isEmpty(list) {
  const l = L.get(list)
  return l._idlePrev === l
}
