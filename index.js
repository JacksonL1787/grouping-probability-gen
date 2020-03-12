const runSimLoop = 100;
const probabilities = [];
const total = 18
const math = 12
const stats = 6
const allGroups = [];

// 18 students total
// 12 Math
// 6 stats
// split into 2
// one group got all Math

const runSim = () => {
  let totalAllMath = 0;
  for(var i = 0; i < runSimLoop; i++) {
    const group1 = [];
    const group2 = [];
    for(var a = 0; a < total; a++) {
      const n = Math.ceil(Math.random() * 18)
      let student = n <= 6 ? "stats" : "math"
      if(a % 2) {
        group1.push(student)
      } else {
        group2.push(student)
      }
    }
    allGroups.push([group1, group2])
    const allMath = ! group1.includes("stats") || ! group2.includes("stats")
    $('ul').append(`<li><b>Group 1:</b>${group1} <b>Group 2:</b>${group2} - Only Math: ${allMath}</li>`)
    if(allMath) totalAllMath++;
  }
  $('.prob').text(`All Math: ${totalAllMath}/${runSimLoop} or ${(totalAllMath/runSimLoop)*100}%`)
}

$(document).ready(() => {
  runSim()
})
