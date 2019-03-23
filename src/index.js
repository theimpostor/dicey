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
const dice = {
  e: {
    out: document.querySelector('#dice-out'),
    presetBtns: [
      document.querySelector('#dice-preset-1'),
      document.querySelector('#dice-preset-2'),
      document.querySelector('#dice-preset-3')
    ]
  },
  count: 1
}
const dieFaces = [ '⚀', '⚁', '⚂', '⚃', '⚄', '⚅' ]

// Functions
function numbwExec () {
  const low = parseInt(numbw.e.low.value)
  const high = parseInt(numbw.e.high.value)
  // TODO validation
  const rand = random.int(low, high)
  numbw.e.out.innerHTML = rand
}

function diceExec () {
  let faces = []
  let total = 0
  for (let i = 0; i < dice.count; i++) {
    const rand = random.int(0, 5)
    faces.push(dieFaces[rand])
    total += rand + 1
  }
  dice.e.out.innerHTML = faces.join(' ') + '<br>' + total
}

function registerServiceWorker () {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js').then(registration => {
        console.log('SW registered: ', registration)
      }).catch(registrationError => {
        console.log('SW registration failed: ', registrationError)
      })
    })
  }
}

// Main
function main () {
  registerServiceWorker()

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

  for (let i = 0; i < dice.e.presetBtns.length; i++) {
    dice.e.presetBtns[i].addEventListener('click', function () {
      dice.count = i + 1
      diceExec()
    }, false)
  }
}

main()
