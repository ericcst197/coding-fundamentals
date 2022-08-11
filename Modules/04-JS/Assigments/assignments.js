//JS Assignment 1
//Calculate the sum of all numbers

function sum(arr){
    return arr.reduce((a,b)=> a+b, 0 )
}

console.log(`Assignment 1 first test---- sum([1, 2, 3, 4])`)
console.log(sum([1, 2, 3, 4]))
console.log(sum([1, 2, 3, 4]) === 10)
console.log(`Assignment 1 second test---- sum([-3, 5, 19, -6])`)
console.log(sum([-3, 5, 19, -6]))
console.log(sum([-3, 5, 19, -6]) === 15)


//JS Assignment 2
//Calculate age

function calculateAge(age){
    //To get the string in YYYY MM SS format 
    let ageString = age.split('/').reverse().join(' ');
    
    let ageTime = new Date(ageString).getTime()
    let now = new Date().getTime();

    return Math.floor((now - ageTime)/ (1000*60*60*24*365))
}
console.log(`Assignment 2 first test---- calculateAge("20/7/2002")`)
console.log(calculateAge("20/7/2002"))
console.log(`Assignment 2 second test---- calculateAge("1/1/1979")`)
console.log(calculateAge("1/1/1979"))

//JS Assignment 3
// Return the factorial of a provided integer.

function factorial(num){  
    if(num === 1) return 1
    return num * factorial(num-1)
}

console.log(`Assignment 3 first test---- factorial(5)`)
console.log(factorial(5))
console.log(factorial(5) === 120)
console.log(`Assignment 3 second test---- factorial(4)`)
console.log(factorial(4))
console.log(factorial(4) === 24)
console.log(`Assignment 3 third test---- factorial(1)`)
console.log(factorial(1))
console.log(factorial(1) === 1)

//JS Assignment 4
//Find the nth Tetrahedral Number

// From the test cases, there is a sequance as below 
// 1            => + 2 to get the next number
// 1+3          => + 3 to get the next number
// 1+3+6        => + 4 to get the next number
// 1+3+6+10     => + 5 to get the next number
// 1+3+6+10+15  => + 6 to get the next number   etc.


function tetra(n){  
    let total = 1
    if(n === 1) return total;
    let nextNum = total;
    for(let i = 2 ; i<= n ;i++){
        nextNum+= i
        total+= nextNum;
    }
    return total
}

console.log(`Assignment 4 first test---- tetra(2)`)
console.log(tetra(2))
console.log(tetra(2) === 4)
console.log(`Assignment 4 second test---- tetra(5)`)
console.log(tetra(5))
console.log(tetra(5) === 35)
console.log(`Assignment 4 third test---- tetra(6)`)
console.log(tetra(6))
console.log(tetra(6) === 56)
