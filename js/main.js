const inputA = document.querySelector('#input-a')
const inputC = document.querySelector('#input-b')

const btn = document.querySelector('#btn')

const anwearBox = document.querySelector('#answear-box')
const error = document.querySelector('#error')

btn.addEventListener('click', answearText)

function cal(a,c) {
  let A = +a.value
  let C = +c.value

  if (C % A === 0) {
    error.textContent = `Есть общий делитель - ${A}`
    return
  }

  error.textContent = ''

  for (let i = 0; i < C; i++) {
    if ((A* i) % C === 1) {
      return i;
    }
}

}

function answearText() {
  const result = cal(inputA, inputC)

  anwearBox.textContent = result
}