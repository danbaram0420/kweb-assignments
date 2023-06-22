const displayTimes = () =>{
    const times = document.getElementById('times-result');
    const inp = document.getElementById('number');
    times.innerText = ''
    if(isNaN(inp.value) || inp.value < 1 || inp.value > 9 || Math.floor(inp.value) != inp.value){
        const txt = document.createTextNode('Input Error!');
        times.appendChild(txt);
    }
    else{
        for(let i = 1; i < 10; i++){
            let toinsert = inp.value + ' * ' + String(i) + ' = ' + inp.value*i;
            let txt = document.createTextNode(toinsert);
            times.appendChild(txt);
            times.appendChild(document.createElement('br'));
        }
    }
}