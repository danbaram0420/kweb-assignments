const makeRandomNumber = () =>{
    return Math.round(Math.random()*255)
};

const changeBoxColor = () => {
    const toChange = document.getElementsByClassName('box')[1];
    const colorset1 = makeRandomNumber().toString();
    const colorset2 = makeRandomNumber().toString();
    const colorset3 = makeRandomNumber().toString();
    const colorset = 'rgb('+colorset1+', '+colorset2+', '+colorset3+')';
    toChange.setAttribute('style', 'background-color :'+colorset);
};
