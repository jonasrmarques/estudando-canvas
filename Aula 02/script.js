let canvas = document.getElementById("desenho1")
let canvasContexto = canvas.getContext("2d")
let px = 100
let py = 50


                    //(x, y)
canvasContexto.moveTo(0, 0) // Define o ponto de partida de onde sairá a linha
canvasContexto.lineTo(250, 250) // Define uma linha
canvasContexto.lineTo(400,250)
canvasContexto.lineTo(400,100)
canvasContexto.moveTo(250,250)
canvasContexto.lineTo(200,300)
canvasContexto.stroke() // Renderizar as linhas

//canvas.Contexto.fillRect()
//canvasContexto.fill()
//canvasContexto.clearRect(50, 50, 100, 100) // Serve para apagar a area do Canvas toda vez que precisar atualizar o desenho.

