function getRandomInt (min, max) {
  min = Math.ceil(min)
  max = Math.floor(max) + 1
  return Math.floor(Math.random() * (max - min)) + min
}

function run () {
  const lowE = document.querySelector('#low')
  const highE = document.querySelector('#high')
  const outE = document.querySelector('#out')

  const low = parseInt(lowE.value)
  const high = parseInt(highE.value)
  const rand = getRandomInt(low, high)
  outE.innerHTML = rand
}
