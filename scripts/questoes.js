//Criar uma função que exibe a quantidade de # formando uma escada
//

function escada(valor) {
  var n = valor
  var digitos = new Array(n - 1)
  var asteriscos = ['*']

  for (let i = 1; i <= n; i++) {
    document.write(asteriscos)
    document.write('\n ')
  }
}

function exibirAsteriscos(linhas) {
  for (let linha = 1; linha <= linhas; linha++) {
    let padrao = ''
    for (let i = 0; i < linha; i++) {
      padrao += '*'
    }
  }
}
