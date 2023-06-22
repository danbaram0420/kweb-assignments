const makeRandomNumber = () =>{
    return Math.round(Math.random()*255)
};

const setRandomBgColor = () => {
    const col_box = document.getElementById('color-box');
    const colorset1 = makeRandomNumber().toString();
    const colorset2 = makeRandomNumber().toString();
    const colorset3 = makeRandomNumber().toString();
    const colorset = 'rgb('+colorset1+', '+colorset2+', '+colorset3+')';
    col_box.setAttribute('style', 'background-color :'+colorset);
    };
    