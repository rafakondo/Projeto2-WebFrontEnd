 // Seleçao de elementos

const formDica = document.querySelector("#form-dica");
const tipoMaterial = document.querySelector("#tipo-material");
const dicaInput = document.querySelector("#dica-input");
const formFiltro = document.querySelector("#form-filtro");
const dicas = document.querySelector("#lista");

const filtroInput = document.querySelector("#filtro-input");
const botaoFiltro = document.querySelector("#botaoFiltro");
 
const horariosColeta = {
    "Ayrton Sena": "Segunda-feira, Quarta-Feira e Sexta-Feira",
    "Panorama": "Terça-feira, Quinta-feira e Sábado",
    "Bandeirantes": "Terça-feira, Quinta-feira e Sábado",
    "Vila América": "Segunda-feira, Quarta-Feira e Sexta-Feira",
    "Centro": "Segunda-Feira à Sábado A partir das 18 Hrs"
};
  

  // Funçoes
 
const saveDicaMetal = (textMaterial, textDica) => {
 
    const dica = document.createElement("div")
    dica.classList.add("dica")
 
    dica.style.backgroundColor = 'rgb(228, 228, 128)';
 
    const tituloMaterial = document.createElement("h4")
    tituloMaterial.innerText = textMaterial
    dica.appendChild(tituloMaterial)
 
    const tituloDica = document.createElement("h4")
    tituloDica.innerText = textDica
    dica.appendChild(tituloDica)
 
    const excluir = document.createElement("button")
    excluir.classList.add("botaoExcluir")
    excluir.innerText = "Excluir"
    dica.appendChild(excluir)

    dicas.appendChild(dica)
    
    dicaInput.value = "";
}
 
const saveDicaPlastico = (textMaterial, textDica) => {
 
    const dica = document.createElement("div")
    dica.classList.add("dica")

    dica.style.backgroundColor = 'rgb(224, 80, 80)';

    const tituloMaterial = document.createElement("h4")
    tituloMaterial.innerText = textMaterial
    dica.appendChild(tituloMaterial)

    const tituloDica = document.createElement("h4")
    tituloDica.innerText = textDica
    dica.appendChild(tituloDica)

    const excluir = document.createElement("button")
    excluir.classList.add("botaoExcluir")
    excluir.innerText = "Excluir"
    dica.appendChild(excluir)

    dicas.appendChild(dica)

    dicaInput.value = "";
}
 
const saveDicaPapel = (textMaterial, textDica) => {
 
    const dica = document.createElement("div")
    dica.classList.add("dica")

    dica.style.backgroundColor = 'rgb(79, 136, 243)';

    const tituloMaterial = document.createElement("h4")
    tituloMaterial.innerText = textMaterial
    dica.appendChild(tituloMaterial)

    const tituloDica = document.createElement("h4")
    tituloDica.innerText = textDica
    dica.appendChild(tituloDica)

    const excluir = document.createElement("button")
    excluir.classList.add("botaoExcluir")
    excluir.innerText = "Excluir"
    dica.appendChild(excluir)

    dicas.appendChild(dica)

    dicaInput.value = "";
}
 
const saveDicaOrganico = (textMaterial, textDica) => {
 
    const dica = document.createElement("div")
    dica.classList.add("dica")

    dica.style.backgroundColor = 'rgb(70, 50, 50)';

    const tituloMaterial = document.createElement("h4")
    tituloMaterial.innerText = textMaterial
    dica.appendChild(tituloMaterial)

    const tituloDica = document.createElement("h4")
    tituloDica.innerText = textDica
    dica.appendChild(tituloDica)

    const excluir = document.createElement("button")
    excluir.classList.add("botaoExcluir")
    excluir.innerText = "Excluir"
    dica.appendChild(excluir)

    dicas.appendChild(dica)
    
    dicaInput.value = "";
}
 
const saveDicaVidro = (textMaterial, textDica) => {
 
    const dica = document.createElement("div")
    dica.classList.add("dica")

    dica.style.backgroundColor = 'rgb(62, 151, 62)';

    const tituloMaterial = document.createElement("h4")
    tituloMaterial.innerText = textMaterial
    dica.appendChild(tituloMaterial)

    const tituloDica = document.createElement("h4")
    tituloDica.innerText = textDica
    dica.appendChild(tituloDica)

    const excluir = document.createElement("button")
    excluir.classList.add("botaoExcluir")
    excluir.innerText = "Excluir"
    dica.appendChild(excluir)

    dicas.appendChild(dica)

    dicaInput.value = "";
}

function exibirHorariosColeta() {
    const listaHorarios = document.getElementById("listaHorarios");
    listaHorarios.innerHTML = "";
  
    for (const bairro in horariosColeta) {
      const horario = horariosColeta[bairro];
      const itemLista = document.createElement("li");
      itemLista.textContent = `${bairro}: ${horario}`;
      listaHorarios.appendChild(itemLista);
    }
  }
 
  // Eventos
 
formDica.addEventListener("submit", (e) => {
     e.preventDefault();
 
     const material = tipoMaterial.value
     const dica = dicaInput.value

     if (dica.trim() === "") {                        // Caso esteja em branco
        alert("Digite uma dica antes de enviar.");
     return;
  }
 
     if(material === "Metal: "){
         saveDicaMetal(material, dica);
     } else if (material === "Plastico: "){
         saveDicaPlastico(material, dica);
     } else if (material === "Papel: "){
         saveDicaPapel(material, dica);
     } else if (material === "Organico: "){
         saveDicaOrganico(material, dica);
     } else if (material === "Vidro: "){
         saveDicaVidro(material, dica);
     }
});
 
document.addEventListener("click", (e) =>{
     const elemClicado = e.target;
     const elemPai = elemClicado.closest("div");
 
     if(elemClicado.classList.contains("botaoExcluir")){
         elemPai.remove();
     }
})

botaoFiltro.addEventListener("click", (e) => {
    e.preventDefault();
  
    const filtro = filtroInput.value.toLowerCase();
    const dicas = document.querySelectorAll(".dica");
  
    if (filtro === "") {
      alert("Informe um material a ser pesquisado");
    } else {
      let materialEncontrado = false;
  
      dicas.forEach((dica) => {
        const tituloMaterial = dica.querySelector("h4:first-child");
        const material = tituloMaterial.innerText.toLowerCase();
  
        if (material.includes(filtro)) {
          dica.classList.remove("oculto");
          materialEncontrado = true;
        } else {
          dica.classList.add("oculto");
        }
      });

      if (!materialEncontrado) {
        alert("Material não encontrado");
      }
    }
});

const btnMostrarHorarios = document.getElementById("btnMostrarHorarios");
btnMostrarHorarios.addEventListener("click", exibirHorariosColeta);