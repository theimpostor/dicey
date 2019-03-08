import random from 'random'

// Globals
const numbw = {
  e: {
    low: document.querySelector('#numbw-low'),
    high: document.querySelector('#numbw-high'),
    out: document.querySelector('#numbw-out'),
    execBtn: document.querySelector('#numbw-exec'),
    hundredBtn: document.querySelector('#numbw-preset-hundred'),
    thousandBtn: document.querySelector('#numbw-preset-thousand')
  }
}

// Functions
function numbwExec () {
  const low = parseInt(numbw.e.low.value)
  const high = parseInt(numbw.e.high.value)
  // TODO validation
  const rand = random.int(low, high)
  numbw.e.out.innerHTML = rand
}

// Main
function main () {
  // wire up
  numbw.e.execBtn.addEventListener('click', numbwExec, false)
  numbw.e.hundredBtn.addEventListener('click', function () {
    numbw.e.low.value = 1
    numbw.e.high.value = 100
    numbwExec()
  }, false)
  numbw.e.thousandBtn.addEventListener('click', function () {
    numbw.e.low.value = 1
    numbw.e.high.value = 1000
    numbwExec()
  }, false)
}

main()
