let curr_location = {
    row : 5,
    column : 0,
};

const rowMax = 6;
const rowMin = 0;
const colMax = 7;
const colMin = 0;

const getElementByPosition = (location) =>{
    const cells = document.getElementsByClassName('cells');
    const cell = cells[location.row].getElementsByTagName('div')[location.column];
    return cell;
};

const getNewPositionByKey = (button) =>{
    const changed_location = {
        row : curr_location.row,
        column : curr_location.column,
    };
    if(button === 'ArrowUp'){
        changed_location.row -= 1;
    }
    else if(button === 'ArrowRight'){
        changed_location.column += 1;
    }
    else if(button === 'ArrowLeft'){
        changed_location.column -= 1;
    }
    else if(button === 'ArrowDown'){
        changed_location.row += 1;
    }
    return changed_location;
};

const isPositionInRange = (location) =>{
    if(location.row<rowMin || location.row>rowMax || location.column<colMin || location.column>colMax){
        return false;
    }
    else{
        return true;
    }
};

const isPositionWall = (location) =>{
    if(getElementByPosition(location).className === 'cell wall'){
        return true;
    }
    else{
        return false;
    }
};

const button_up = document.addEventListener('keyup', () => {
    const pushed_button = event.key;
    const new_location = getNewPositionByKey(pushed_button);
    if(isPositionInRange(new_location) && !isPositionWall(new_location)){
        getElementByPosition(curr_location).className = 'cell';
        getElementByPosition(new_location).className = 'cell current';
        curr_location = new_location;
        if(curr_location.row === 1 && curr_location.column === 7){
            window.alert('You Escaped!');
        }
    }
});
