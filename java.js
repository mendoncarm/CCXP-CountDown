const dia = document.getElementById('dia')
const hora = document.getElementById('hora')
const minuto = document.getElementById('minuto')
const segundo = document.getElementById('segundo')

const lancamento = "01 dec 2023"

function countDown(){
    const dataLanc = new Date(lancamento)
    const hoje = new Date()

    const segTotal = (dataLanc - hoje)/1000;

    const totalDias = Math.floor(segTotal / 60 / 60 / 24);
    const totalHoras = Math.floor(segTotal / 60 / 60) % 24;
    const totalMinutos = Math.floor(segTotal / 60) % 60;
    const totalSegundos = Math.floor(segTotal % 60);

    dia.innerHTML = time(totalDias)
    hora.innerHTML = time(totalHoras)
    minuto.innerHTML = time(totalMinutos)
    segundo.innerHTML = time(totalSegundos)
}

function time(tempo){
    return tempo<10? `0${tempo}` : tempo;
}

countDown();
setInterval(countDown,1000);