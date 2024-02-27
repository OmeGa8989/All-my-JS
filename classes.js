// [1, 2, 3].push(23)

// JAVASCRIPT CLASSES 


class Color {
    constructor(r, g, b, name) {
        // will execute immediately when a new color is created 
        // console.log("INSIDE CONSTRUCTOR")
        // console.log(r, g, b)

        this.r = r
        this.b = b
        this.g = g
        this.name = name;
    }
    greet() {
        return `HELLO FROM A ${this.name}!!! I am so happy to welcome you inside the world of classes!!`
    }
    innerRGB() {
        const { r, g, b } = this;
        return `(${r}, ${g}, ${b})`
    }
    rgb() {
        return `rgb, ${this.innerRGB()}`
    }
    rgba(a = 1.0) {
        return `rgba(${this.innerRGB()}, ${a}})`
    }
}
// making a color object that will inherit the properties of the constructor
const c1 = new Color(255, 33, 41, 'redd')
c1.greet();
let white = new Color(255, 255, 255, 'white')
white.greet();