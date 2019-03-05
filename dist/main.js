function getRandomInt (min, max) {
  min = Math.ceil(min)
  max = Math.floor(max) + 1
  return Math.floor(Math.random() * (max - min)) + min
}

function numbwExec () {
  const lowE = document.querySelector('#numbw-low')
  const highE = document.querySelector('#numbw-high')
  const outE = document.querySelector('#numbw-out')

  const low = parseInt(lowE.value)
  const high = parseInt(highE.value)
  const rand = getRandomInt(low, high)
  outE.innerHTML = rand
}

function main () {
  document.querySelector('#numbw-exec').addEventListener('click', numbwExec, false)
}

main()
