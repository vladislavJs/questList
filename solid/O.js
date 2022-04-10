// Open Close Responsibility

class Shape {
    area() {
        throw new Error('must be create this func')
    }
}

class Square extends Shape{
    constructor(size) {
        super()
        this.type = 'squire'
        this.size = size
    }

    area() {
        return this.size ** 2
    }
}

class Circle extends Shape{
    constructor(radius) {
        super()
        this.type = 'circle'
        this.size = radius
    }

    area() {
        return (this.size ** 2) * Math.PI
    }
}

class Calculate {
    constructor(shapes = []) {
        this.shapes = shapes
    }

    sum() {
        return this.shapes.reduce((sum, shape) => {
            // if(shape.type === 'circle') {
            //      sum += (shape.size ** 2) * Math.PI
            // } else {
            //      sum += shape.size ** 3
            // }



            return sum += shape.area()

        }, 0)
    }
}

calc = new Calculate([new Circle(12), new Square(9), new Circle(4)])
console.log(calc.sum())