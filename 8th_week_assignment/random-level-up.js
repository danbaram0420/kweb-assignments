const getRandomBinaryResult = (inp) =>{
    if(Math.random() * 100 < inp){
        return true;
    }
    else{
        return false;
    }
}

const tryLevelUp = () =>{
    const percentage = [100, 60, 36, 22, 13, 8, 5, 3,
        2, 1];
    let level = 0;
    let trytime = 0;
    const curr_level = document.getElementById('current-level');
    const attempts = document.getElementById('attempts');
    const level_bar = document.getElementById('gauge-bar');
    const loop = setInterval(() =>{
        if(level === 10){
            clearInterval(loop);
        }
        if(getRandomBinaryResult(percentage[level]) === true){
            level+=1;
            curr_level.innerText = String(level);
            level_bar.style.width = String(level*30) + 'px';
        }
        trytime+=1;
        attempts.innerText = String(trytime);

    }, 50);
}