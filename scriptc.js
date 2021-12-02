function contar(){
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var pas = document.getElementById('txtp')
    var res = document.getElementById('res')
    var i = Number(ini.value)
    var f = Number(fim.value)
    var p = Number(pas.value)
    if(ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0 ) {
        alert('ERRO, Faltam dados')
    } else {
        res.innerHTML = 'Contando: <br>' 
        if (p <= 0){
            alert('Considerando 0 = 1')
            p = 1
        }
    if( i < f) {
        //contagem crescente
           for( var c = i; c <= f; c += p){    
        }
        res.innerHTML += 'Fim.'
    }else{
        //contagem decrescente
            for (var c = i; c >= f; c -= p){
                res.innerHTML += `${c} `
            }   
        }
        res.innerHTML += `Fim.`
    }
}