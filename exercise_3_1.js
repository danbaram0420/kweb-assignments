const isValidNumber = input => {
    if(1 <= Number(input) && Number(input) <= 9 && Number(input) % 1 === 0){
        return true;
    }
    else{
        return false;
    }
};