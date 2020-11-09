let visor = document.getElementById('visor');
let confirmar = document.getElementById('confirmar');
let billsDisplayer = document.getElementById('boca');
let limpar = document.getElementById('btn-limpar');
let infinito = document.getElementById('infinito');

function atualizaSaldo(saldo){
    let valorInfinito = infinito.innerText; 
    infinito.innerText = parseInt(infinito.innerText) - saldo;
    setTimeout(() => {
        infinito.innerText = valorInfinito;
    }, 2000)
}

function limparVisor(){
    setTimeout(() => {
        visor.value = "";
    },2000)
}

function retirarNotas(valueInitial){
    let notas = valueInitial;
    billsDisplayer.innerText = "";

    while (notas > 0) {
        if (notas >= 100) {
          notas = notas - 100;
          billsDisplayer.innerText = billsDisplayer.innerText + ' R$ 100';
        } else if (notas >= 50) {
          notas = notas - 50;
          billsDisplayer.innerText = billsDisplayer.innerText + ' R$ 50';
        } else if (notas >= 20) {
          notas = notas - 20;
          billsDisplayer.innerText = billsDisplayer.innerText + ' R$ 20';
        } else if (notas >= 10) {
          notas = notas - 10;
          billsDisplayer.innerText = billsDisplayer.innerText + ' R$ 10';
        }
    }
}

document.querySelectorAll(".line > .btn").forEach(btn => {
    btn.addEventListener('click', () => {
        visor.value += btn.innerHTML;
    })
})

limpar.addEventListener('click', () =>{
    visor.value = "";
    setTimeout(()=>{
        billsDisplayer.innerText = "";
    },600)
})

confirmar.addEventListener('click', () =>{
    if(visor.value % 10 == 0 && !visor.value == "" ){
        retirarNotas(visor.value);
        atualizaSaldo(visor.value)
        visor.style.fontSize = "1.5em";
        visor.value = "PODE RETIRAR";
        limparVisor();
        
    }else{
        if(visor.value == ""){
            visor.style.fontSize = "1.5em";
            visor.value = "INSIRA UM VALOR";
            limparVisor();
        }else{
            visor.style.fontSize = "1.5em";
            visor.value = "NOTAS INDISPONÍVEIS PARA ESSE SAQUE";
            limparVisor();
        }
    }
});
