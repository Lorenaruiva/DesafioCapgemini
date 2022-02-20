function validarsenhaForca() {
  var senha = ''
  var senha = document.getElementById('senhaForca').value
  var forca = 0
  if (senha.length >= 1 && senha.length < 6) {
    forca += 0
  }
  if (senha.length > 5 && senha.match(/[0-9]+/) != null) {
    forca += 1
  }

  if (senha.length > 5 && senha.match(/[a-z]+/) != null) {
    forca += 1
  }

  if (senha.length > 5 && senha.match(/[A-Z]+/) != null) {
    forca += 1
  }

  if (senha.length > 5 && senha.match(/[!,@,#,$,%,^,&,*,(, ),+,-]+/) != null) {
    forca += 1
  }
  //Para verificar quando a senha for maior que 6 e se a variavél "senha" tem os caracteres exigidos.

  mostrarForca(forca)
}

function mostrarForca(forca) {
  if (forca === 0) {
    document.getElementById('erroSenhaForca').innerHTML =
      "<span style='color: #fff'>Senha dever conter entre 6 e 8 digitos</span>"
  } else if (forca === 1) {
    document.getElementById('erroSenhaForca').innerHTML =
      "<span style='color: #ff000f'>Fraca</span>"
  } else if (forca === 2 || forca === 3) {
    document.getElementById('erroSenhaForca').innerHTML =
      "<span style='color: #FFD700'>Média</span>"
  } else if (forca === 4) {
    document.getElementById('erroSenhaForca').innerHTML =
      "<span style='color: #008000'>Forte</span>"
  }
}

const docEl = document.getElementById('doc')
const copyEl = document.getElementById('copy')
const lenEl = document.getElementById('len')
const upperEl = document.getElementById('upper')
const lowerEl = document.getElementById('lower')
const numberEl = document.getElementById('number')
const symbolEl = document.getElementById('symbol')
const generateEl = document.getElementById('generate')

const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowerLetters = 'abcdefghijklmnopqrstuvwxyz'
const numbers = '0123456789'
const symbols = '!@#$%^&*()-+'

function getLowercase() {
  return lowerLetters[Math.floor(Math.random() * lowerLetters.length)]
}

function getUppercase() {
  return upperLetters[Math.floor(Math.random() * upperLetters.length)]
}

function getNumber() {
  return numbers[Math.floor(Math.random() * numbers.length)]
}

function getSymbol() {
  return symbols[Math.floor(Math.random() * symbols.length)]
}

function generatePassword() {
  const len = lenEl.value

  let password = ''

  if (upperEl.checked) {
    password += getUppercase()
  }

  if (lowerEl.checked) {
    password += getLowercase()
  }

  if (numberEl.checked) {
    password += getNumber()
  }

  if (symbolEl.checked) {
    password += getSymbol()
  }

  for (let i = password.length; i < len; i++) {
    const x = generateX()
    console.log('valor de x  ' + x)
    password += x
  }

  docEl.innerText = String(password)
}
function generateX() {
  const xs = []
  console.log(xs)

  if (upperEl.checked) {
    xs.push(String(getUppercase()))
  }

  if (lowerEl.checked) {
    xs.push(getLowercase())
  }

  if (numberEl.checked) {
    xs.push(getNumber())
  }

  if (symbolEl.checked) {
    xs.push(getSymbol())
  }

  if (xs.length === 0) return ''

  return xs[Math.floor(Math.random() * xs.length)]
}

generateEl.addEventListener('click', generatePassword)

copyEl.addEventListener('click', () => {
  const textarea = document.createElement('textarea')
  const password = docEl.innerText

  if (!password) {
    return
  }
  textarea.value = password
  document.body.appendChild(textarea)
  textarea.select()
  document.execCommand('copy')
  textarea.remove()
  alert('O texto foi copiado')
})
