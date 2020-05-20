window.onload = function() {
    const tela = document.querySelector("a-marker");
    const eixoZ = -2.8

    // Position = 'X Z Y' 
    // - x = esquerda
    // - y = subir

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
        elemento.setAttribute('font', "./assets/font/custom-msdf.json")
        elemento.setAttribute('negate', 'false')
    }

    const apresentarTitulos = () => {
        const eventoTitle = document.createElement('a-text')
        criarText(eventoTitle, `-2.1 ${eixoZ} -0.4`, `Evento`)
        tela.appendChild(eventoTitle)

        const horarioTitle = document.createElement('a-text')
        criarText(horarioTitle, `0 ${eixoZ} -0.4`, `Horario`)
        tela.appendChild(horarioTitle)

        const organizadorTitle = document.createElement('a-text')
        criarText(organizadorTitle, `0.9 ${eixoZ} -0.4`, `Organizador`)
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
        let pos = -0.1
        for (const event of events.value) {
            const evento = document.createElement('a-text')
            criarText(evento, `-2.1 ${eixoZ} ${pos}`,  event.subject.substring(0, 31))
            tela.appendChild(evento)
            
            const horario = document.createElement('a-text')
            criarText(horario, `0 ${eixoZ} ${pos}`,  moment.utc(event.start.dateTime).local().format('H:mm')
            + ' - ' 
            + moment.utc(event.end.dateTime).local().format('H:mm'))
            tela.appendChild(horario)
            
            const organizador = document.createElement('a-text')
            criarText(organizador, `0.9 ${eixoZ} ${pos}`, event.organizer.emailAddress.name.substring(0, 17))
            tela.appendChild(organizador)

            pos += 0.2
        }
    }
}