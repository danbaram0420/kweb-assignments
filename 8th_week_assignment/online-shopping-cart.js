const item = {
    apple : 700,
    orange : 800,
    lemon : 900,
};

const cost = document.getElementById('cost');
let total_cost = 0;
const btn = document.getElementsByClassName('add-to-cart');
for(const cbtn of btn){
    cbtn.addEventListener('click', () =>{
        total_cost += item[cbtn.parentElement.parentElement.id];
        cost.innerText = String(total_cost);
    });
}

