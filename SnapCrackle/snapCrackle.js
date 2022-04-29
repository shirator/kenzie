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

