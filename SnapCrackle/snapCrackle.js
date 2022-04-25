function snapCrackle (maxValue) {
    let arr = []
    for(let i = 1; i<= maxValue; i++) {
        if(i % 2 != 0 && i % 5 == 0) {
            arr.push('SnapCrackle')
        }
        else if(i % 2 != 0) {
            arr.push('Snap')
        }
        else if(i % 5 == 0) {
            arr.push('Crackle')
        }
        else {
            arr.push(i)
        }
    }
    return arr.join(', ')
}

function snapCracklePrime(maxValue) {
    let arr = []
    for(let i = 1; i<= maxValue; i++) {
        for (let i = 2; i < maxValue; i++) {
            if (maxValue % i == 0) {
                continue
            }
            else if(i % 2 != 0 && i % 5 == 0) {
                arr.push('SnapCracklePrime')
            }
            else if(i % 2 != 0) {
                arr.push('SnapPrime')
            }
            else if(i % 5 == 0) {
                arr.push('CracklePrime')
            }
            // return maxValue >= 2;
        }  
        if(i % 2 != 0 && i % 5 == 0) {
            arr.push('SnapCrackle')
        }
        else if(i % 2 != 0) {
            arr.push('Snap')
        }
        else if(i % 5 == 0) {
            arr.push('Crackle')
        }
        else {
            arr.push(i)
        }
    }
    return arr.join(', ') 
}



console.log(snapCracklePrime(10))