const runSimLoop = 100;
const runSimLoop2 = 10;
const probN = 2;
const probD = 10;
const probabilities = [];

const runSim = () => {

  for(let i = 0; i < runSimLoop; i++) {
    let tempProb = 0;
    for(let a = 0; a < runSimLoop2; a++) {
      let n = Math.ceil(Math.random() * probD);
      if(n <= probN) {
        tempProb++
      }
    }
    probabilities.push(tempProb);
    $('ul').append(`<li>${tempProb}/${probD}</li>`)
  }
  console.log(probabilities)
  const probSum = probabilities.reduce((a,b) => {
    return a+b;
  }, 0)
  const probAvgExct = probSum/probabilities.length
  const probAvgRnd = Math.round(probSum/probabilities.length)
  $('.exact-prob').text(`Exact: ${probAvgExct}/${probD}`);
  $('.rounded-prob').text(`Rounded: ${probAvgRnd}/${probD}`);
}

$(document).ready(() => {
  runSim()
})
