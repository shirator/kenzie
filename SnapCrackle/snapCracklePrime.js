const isPrime = num => {
    for (let i = 2; i < num; i++) if (num % i == 0) return false;
    return num >= 2; 
  }


function snapCracklePrime (maxValue) {
    let arr = []
    for(let i = 1; i<= maxValue; i++) {
        if(i % 2 != 0 && i % 5 == 0) {
            if(isPrime(i)) {
                arr.push('SnapCracklePrime')
            }
            else {
                arr.push('SnapCrackle')
            }
        }
        else if(i % 2 != 0) {
            if(isPrime(i)) {
                arr.push('SnapPrime')
            }
            else {
                arr.push('Snap')
            }
        }
        else if(i % 5 == 0) {
            if(isPrime(i)) {
                arr.push('CracklePrime')
            }
            else {
                arr.push('Crackle')
            }  
        }
        else {
            if(isPrime(i)) {
                arr.push('Prime')
            }
            else {
                arr.push(i)
            }
        }
    }
    return arr.join(', ')
}

console.log(snapCracklePrime(15))