function renderProgressBar() {
  let elem = document.createElement('div');
  elem.setAttribute('class', 'bar-child');
  document.getElementsByClassName('bar')[0].appendChild(elem);

  let elapsedDuration = 0,
    totalDuration = 2000, // 5000ms
    intervalDuration = 10;
  const intervalId = setInterval(function () {
    let width = (elapsedDuration / totalDuration) * 100 + '%';
    elem.style.width = width;
    elapsedDuration = elapsedDuration + intervalDuration;
    console.log(elapsedDuration);
    if (elapsedDuration > totalDuration) {
      clearInterval(intervalId);
      console.log(barCount);
      barCount--;
      if (barCount > 0) {
        renderProgressBar();
      }
    }
  }, intervalDuration);
}

let barCount = 0;
function addBar() {
  barCount++;
  if (barCount === 1) {
    renderProgressBar();
  }
}
