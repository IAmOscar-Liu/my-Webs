//Without descriptor
    let readonly = function(target,key,descriptor){
        descriptor.writable = false;
        return descriptor;
    }

    class Car{
        constructor(color){
            this.color = color
        }
        // getColor(){
        //     return this.color;
        // }
    }

    let descriptor = {
        value:function(){
            return this.color;
        },
        writable:true,
        configurable:true,
        enumerable:true
    };

    descriptor = readonly(Car.prototype,'getColor',descriptor)||descriptor;
    Object.defineProperty(Car.prototype, 'getColor',descriptor)

    const redCar = new Car('red');

    redCar.getColor = function(){
        return 'blah blah';
    }

    console.log(redCar.getColor())

//With descriptor(run this on https://jsfiddle.net/nzychgkf/)
    // let readonly = function(target,key,descriptor){
    //     descriptor.writable = false;
    //     return descriptor;
    // }

    // class Car{
    //     constructor(color){
    //         this.color = color
    //     }
    //     @readonly
    //     getColor(){
    //         return this.color;
    //     }
    // }

    // // let descriptor = {
    // //     value:function(){
    // //         return this.color;
    // //     },
    // //     writable:true,
    // //     configurable:true,
    // //     enumerable:true
    // // };

    // // descriptor = readonly(Car.prototype,'getColor',descriptor)||descriptor;
    // // Object.defineProperty(Car.prototype, 'getColor',descriptor)

    // const redCar = new Car('red');

    // redCar.getColor = function(){
    //     return 'blah blah';
    // }

    // console.log(redCar.getColor())