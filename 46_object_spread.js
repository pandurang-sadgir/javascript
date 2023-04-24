
// spread out the Object;

let circleRadious = {
    'radious':10
}

let circle = {
    'color':'red',
    ...circleRadious,
}

console.log(circle);
// output:
// { color: 'red', radious: 10 }


// js object spread operator use cases.
// 1.clone the object 

const cloneCircle = {...circle}
console.log(`This is clone circle`,cloneCircle);
// output:
// This is clone circle { color: 'red', radious: 10 }

// clone the object 

const car = {
    'model':'bmw',
    'price':25155120,
    'color':{
        '1':'red',
        '2':'green',
        '3':'blue'
    }
}

const cloneCar = {...car}
cloneCar.color = 'purple';
console.log(`This is clone car`,cloneCar);

// output:
// This is clone car { model: 'bmw', price: 25155120, color: 'purple' }

// 2. merging the object.

let square = {
    'width':12,
    'height':13
}


let backgroundProperty = {
 'bacground':'red'
}

let solidSquare = {
    ...square,
    ...backgroundProperty
}

console.log(solidSquare);
console.log(square);
// output:
// { width: 12, height: 13, bacground: 'red' }