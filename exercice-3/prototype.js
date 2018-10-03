String.prototype.ucfirst = function() {
  return this.charAt(0).toUpperCase() + this.slice(1)
}

console.log("hello world".ucfirst())


String.prototype.capitalize = function () {
  let words = this.trim().split(' ')
  return words.map(word => word.ucfirst()).join(' ')
}

String.prototype.camelCase = function () {
  return this.capitalize().replace(' ', '')
}

console.log("hello world".camelCase())


String.prototype.snake_case = function () {
  return this.toLowerCase().replace(' ', '_')
}

String.prototype.leet = function () {
  return this
    .replace('a', '4')
    .replace('e', '3')
    .replace('i', '1')
    .replace('o', '0')
    .replace('u', '(_)')
    .replace('y', '7')
}

String.prototype.verlan = function () {
  let words = this.trim().split(' ')
  return words.map(word => word.split('').reverse().join('')).join(' ')
}

String.prototype.yoda = function () {
  let words = this.trim().split(' ')
  return words.reverse().join(' ')
}

Object.prototype.prop_access = function (string) {
  let props = string.split('.')
  let res = this
  props.map(prop => {
    res = res[prop]
  })
  return res ? res : string + ' not exist'
}

let object = {
  animal: {
    type: {
      name: 'dog'
    }
  }
}

console.log(object.prop_access('animal.type.name'))