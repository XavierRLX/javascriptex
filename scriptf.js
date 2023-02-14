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
 <script src="scriptf.js"></script>

    <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
    
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
 <script src="scriptf.js"></script>

    <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
    
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
 <script src="scriptf.js"></script>

    <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
    
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
 <script src="scriptf.js"></script>

    <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
    
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
 <script src="scriptf.js"></script>

    <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
    
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
 <script src="scriptf.js"></script>

    <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
    
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
 <script src="scriptf.js"></script>

    <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
    
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
 <script src="scriptf.js"></script>

    <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
    
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
 <script src="scriptf.js"></script>

    <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
    
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
 <script src="scriptf.js"></script>

    <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
    
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
 <script src="scriptf.js"></script>

    <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
    
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
 <script src="scriptf.js"></script>

    <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
    
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
 <script src="scriptf.js"></script>

    <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
    
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
 <script src="scriptf.js"></script>

    <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
    
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
 <script src="scriptf.js"></script>

    <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
    
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
v
 <script src="scriptf.js"></script>

    <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
    
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
 <script src="scriptf.js"></script>

    <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
    
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
 <script src="scriptf.js"></script>

    <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
    
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
 <script src="scriptf.js"></script>

    <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
    
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}
 <script src="scriptf.js"></script>

    <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
    
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
 <script src="scriptf.js"></script>

    <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
    
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
 <script src="scriptf.js"></script>

    <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
    
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
 <script src="scriptf.js"></script>

    <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
    
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
 <script src="scriptf.js"></script>

    <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
    
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
 <script src="scriptf.js"></script>

    <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
    
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script> <script src="scriptf.js"></script>

    <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
    
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script> <script src="scriptf.js"></script>

    <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
    
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script> <script src="scriptf.js"></script>

    <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
    
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
 <script src="scriptf.js"></script>

    <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
    
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script> <script src="scriptf.js"></script>

    <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
    
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script> <script src="scriptf.js"></script>

    <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
    
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script> <script src="scriptf.js"></script>

    <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
    
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
 <script src="scriptf.js"></script>

    <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
    
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script> <script src="scriptf.js"></script>

    <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
    
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
 <script src="scriptf.js"></script>

    <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
    
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
 <script src="scriptf.js"></script>

    <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
    
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script> <script src="scriptf.js"></script>

    <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
    
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script> <script src="scriptf.js"></script>

    <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
    
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
      <script>
        var con = document.getElementById('contar')
        var tab = document.getElementById('tabuadar')
        var fot = document.getElementById('fotor')
        var conn = document.getElementById('contador')
        var tabb = document.getElementById('tabuada')
        var fott = document.getElementById('fotos')
        var txt = document.getElementById('texto')
        con.addEventListener('click', clitar)
        tab.addEventListener('click', clidar)
        fot.addEventListener('click', clitor)

        function clitar(){
            tabb.style.display = 'none'
            conn.style.display = 'block'
            fott.style.display = 'none'
            txt.style.display = 'none'
            con.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            fot.style.backgroundColor = 'black'
        }
        function clidar(){
            tabb.style.display = 'block'
            conn.style.display = 'none'
            fott.style.display = 'none'
            txt.style.display = 'none'
            tab.style.backgroundColor = 'red'
            fot.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'

        }
        function clitor(){
            tabb.style.display = 'none'
            conn.style.display = 'none'
            fott.style.display = 'block'
            txt.style.display = 'none'
            fot.style.backgroundColor = 'red'
            tab.style.backgroundColor = 'black'
            con.style.backgroundColor = 'black'
        }
    </script>
    <script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
        
</script>


<div id="txt">
    
<script type="text/javascript">document.write(startTime())</script>
<script>document.write(window.location.href);</script>
<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
7 - Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
8 - Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>

<script type="text/javascript">document.write(Date());</script>

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


 <script>

        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");
        pincel.fillstyle="lightgrey";
        pincel.fillRect(0,0,600,400);
        pincel.strokeRect(0,0,600,400);
        pincel.beginPath();
        var serie2015 = [50,25,20,5];
        var serie2016 = [65,20,13,2];
        var cores = ["blue", "green", "yellow", "red"];


        function desenhaBarra(x, y, serie, cores, ano){

            pincel.beginPath();
            pincel.font="18px Georgia";
            pincel.fillstyle="black";
            pincel.fillText(ano,x,y -10);

            var contador = 0;
            var yAcumulado = y;

            while(contador < 4){
                pincel.beginPath();
                pincel.fillstyle=cores[contador];
                pincel.fillRect(x, y, 50, serie[contador]);
                pincel.strokeRect(x, yAcumulado, 50, serie[0]);
                yAcumulado = yAcumulado+serie[contador];

                contador++;
            }

        }

        desenhaBarra (50, 50, serie2015, cores, '2015');
        desenhaBarra (150, 50, serie2016, cores, '2016');

</script>
    
    <script>
function pulaLinha() {
document.write("<br>");
}

function mostra(frase) {
document.write();
pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

mostra ("Pode dirigir")

}
if (idade < 18) {

mostra ("Não pode dirigir")

}

</script>
</script>
