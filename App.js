//------------------ Debounce Example ---------------///

// With debouce implementation your function is not called unless timer has not expired.
// Any subsequent calls to your function are cancelled
function getData() {
  let customInput = document.getElementById("test")
  console.dir(customInput.value)
  console.log("Key preessed")
}

function applyDebounce(localFunction, time) {
  let timer
  if (timer) clearTimeout(timer)
  return function(...args) {
    timer = setTimeout(() => {
      localFunction()
    }, time)
  }
}

const getDataWithDebounce = applyDebounce(getData, 5000)

//-----------------------------------------------------------///

//------------------ Throttling Example ---------------///
// With throttle your function is called everytime action is perforrmed by user
//Subsequent function calls are queued and executed as and when timmer expiires
// Hence we have disabled button in below example which avoids any further user actions

function getDataV2(localFunctionVar, interval) {
  let btn = document.getElementById("btn")
  return function(...args) {
    btn.disabled = true
    setTimeout(() => {
      localFunctionVar()
      btn.disabled = false
    }, interval)
  }
}

function actualFunction() {
  console.log("Method called")
}

const getDataWithThrottlle = getDataV2(actualFunction, 5000)

//-----------------------------------------------------------///
