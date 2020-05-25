window.onload = function() {
    const tela = document.querySelector("a-marker");
    const eixoZ = 0.05
    const eixoY = 0

    // Position = 'X Z Y' 
    // - x = esquerda
    // - y = subir

    const criarText = (elemento, pos, text) => {
        //Atributos do a-text
        const escala = '0.5 0.5 0.5'
        const alinhamento = 'left'
        const largura = '4'
        const rotacao = '270 0 0'

        elemento.setAttribute('scale', escala)
        elemento.setAttribute('width', largura)
        elemento.setAttribute('rotation', rotacao)
        elemento.setAttribute('align', alinhamento)
        elemento.setAttribute('position', pos)
        elemento.setAttribute('value', text)
        elemento.setAttribute('font', "./assets/font/custom-msdf.json")
        elemento.setAttribute('negate', 'false')
    }

    const apresentarTitulos = () => {
        const eventoTitle = document.createElement('a-text')
        criarText(eventoTitle, `-1.29 ${eixoZ} ${eixoY}`, `Evento`)
        eventoTitle.setAttribute('width', 4)
        eventoTitle.setAttribute('color', '#EBF5FB')
        tela.appendChild(eventoTitle)

        const horarioTitle = document.createElement('a-text')
        criarText(horarioTitle, `0 ${eixoZ} ${eixoY}`, `Horário`)
        horarioTitle.setAttribute('width', 4)
        horarioTitle.setAttribute('color', '#EBF5FB')
        tela.appendChild(horarioTitle)

        const organizadorTitle = document.createElement('a-text')
        criarText(organizadorTitle, `0.6 ${eixoZ} ${eixoY}`, `Organizador`)
        organizadorTitle.setAttribute('width', 4)
        organizadorTitle.setAttribute('color', '#EBF5FB')
        tela.appendChild(organizadorTitle)
    }
    apresentarTitulos()

    async function getCalendar () {
        const events = await this.obter()
        // console.log(events)
        if (events.menssage){
            alert(events.menssage + events.debug)
        }
        else
            criarEventos(events)
    }
    getCalendar()


    function criarEventos (events){
        let posVertical = eixoY + 0.15
        for (const event of events.value) {
            const evento = document.createElement('a-text')
            criarText(evento, `-1.4 ${eixoZ} ${posVertical}`,  event.subject.substring(0, 31))
            tela.appendChild(evento)
            
            const horario = document.createElement('a-text')
            criarText(horario, `-0.05 ${eixoZ} ${posVertical}`,  moment.utc(event.start.dateTime).local().format('H:mm')
            + ' - ' 
            + moment.utc(event.end.dateTime).local().format('H:mm'))
            tela.appendChild(horario)
            
            const organizador = document.createElement('a-text')
            criarText(organizador, `0.6 ${eixoZ} ${posVertical}`, event.organizer.emailAddress.name.substring(0, 17))
            tela.appendChild(organizador)

            posVertical += 0.15
        }
    }
}