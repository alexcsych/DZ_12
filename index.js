printNumbers(-5, 5, 500);

function printNumbers(from, to, interval) {
  let current = from;
  let timId = setInterval(function () {
    if (current >= to) {
      clearInterval(timId);
    }
    console.log("setInterval :>> ", current++);
  }, interval);
}
