function verificar(){ //carregar pra funcionar na maquina
    var anos = document.getElementById('tano')
    var img = document.getElementById('foto')
    var descr = document.getElementById('des')
    var ano = Number(anos.value)
    var data = new Date()
//  var ano = data.getFullYear()
//  var ano =                         //forçar na maquina
    if (ano == 0){
        alert('Selecione um número')
    }
    if (ano < 2000){
        img.src = 'foto00.jpg'
        descr.innerHTML = 'Ainda não era nascido'
    } else if (ano <= 2011){
        descr.innerHTML = 'Sem foto ainda...'
    } else if ( ano === 2012) {
        img.src = 'foto2012.jpg'
        descr.innerHTML = `Passeio da escola para a Floresta da tijuca - Rj`
    } else if ( ano === 2013) {
        img.src = 'foto2013.jpg'
        descr.innerHTML = ` Passeio da escola para Petropolis - Rj`
    } else if ( ano === 2014) {
        img.src = 'foto2014.jpg'
        descr.innerHTML = `Tirada no banheiro`
    }else if ( ano === 2015) {
        img.src = 'foto2015.jpg'
        descr.innerHTML = `Com a blusa do flamengo`
    }else if ( ano === 2016) {
        img.src = 'foto2016.jpg'
        descr.innerHTML = `Tirada no meu antigo, deixando o cabelo crescer`
    }else if ( ano === 2017) {
        img.src = 'foto2017.jpg'
        descr.innerHTML = `Foto registrada em Nilopolis no desfile da banda da escola`
    }else if ( ano === 2018) {
        img.src = 'foto2018.jpg'
        descr.innerHTML = `Foto tirada para uma tentiva de virar ator`
    }else if ( ano === 2019) {
        img.src = 'foto2019.jpg'
        descr.innerHTML = `Penedo - Rj`
    }else if ( ano === 2020) {
        img.src = 'foto2020.jpg'
        descr.innerHTML = `Rio das Ostras - Rj`
    }else if ( ano === 2021) {
        img.src = 'foto2021.jpg'
        descr.innerHTML = `Campos do Jordão - Sp`
    } else if ( ano === 2022 ) {
        descr.innerHTML = 'Ainda não tirada'
    }else {
        alert('Fotos até 2021')
    }
}

function contar(){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ) {
        alert('ERRO, Faltam dados')
    } else {
        res.innerHTML = 'Contando: <br>' 
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0){
            alert('Considerando 0 = 1')
            p = 1
        }
    if( i < f) {
        //contagem crescente
           for( let c = i; c <= f; c += p){ 
            res.innerHTML += `${c} `   
        }
    }else{
        //contagem decrescente
            for (let c = i; c >= f; c -= p){
                res.innerHTML += `${c} `
            }   
        }
        res.innerHTML += `Fim.`
    }
}

function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0){
         alert('digite um número')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while ( c <= 100) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}` 
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}