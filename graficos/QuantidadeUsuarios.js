async function quantidadeUsuarios() {
    const url = 'https://raw.githubusercontent.com/silviosnjr/CienciaD...'
    const res = await fetch(url)
    const dados = await res.json()
    const nomeDosPostos = Object.keys(dados)
    const quantidadeTrabalhadores = Object.values(dados)


    const data = [
        {
            x: nomeDosPostos,
            y: quantidadeTrabalhadores,
            type: 'bar'
        }
    ]
}

const grafico = document.createElement('div')
grafico.className = 'grafico'
document.getElementById('graficos-container') .appendChild(grafico)
plotly.newPlot(grafico, data)

}

QuantidadeUsuarios