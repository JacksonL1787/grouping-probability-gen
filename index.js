const runSimLoop = 100;
const probabilities = [];
const total = 18
const math = 12
const stats = 6
const allGroups = [];

const shuffle = (arr) => {
  return arr.sort(() => Math.random() - 0.5);
}

const runSim = () => {
  let totalAllMath = 0;
  for(var i = 0; i < runSimLoop; i++) {
    const group1 = [];
    const group2 = [];
    const students = ["math","math","math","math","math","math","math","math","math","math","math","math","stats","stats","stats","stats","stats","stats"];
    const randStudents = shuffle(students)
    for(var a = 0; a < randStudents.length; a++) {
      if(a < 9) {
        group1.push(randStudents[a])
      } else {
        group2.push(randStudents[a])
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
