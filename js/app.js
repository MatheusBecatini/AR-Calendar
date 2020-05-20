window.onload = function() {
const tela = document.querySelector("a-marker");


const criarText = (elemento, pos, text) => {
    //Atributos do a-text
    const escala = '1 1 1'
    const alinhamento = 'left'
    const largura = '3'
    const rotacao = '270 0 0'

    elemento.setAttribute('scale', escala)
    elemento.setAttribute('width', largura)
    elemento.setAttribute('rotation', rotacao)
    elemento.setAttribute('align', alinhamento)
    elemento.setAttribute('position', pos)
    elemento.setAttribute('value', text)
}

const apresentarTitulos = () => {
    const eventoTitle = document.createElement('a-text')
    criarText(eventoTitle, `-1.8 -1.91 -0.2`, `Evento`)
    tela.appendChild(eventoTitle)

    const horarioTitle = document.createElement('a-text')
    criarText(horarioTitle, `0 -1.91 -0.2`, `Horario`)
    tela.appendChild(horarioTitle)

    const organizadorTitle = document.createElement('a-text')
    criarText(organizadorTitle, `0.9 -1.91 -0.2`, `Organizador`)
    tela.appendChild(organizadorTitle)
}

// Position = 'X Z Y' 
// - x = esquerda
// - y = subir

apresentarTitulos()

//Criando o texto 
const evento = document.createElement('a-text')
criarText(evento, `-1.8 -1.91 0.1`, `dia do encontro semanal`)
tela.appendChild(evento)

const horario = document.createElement('a-text')
criarText(horario, `0 -1.91 0.1`, `14:00 - 18:00`)
tela.appendChild(horario)

const organizador = document.createElement('a-text')
criarText(organizador, `0.9 -1.91 0.1`, `Matheus Becatini`)
tela.appendChild(organizador)



}