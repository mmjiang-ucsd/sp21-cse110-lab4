// Q1, Q2
/*
function sumValues(num1, num2, add) {
    if (add) {
        var result = 0;
        result = num1 + num2;
        console.log('values added: ', result);
    }
    else return;

    console.log('final result: ', result);
}

sumValues(10,10,true);
*/

//Q2, Q3
/*
function sumValues(num1, num2, add) {
    if (add) {
        let result = 0;
        result = num1 + num2;
        console.log('values added: ', result);
    }
    else return;

    console.log('final result: ', result);
}

sumValues(10,10,true);
*/

//Q5, Q6
/*
function sumValues(num1, num2, add) {
    if (add) {
        const result = 0;
        result = num1 + num2;
        console.log('values added: ', result);
    }
    else return;

    console.log('final result: ', result);
}

sumValues(10,10,true);
*/

//1b Q1, 2, 3, 4
/*
function discountPrices(prices, discount) {
    var discounted = [];
    var finalPrice = 0;

    for (var i = 0; i < prices.length; i++) {
        var discountedPrice = prices[i] * (1-discount);
        finalPrice = Math.round(discountedPrice * 100) / 100;
        discounted.push(finalPrice);
    }

    //console.log(i);
    //console.log(discountedPrice);
    //console.log(finalPrice);

    return discounted;
}

discountPrices([100, 200, 300], 0.5);
*/

//1b Q5-8
/*
function discountPrices(prices, discount) {
    let discounted = [];
    let finalPrice = 0;

    for (let i = 0; i < prices.length; i++) {
        let discountedPrice = prices[i] * (1-discount);
        finalPrice = Math.round(discountedPrice * 100) / 100;
        discounted.push(finalPrice);
    }

    //console.log(i);
    //console.log(discountedPrice);
    //console.log(finalPrice);

    return discounted;
}

discountPrices([100, 200, 300], 0.5);
*/

//1b q9-11
/*
function discountPrices(prices, discount) {
    const discounted = [];
    const length = prices.length;

    for (let i = 0; i < length; i++) {
        const discountedPrice = prices[i] * (1-discount);
        discounted.push(discountedPrice);
    }

    //console.log(i);
    //console.log(length);
    console.log(discounted);
    return discounted;
}

discountPrices([100, 200, 300], 0.5);
*/
/*
let student = {
    name: 'Sarah',
    major: 'Computer Science',
    'Grad Year': '2022',
    greeting: function() {console.log('Hello!')},
    'Favorite Teacher': {
        name: 'Thomas Powell',
        course: 'CSE 110'
    },
    courseLoad: ['CSE 110', 'CSE 134', 'VIS 41']
};

console.log(student.name);
console.log(student['Grad Year']);
//console.log(student.greeting());
student.greeting();
console.log(student['Favorite Teacher'].name);
console.log(student.courseLoad[0]);
*/

/*
function modifyArray(array, callback) {
    const newArr = [];
    for (let i = 0; i < array.length; i++) {
        newArr.push(callback(array[i]));
    }
    return newArr;
}

function doSomething(num) {
    return num * 2;
}

console.log(modifyArray([1,2,3], doSomething));
*/

function printNums() {
    console.log(1);
    setTimeout(function() {console.log(2);}, 1000);
    setTimeout(function() {console.log(3);}, 0);
    console.log(4);
}
printNums();