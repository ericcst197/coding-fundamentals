function missingLetter(str) { 
    let curIndex  = str.charCodeAt(0) 

    for(let i = 0; i < str.length; i++){
        if(curIndex !== str.charCodeAt(i)) return String.fromCharCode(curIndex) 
        curIndex++
    }
    return undefined;
  }

console.log(`JS Capstone first test---- missingLetter("abce")`)
console.log(missingLetter("abce"))
  
console.log(`JS Capstone first test---- missingLetter("abcdefghjklmno")`)
console.log(missingLetter("abcdefghjklmno"))
  
console.log(`JS Capstone first test---- missingLetter("stvwx")`)
console.log(missingLetter("stvwx"))

console.log(`JS Capstone first test---- missingLetter("bcdf")`)
console.log(missingLetter("bcdf"))
  
console.log(`JS Capstone first test---- missingLetter("abcdefghijklmnopqrstuvwxyz")`)
console.log(missingLetter("abcdefghijklmnopqrstuvwxyz"))