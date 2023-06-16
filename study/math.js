class Game {
  constructor() {
    this.init();
  }

  init() {
    this.problems = new Array(20).fill(0).map(generateProblem);
    this.current = -1;
  }

  start() {

  }

  saveChoise(value) {
    this.problems[this.current].choise = value;
  }

  next() {
    this.current++;
    return this.problems[this.current];
  }

}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomOp() {
  return Math.random() < 0.5 ? '+' : '-';
}

function generateProblem() {
  const op = getRandomOp();
  let left = 0;
  let right = 0;
  return op === '+' ? {
    left: left = getRandomInt(0, 98), op, right: right = getRandomInt(0, 99 - left),
    result: eval(`${left}${op}${right}`),
    choise: null
  } : {
    left: left = getRandomInt(1, 99), op, right: right = getRandomInt(0, left),
    result: eval(`${left}${op}${right}`),
    choise: null
  };
}

document.addEventListener("DOMContentLoaded", () => {

  let beginTime, endTime;
  let game;
  const container = document.querySelector('#main');
  const subject = document.querySelector('.subject');

  const toStep2 = () => {
    container.classList.remove('step1', 'step3');
    container.classList.add('step2');
  }

  const toStep3 = () => {
    container.classList.remove('step1', 'step2');
    container.classList.add('step3');
    endTime = +new Date();
    let yes = 0;
    let no = 0;
    document.querySelector('.subjects').innerHTML = game.problems.map(({ left, op, right, result, choise }) => {
      const correct = Math.floor(result / 10) === choise;
      correct ? (yes++) : (no++);
      return `<li><span>${left} ${op} ${right} = ${result}</span><span>${choise}+</span><span class="${correct ? 'green' : 'red'}">${correct ? '正确' : '错误'
        }</span ></li > `;
    }).join('');
    document.querySelector('.summary').innerHTML = `共20道题，你答对了${yes}题，答错${no}题，用时${Math.round((endTime - beginTime) / 1000)}秒。`;
  }

  [...document.querySelectorAll('.begin button')].forEach((button) => {
    button.addEventListener('click', () => {
      container.classList.remove('step1', 'step3');
      container.classList.add('step2');
      game = new Game();
      game.init();
      showProblem();
      beginTime = +new Date();
      console.log(game.problems);
    });
  });

  document.querySelector('.answers').addEventListener('click', event => {
    if (!game || event.target.nodeName !== 'BUTTON') { return; }
    const button = event.target;
    const value = parseInt(button.textContent, 10);
    console.log(value);
    game.saveChoise(value);
    showProblem();
  });

  function showProblem() {
    const problem = game.next();
    if (!problem) {
      return toStep3();
    }
    subject.textContent = `${problem.left} ${problem.op} ${problem.right} = ? `;
  }

});

