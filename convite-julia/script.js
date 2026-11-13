const films={"Cara de Barro":["21h40"],"Os Farofeiros 3":["17h20","19h30"],"O Gatola da Cartola":["14h30","19h00"],"Como Roubar um Banco":["16h50","19h20","21h20"],"Ebenezer e os Fantasmas do Natal":["14h10","16h30","18h50","21h10"],"Lago dos Ossos":["21h50"],"O Bosque Selvagem":["16h40"],"A Virada: Ignição da Alma":["14h50","19h15"]};let report='';let confirmation='';let choiceType='';const $=id=>document.getElementById(id);function show(id){for(const x of ['invitation','choices','movies','suggestion','report'])$(x).hidden=x!==id}function increase(){ $('bar').style.width='100%';$('score').textContent='100%'}function choose(type){choiceType=type;if(type==='cinema'){const m=$('movie');m.innerHTML=Object.keys(films).map(x=>`<option value="${x}">${x}</option>`).join('');m.onchange=times;m.value='Cara de Barro';times();show('movies')}else if(type==='lanchonete')finish('Gabriel convidou a Júlia para ir a uma lanchonete neste sábado, em um horário que seja bom para os dois.');else if(type==='acai')finish('Gabriel convidou a Júlia para ir ao The Best Açaí do Centro neste sábado, em qualquer horário do dia, conforme a disponibilidade dela.');else show('suggestion')}function times(){const name=$('movie').value;$('time').innerHTML=films[name].map(t=>`<option value="${t}">${t}</option>`).join('')}function finishMovie(){
 const filme=$('movie').value, horario=$('time').value;
 finish(`Gabriel convidou a Júlia para ir ao Cinema do Davó neste sábado, 14 de novembro, assistir ao filme ${filme}, na sessão das ${horario}.`);
}
function finishSuggestion(){
 const v=$('idea').value.trim();
 if(!v){alert('Escreva sua sugestão primeiro.');return}
 finish(`Gabriel convidou a Júlia para sair, e ela sugeriu o seguinte passeio: ${v}.`);
}
function finish(t){
 let pedido = '';
 if (choiceType === 'cinema') {
   pedido = `A gente está pensando em assistir a ${$('movie').value}, na sessão das ${$('time').value}, no Cinema do Davó.`;
 } else if (choiceType === 'acai') {
   pedido = 'A ideia é ir ao The Best Açaí do Centro, em qualquer horário do dia que seja bom para ela.';
 } else if (choiceType === 'lanchonete') {
   pedido = 'A ideia é irmos a uma lanchonete, em um horário que seja bom para nós dois.';
 } else {
   pedido = `A Júlia sugeriu este passeio: ${$('idea').value.trim()}. A gente pode combinar os detalhes direitinho.`;
 }
 report = `Oi, Jussara! Tudo bem? 💚

Queria saber se a senhora deixa eu levar a Júlia para um passeio neste sábado, dia 14.

${pedido}

Prometo cuidar direitinho dela e fazer desse um passeio bem legal!

Será que a senhora libera nosso passeio? 💚

Obrigado desde já!
Gabriel`;
 let detalhe = '';
 if (choiceType === 'cinema') detalhe = `Bora assistir ${$('movie').value} no Cinema do Davó, na sessão das ${$('time').value}! 🎬`;
 else if (choiceType === 'acai') detalhe = 'Partiu The Best Açaí do Centro! O horário a gente combina. 💚';
 else if (choiceType === 'lanchonete') detalhe = 'Partiu lanchonete! Só falta decidir onde e a hora. 💚';
 else detalhe = `Minha sugestão é: ${$('idea').value.trim()}! 💚`;
 confirmation = `Ok, lindão, vamos! 💚

${detalhe}

Agora é só caprichar no encontro, hein!`;
 $('reportText').textContent = report;
 increase();
 show('report');
}
function reset(){report='';$('bar').style.width='35%';$('score').textContent='35%';show('choices')}$('send').onclick=()=>window.open('https://wa.me/?text='+encodeURIComponent(report),'_blank','noopener,noreferrer');$('notifyGabriel').onclick=()=>window.open('https://wa.me/5511930639021?text='+encodeURIComponent(confirmation),'_blank','noopener,noreferrer');$('start').onclick=()=>{$('loading').hidden=true;$('game').hidden=false};