import random from 'random'

function numbwExec () {
  const lowE = document.querySelector('#numbw-low')
  const highE = document.querySelector('#numbw-high')
  const outE = document.querySelector('#numbw-out')

  const low = parseInt(lowE.value)
  const high = parseInt(highE.value)
  const rand = random.int(low, high)
  outE.innerHTML = rand
}

function main () {
  document.querySelector('#numbw-exec').addEventListener('click', numbwExec, false)
}

main()
