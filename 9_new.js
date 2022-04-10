function Cat(color, name) {
    this.color = color
    this.name = name
}

const cat = new Cat('red', 'murchik')
console.log(cat)

function myNew(parent, ...args) {
    let obj = {}
    Object.setPrototypeOf(obj, parent.prototype)
    return parent.apply(obj, args) || obj
}

const cat2 = myNew(Cat, 'green', 'yolo')
console.log(cat2);