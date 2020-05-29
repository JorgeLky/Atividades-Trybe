// code by Lyraah
// variáveis e constantes
const estados = ['Acre (AC)', 'Alagoas (AL)', 'Amapá (AP)', 'Amazonas (AM)', 'Bahia (BA)', 'Ceará (CE)', 'Distrito Federal (DF)', 'Espírito Santo (ES)', 'Goiás (GO)', 'Maranhão (MA)', 'Mato Grosso (MT)', 'Mato Grosso do Sul (MS)', 'Minas Gerais (MG)', 'Pará (PA)', 'Paraíba (PB)', 'Paraná (PR)', 'Pernambuco (PE)', 'Piauí (PI)', 'Rio de Janeiro (RJ)', 'Rio Grande do Norte (RN)', 'Rio Grande do Sul (RS)', 'Rondônia (RO)', 'Roraima (RR)', 'Santa Catarina (SC)', 'São Paulo (SP)', 'Sergipe (SE)', 'Tocantins (TO)'];
const val = document.querySelectorAll('.input')
const env = document.querySelector('#enviar');
const clear = document.querySelector('#limpar');
// funções e métodos
function est(n){
  for(let i = 0; i < n.length; i+= 1){
      let opt = document.createElement('option');
      document.querySelector('#estados').appendChild(opt);
      opt.innerText = n[i];
  }
}

function stop(e){
  for(let i = 0; i < val.length; i += 1){
      if (val[i].value === ""){
          e.preventDefault();
          alert('Verifique os campos preenchidos')
          break;
      }
  }
}

function limpar(){
    for(let i = 0; i < val.length; i += 1){
        val[i].value = "";
    }
}

// acionamento
est(estados);

// eventos 
env.addEventListener('click', stop);
clear.addEventListener('click', limpar);
