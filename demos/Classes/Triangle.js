// In this class,
// Given only 'base' and 'height'
// Perform the described methods
// Only requirement to run the methods is Base and Heigth value
// If not provided, Error message will show up.

class Triangle {
    constructor(base, heigth){
        this.base = base; 
        this.heigth = heigth;
    }

    errorBase(){
        if(this.base == undefined){
            console.error(`Base is not defined, please add value`)
        }
    }

    errorHeigth(){
        if(this.heigth == undefined){
            console.error(`Heigth is not defined, please add value`)
        }
    }

    // area formula     a = b * h / 2
    calculateArea(){
        this.errorBase()
        return this.base * this.heigth / 2
    }

    // height formula   h = 2 * a / b
    calculateHeigth(){
        this.errorHeigth()
        return 2 * (this.calculateArea() / this.base)
    }

    // base formula   b = 2 * a / h
    calculateBase(){
        this.errorHeigth()
        return 2 * (this.calculateArea() / this.heigth)
    }

    // calculate hypothenuse    c^2 = a^2 + b^2
    calculateHypothenuse(){
        this.errorHeigth
        this.errorBase()
        return Math.sqrt(this.heigth * this.heigth + this.base * this.base)
    }

    // b = √ c^2 - a^2
    calculateOpposite(){
        this.errorBase()
        return Math.sqrt(this.calculateHypothenuse() * this.calculateHypothenuse() + this.base * this.base)
    }

    // perimeter formula    P = sideA + sideB + sideC
    calculatePerimeter(){
        return this.calculateOpposite() + this.calculateBase() + this.calculateHypothenuse()
    }

    

}