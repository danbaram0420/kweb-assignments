const getDivisors = input => {
    let rtarray = [];
    for(let i = 1; i <= Math.sqrt(input); i++){
        if(input % i === 0){
            rtarray.push(i);
            if(input / i != i){
                rtarray.push(input/i);
            }
        }
    }
    rtarray.sort((a, b) => a - b);
    return rtarray;
};