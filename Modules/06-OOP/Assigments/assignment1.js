class Calculator{
    constructor(num = 0){
        this.lastValue = num
        this.answer =  this.lastValue
    }
    _curValue = null;
    _symbol = null;
    _history = [];

    //Input value determine the number of record shown from the last calculation
    //If the input number is bigger than the number of calculation, it will return all the records
    //Initial value only shows the last record
    value(num = 1){
        if(num <= 0) return
        const count = this._history.length - num;
       
        return this._history.slice(count < 0 ? 0 : count).forEach(str=> console.log(str))
    }
   

    add(num){
        if(!num) return this
        this._symbol = '+'
        this._curValue = num; 
        this.lastValue = this.answer
        this.answer = this.answer + num
        this._history.push(`${this.lastValue} ${this._symbol} ${this._curValue} = ${this.answer}`)
        return this
    }

    substract(num){
        if(!num) return this
        this._symbol = '-'
        this._curValue = num; 
        this.lastValue = this.answer
        this.answer = this.answer - num
        this._history.push(`${this.lastValue} ${this._symbol} ${this._curValue} = ${this.answer}`)
        return this
    }

    multiply(num){
        if(!num) return this
        this._symbol = '*'
        this._curValue = num; 
        this.lastValue = this.answer
        this.answer = this.answer * num
        this._history.push(`${this.lastValue} ${this._symbol} ${this._curValue} = ${this.answer}`)
        return this
    }

    divide(num){
        if(!num) return this
        this._symbol = '/'
        this._curValue = num; 
        this.lastValue = this.answer
        this.answer = this.answer / num;
        this._history.push(`${this.lastValue} ${this._symbol} ${this._curValue} = ${this.answer}`)
        return this
    }
}

const cal = new Calculator(0)
const cal2 = new Calculator() // Test with no input

cal.add(10).substract(4).multiply(4)
cal.value() // vv

console.log('---------------------------')
cal2.add(5).multiply(3).substract(3).divide(6)
cal2.value(2) // Show last 2 calculation 
console.log('---------------------------')
cal2.value(9) // Input value more than the number of calculation

